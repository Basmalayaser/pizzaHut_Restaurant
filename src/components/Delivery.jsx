import delivery from "./../assets/delivery.png"
import vector from "./../assets/vector.png"


export default function Delivery() {
  return (
    <>
    <div className="md:flex justify-between my-20">
      <div className="relative bg-red-500 text-white md:w-2/4 md:rounded-r-full flex ps-10 my-20">
        <img src={vector} alt="delivery image" className="max-w-32"/>
        <div className="flex flex-col justify-center">
            <span className="text-xs">Crispy, Every Bite Taste</span>
            <p className="text-xl font-semibold py-1">30 Minutes Fast Delivery Challenge</p>
            <p className="text-lg font-bold">Delivery Number  : 0219000</p>
        </div>
      </div>
      <img src={delivery} alt="" className="max-w-[400px] hidden md:block"/>
    </div>
    </>
  )
}
