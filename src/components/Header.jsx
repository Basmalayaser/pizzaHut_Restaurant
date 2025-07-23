import background from "../assets/image.png"
import pizza from "../assets/pizza.png"
import { Link } from 'react-router'

export default function Header() {
  return (
    <>
    <section className="container md:px-5 lg:px-20 mx-auto mt-[64px] md:mt-20 ">
      <div className="relative md:static bg-center bg-cover bg-no-repeat text-white flex items-center justify-between py-10 overflow-hidden md:rounded-md calcHeight  sm:h-auto" style={{ backgroundImage: `url(${background})` }}>
        <div className="max-w-[500px] px-5 py-8 md:p-0 md:ps-20 absolute z-20 md:static">
             <h1 className='text-xl  md:text-3xl font-bold md:leading-10 '>The Perfect Space to Enjoy Fantastic Food</h1>
             <p className='text-gray-100 py-8 text-base'>Festive dining at Farthings where we are strong believers in using the very best produce</p>
            <Link to="menu">
              <button aria-label="View the menu" className="bg-red-600 hover:bg-red-700 transition-all border rounded md:text-lg px-6 md:px-12 py-3 shadow-[4px_4px_0_0_#fff,4px_4px_0_1px_#000]  focus:no-underline active:shadow-[rgba(0 ,0,0,.125)_0_3px_5px_inset] cursor-pointer align-middle">See Our Menu</button>
            </Link>
        </div>
        <div className="translate-x-2/4">
            <img src={pizza} alt="piza image" loading="lazy" className='md:max-w-[600px] animate-rotate360  '/>
        </div>
      </div>
    </section>
      
    </>
  )
}


