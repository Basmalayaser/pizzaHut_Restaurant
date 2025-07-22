import pizzaImage from "./../assets/pizza-image.png"

export default function AboutFood() {
  return (
    <>
    <div className="container px-5 lg:px-20 mx-auto">
      <div className="md:flex">
        <div className="relative">
           <img src={pizzaImage} alt="" loading="lazy" className="h-full"/>
           <div className="absolute bottom-0 right-0">
            <p className="bg-red-500 text-white uppercase p-8">we cook hot pizza for you</p>
           </div>
        </div>
        <div className="pt-5 sm:pt-0 xl:pt-10 md:pl-5 xl:pl-14">
            <span className='text-xs text-red-500 font-semibold'>About Our Food</span>
            <h2 className='text-xl font-extrabold pt-1 dark:text-white'>the best delicious food made from us...</h2>
            <p className="dark:text-gray-200 max-w-[600px] py-6 ">Its the perfect dining experience where every dish is crafted with fresh, high-quality dining experience Experience quick and efficient service that ensures your food is servead fresh Its the where every dining experience where every dish is crafted with fresh, high-quality ingredients fresh, high-quality</p>
            <div className="border-t border-gray-300 flex">
                <div className="border-r border-gray-300 p-5">
                    <h3 className="font-semibold">Satsified Clients</h3>
                    <p className="text-red-500 text-3xl font-extrabold pt-2">250+</p>
                </div>
                <div className="border-r border-gray-300 p-5">
                    <h3 className="font-semibold">Total food catagories</h3>
                    <p className="text-red-500 text-3xl font-extrabold pt-2">153+</p>
                </div>
                <div className="p-5">
                    <h3 className="font-semibold">awward win</h3>
                    <p className="text-red-500 text-3xl font-extrabold pt-2">25+</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
