import { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import supabase from '../supabase-client';
import Loader from './Loader';

function Menu() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
    getMeals();
  }, []);

   useEffect(() => {
    initFlowbite();
  }, [categories]);

  async function getAllCategories() {
    setLoading(true);
    const { data, error } = await supabase.from('categories').select('*');
    if (error) {
      setError('Failed to load categories');
    } else {
      setCategories(data);
      setSelectedCategoryId(data[0].category_id); 
    }
    setLoading(false);
  }

  async function getMeals() {
    setLoading(true);
    const { data, error } = await supabase.from('menuItems').select(`
        id,
        name,
        price,
        image,
        description,
        category_id,
        offers (
          discount,
          discounted_price
        )
      `)
    if (error) {
      setError('Failed to load menu items. Please try again.');
    } else {
      setMenuItems(data);
    }
    setLoading(false);
  }

  return (
    <>
      {error && (
        <p id="standard_error_help" className="my-10 text-xl text-center  text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className='container px-5 lg:px-20 mx-auto mt-20'>
          <div className="mb-4 border-b border-gray-200">
            <ul
              className="flex flex-wrap justify-around text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-red-600 hover:text-red-600 dark:text-red-500 dark:hover:text-red-500 border-red-600 dark:border-red-500"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-200 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              {categories.map((category) => (
                <li key={category.category_id} className="me-2" role="presentation">
                  <button
                    onClick={() => {
                      setSelectedCategoryId(category.category_id);
                    }}
                    className="inline-block p-4 border-b-2"
                    id={`tab-${category.category_id}`}
                    data-tabs-target={`#panel-${category.category_id}`}
                    type="button"
                    role="tab"
                    aria-controls={`panel-${category.category_id}`}
                    aria-selected={category.category_id}
                  >
                    {category.category_name}
                  </button>
                </li>
              ))}
            </ul> 
          </div>
          <div id="default-styled-tab-content">
            {categories.map((category) => (
              <div
                key={category.category_id}
                className={`p-4 rounded-lg ${selectedCategoryId === category.category_id ? 'block' : 'hidden'}`}
                id={`panel-${category.category_id}`}
                role="tabpanel"
                aria-labelledby={`tab-${category.category_id}`}
              >
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 my-5">
                  {menuItems
                    .filter((meal) => meal.category_id === category.category_id)
                    .map((meal) => (
                      <div
                        key={meal.id}
                        className="relative border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 "
                      >
                        <img
                          className="py-3 h-60 mx-auto"
                          loading="lazy"
                          src={meal.image}
                          alt={meal.name}
                        />
                        {meal.offers.length>0?<span className='bg-red-100 text-red-800 text-sm font-medium  px-2.5 py-0.5  dark:bg-red-900 dark:text-red-300 rounded-full  absolute top-4 left-4'>{meal.offers[0].discount} %</span>:""}
                        <div className="px-5 pb-5">
                          <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                              {meal.name}
                          </h2>
                          <p className="flex items-center mt-2.5 mb-5 text-gray-600 dark:text-gray-300">{`${meal.description.split(' ').slice(0, 9).join(' ')}...`}</p>
                          <div className="">
                              <span className="text-xl font-bold text-gray-900 dark:text-white">
                                 EGP {meal.price}
                              </span>
                              <span className='text-red-400 line-through text-lg font-medium px-3'>{meal.offers.length>0?meal.offers[0].discounted_price:""}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;





