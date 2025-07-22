import about1 from "./../assets/about1.jpg"
import about2 from "./../assets/about2.jpg"
import about3 from "./../assets/about3.jpg"
import about4 from "./../assets/about4.jpg"
import oldBG from "./../assets/oldBG.jpg"


function About() {
  

  return (
    <>  
    <div className="xl:px-40 2xl:px-60  bg-center bg-cover py-10" style={{background:`url(${oldBG})`}}>
      <div className="container px-5 md:px-16 lg:px-20 mx-auto mt-14">
      <h2 className="text-lg  md:text-2xl font-semibold pb-1 border-b-2 border-red-500 inline-block">OUR STORY</h2>
      <div className="sm:grid sm:grid-cols-2 items-center">
        <div className="pt-8 sm:pt-0">
          <h3 className="text-base md:text-xl font-semibold pb-3 ">THE PIZZA HUT STORY</h3>
          <p className="text-base max-w-[400px] leading-loose">The Pizza Hut story begins in May 1958. Dan and Frank Carney opened their 550-squarefoot pizza restaurant in Wichita, Kansas. Dan and Frank, with friends Richard Beemer and John Bender.</p>
        </div>
        <img src={about1} alt="pizza hut storoy image" className="pt-8 sm:pt-0"/>
        <img src={about3} alt="pizza hut storoy image" className="pt-8 sm:pt-0"/>
        <div className="sm:pl-10 pt-8 sm:pt-0">
          <h3 className="text-base md:text-xl font-semibold pb-3 uppercase">The Art of Pizza Hut's First Pizzas</h3>
          <p className="leading-loose"> made the pizza themselves. Frank rolled the dough with a rolling pin. Richard tossed the dough in the air from the pie tin. Dan filled the unbaked crust with sauce.</p>
        </div>
        <div className="pt-8 sm:pt-0">
          <h3 className="text-base md:text-xl font-semibold pb-3 uppercase">A Culture of Innovation</h3>
          <p className="leading-loose">Pizza Hut was always an entrepreneurial, innovative, fast-thinking place. It was the kind of organization where everyone shared the learning.</p>
        </div>
        <img src={about4} alt="pizza hut storoy image" className="pt-8 sm:pt-0" />
      </div>
      </div>
    </div>

    </>
  )
}

export default About