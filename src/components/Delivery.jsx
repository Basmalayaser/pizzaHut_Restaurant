import delivery from "./../assets/delivery.png"
import vector from "./../assets/vector.png"


export default function Delivery() {
  return (
    <>
    <div className="md:flex justify-between md:pt-5">
      <div className="relative bg-red-600 text-white md:w-2/4 md:rounded-r-full flex lg:ps-10  my-10 md:my-20 py-5">
        <img src={vector} alt="delivery image" className="max-w-32"/>
        <div className="flex flex-col justify-center">
            <span className="text-sm">Crispy, Every Bite Taste</span>
            <p className="text-xl font-semibold py-2">30 Minutes Fast Delivery Challenge</p>
            <p className="text-sm">Delivery Number : <span className="text-lg font-bold"> 0219000</span></p>
        </div>
      </div>
      <img src={delivery} alt="" className="max-w-[400px] hidden md:block"/>
    </div>
    </>
  )
}
