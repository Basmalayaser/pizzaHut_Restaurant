import { useEffect, useState } from 'react';
import Loader from './Loader';
import supabase from './../supabase-client.js';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router';



export default function Offers() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        getOffers()
    },[])
    
    async function getOffers() {
    setLoading(true);
    const { data, error } = await supabase.from('menuItems')
    .select(`
        id,
        name,
        price,
        image,
        offers (
          discount,
          discounted_price
        )
      `)
      .not('offers', 'is', null); // Filters for items with at least one offer

    if (error) {
      setError('Failed to load categories');
    } else {
      setOffers(data);
    }
    setLoading(false);
  }
 
  return (
    <>
    {error?<p id="standard_error_help" className="my-10 text-xl text-center  text-red-600 dark:text-red-400"></p>:""}
    {loading?<Loader/>:

    <div className="py-10 container px-5 lg:px-20 mx-auto">
  <h2 className="text-xl font-bold w-fit pb-1 border-b-4 border-red-500 dark:text-white">
    Best Offers
  </h2>
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={4000}
  centerMode={false}
  className="my-10"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
  {offers?.map((meal)=>(
              <div  key={meal.id} className="border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 relative">
                        <span className='bg-red-100 text-red-800 text-sm font-medium  px-2.5 py-0.5  dark:bg-red-900 dark:text-red-300 rounded-full  absolute top-4 left-4'>{meal.offers[0].discount}%</span>
                        <img
                          className="h-60 mx-auto"
                          loading="lazy"
                          src={meal.image}
                          alt={meal.name}
                        />
                        <div className="px-5 pb-5">
                            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                              {meal.name}
                            </h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xl font-bold text-gray-900 dark:text-white">
                                 EGP {meal.offers[0].discounted_price} 
                              </span>
                               <span className='text-red-400 line-through text-lg font-medium px-3'>{meal.price}</span>
                               <span className='text-green-400  text-lg font-medium '>{meal.offers[0].discount}%</span>
                            </div>
                            <Link to="menu" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">
                              See Menu
                            </Link>
                          </div>
                        </div>                   
                      </div>   
  ))}
</Carousel>
</div>


    }
      
    </>

  )
}


