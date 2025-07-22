
function Contact() {
  return (
    <>
      <div className="container px-5 md:px-16 lg:px-20 mx-auto py-10 mt-12">
        <div className="text-center border-b border-gray-200 dark:border-gray-700 py-5 mb-10">
          <h2 className="text-lg md:text-2xl font-semibold inline-block text-red-500 pb-2">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-10 ">
          <form className="col-span-2 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg p-10 mb-10"> 
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-300 dark:focus:border-red-300"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-300 dark:focus:border-red-300"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-300 dark:focus:border-red-300"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-300 dark:focus:border-red-300"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-300 dark:focus:border-red-300"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-3 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-600"
          >
            Send
          </button>
        </form>

        <div className="border border-gray-200 dark:border-gray-700 shadow-md rounded-lg p-10 h-fit">
          <p className="text-red-500 text-lg">GET IN TOUCH</p>
          <div className="border-b border-gray-200 py-2">
            <div className="flex gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
              </svg>
              <p>Address</p>
            </div>
            <p className="text-gray-500 text-sm dark:text-gray-300">St. in front of the zoo, Mourad, Oula, Al Giza, Giza Governorate 3726522</p>
          </div>

                    <div className="border-b border-gray-200 py-2">
            <div className="flex gap-2">
               <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
               </svg>
              <p>Contact Number</p>
            </div>
            <p className="text-gray-500 text-sm dark:text-gray-300">0219000</p>
          </div>

                    <div className="border-b border-gray-200 py-2">
            <div className="flex gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd"/>
             </svg>
              <p>Email Address</p>
            </div>
            <p className="text-gray-500 text-sm dark:text-gray-300">info@pizzahut-egypt.com</p>
          </div>

        </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110541.36994428375!2d31.3302181!3d30.0248691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847220951b2ef%3A0x17545708c65d33af!2sPizza%20Hut!5e0!3m2!1sen!2seg!4v1752832600823!5m2!1sen!2seg" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 w-full py-10"></iframe>

      
      </div>
    </>
  );
}

export default Contact;