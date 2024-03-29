import { useState } from "react"
import { toast } from "react-toastify";
import Loading from "../components/Loading";


// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Switch } from '@headlessui/react'



export const Message= ()=>{
     const [isSubmitting, setIsSubmitting] = useState(false);

const [user, setUser] = useState({
    username: "",
    lastname: "",
    email: "",
    message: "",
});

//handling input
const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    
    setUser({
        ...user,
        [name]: value,
    });
}


//handle submit
const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(user);

     setIsSubmitting(true);

    try {
        const response = await fetch("https://toast-message-seven.vercel.app/api/form/message", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });

        //await new Promise(resolve => setTimeout(resolve, 2000));
    
        if(response.ok){
            setUser({username: "", lastname: "", email: "", message: "",});
            toast.success("Response Sent Successfully");
        }else{
            toast.error("Failed to send message!!!");

        }

        setIsSubmitting(false);
    } catch (error) {
        console.log(error);
        setIsSubmitting(false);
    }
};

    return <>


    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feedback</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         kuch likhiye neeche 
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="username"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={user.username}
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastname"
                
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={user.lastname}
                onChange={handleInput}
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={user.email}
                onChange={handleInput}
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                value={user.message}
                onChange={handleInput}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          {isSubmitting ? (
          <Loading />
          ):(
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
         ) }
        </div>
      </form>
    </div>
    </>
}
