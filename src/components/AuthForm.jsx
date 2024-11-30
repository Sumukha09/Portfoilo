import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

const AuthForm = ({ type }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="auth-form flex flex-col gap-5">
          <h1 className='form-title text-2xl font-bold text-white mb-8'>
            {type === "signup" ? "Sign Up" : "Sign In"}
          </h1>
          {type === "signup" && 
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg text-white">Full name</FormLabel>
                <div className='relative'>
                  <input
                    placeholder="Enter your full name"
                    className="w-full bg-[#080D27] rounded-2xl border border-white/10 py-4 px-5 text-lg text-white/60 placeholder:text-white/60 focus:outline-none focus:ring-0"
                    {...field}
                  />
                </div>
                <FormMessage className="text-red-500" />
                <FormControl>
                </FormControl>
              </FormItem>
            )}
          />
          }
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg text-white">Email</FormLabel>
                <div className='relative'>
                  <input
                    placeholder="Enter your Email"
                    className="w-full bg-[#080D27] rounded-2xl border border-white/10 py-4 px-5 text-lg text-white/60 placeholder:text-white/60 focus:outline-none focus:ring-0"
                    {...field}
                  />
                </div>
                <FormMessage className="text-red-500" />
                <FormControl>
                </FormControl>
              </FormItem>
            )}
          />
          
          <button className=" mt-8 w-full bg-white text-black py-4 rounded-2xl text-lg font-medium ">
            {type === "signin" ? "Sign In" : "Create Account"}
          </button>

           <p className="text-white/60 text-center text-base mt-4">
            {type === "signup" 
              ? "Already have an account? " 
              : "Don't have an account? "
            }
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="text-white "
            > 
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </p>
        </form>
      </Form>
    </>
  )
}

export default AuthForm
