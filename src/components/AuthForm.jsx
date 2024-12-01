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
import { useState } from 'react'

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

const AuthForm = ({ type }) => {
  const [isloading, setisLoading] = useState(false)
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
          <h1 className=' text-2xl font-bold text-white mb-8'>
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
          
          <button className="mt-8 w-full bg-white text-black py-4 rounded-2xl text-lg font-medium flex items-center justify-center">
            {type === "signin" ? "Sign In" : "Sign Up"}
            {isloading && 
              <svg className="animate-spin h-5 w-5 ml-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            }
          </button>

           <p className="text-white/60 text-center text-base mt-4">
            {type === "signup" 
              ? "Already have an account? " 
              : "Don't have an account? "
            }
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="text-white"
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
