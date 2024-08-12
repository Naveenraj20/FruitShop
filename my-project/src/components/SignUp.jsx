import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

export default function SignUp() {
    const {
        register,
        handleSubmit,    
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
    return (
        <>
            <div id="my_modal_2" className=" grid h-screen text-center justify-center">
  <div className="mt-10 dark:bg-slate-900 border shadow-xl p-5">
    <h3 className="font-bold text-lg"><span className="text-lime-400 text-3xl" >Fruit</span><span>Shop Sign-up page</span></h3>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <p className=" mt-2 grid justify-center gap-2">

<label className="input input-bordered flex items-center gap-2 dark:bg-slate-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow outline-none" placeholder="Full-Name " {...register("fullname", { required: true })} />{errors.fullname && <span className="text-sm text-red-500">*required</span>}
</label>  

<label className="input input-bordered flex items-center gap-2 dark:bg-slate-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow outline-none" placeholder="Create Username" {...register("username", { required: true })}/>{errors.username && <span className="text-sm text-red-500">*required</span>}
</label>  

    <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow outline-none" placeholder="Email" {...register("email", { required: true })}/> {errors.email && <span className="text-sm text-red-500">*required</span>}
</label> 

<label className="input input-bordered flex items-center gap-2 dark:bg-slate-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow outline-none" placeholder="password" {...register("password", { required: true })}/> {errors.password && <span className="text-sm text-red-500">*required</span>}
</label> 

    </p>

        <div className="grid justify-center mt-4">

        <button className="btn">Sign-Up</button>
    <div className=" mt-4 ">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="text-blue-700 underline">Back</Link>
    </div>
    <div>
      
    </div>
        </div>
        </form>
  </div>
     
</div>
        </>
    )
}