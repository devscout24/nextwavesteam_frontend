import { Link, Links } from "react-router"
import AuthInput from "~/components/common/auth-input"
import Logo from "~/components/common/logo"
import { Button } from "~/components/ui/button"

export default function Login({}: {}) {
  return (
    <div className="w-full max-w-122 rounded-2xl bg-white p-10">
      {/* logo */}

      <div className="flex justify-center">
        <Logo height={100} width={100} />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="font-inter mt-2 text-base text-[#5F6275]">
          Sign in to your Fangram account
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <AuthInput
          label="Email address"
          placeholder="you@example.com"
          type="email"
        />
        <AuthInput
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div className="flex justify-end  ">
        <Link
          to="/auth/reset-password"
          className="font-inter text-[14px] font-medium text-[#5A38F5]"
        >
          Forgot password?
        </Link>
      </div>


      {/* sign in btn */}
      <Button 
        className="bg-[#5A38F5] hover:bg-[#5A38F5] w-full py-5.5 rounded-full mt-6 font-inter font-medium text-base        "
      >
        Sign in 
      </Button>

      <div className=" mt-6.5 text-center      ">
        <h3 className=" text-[#717182]  ">
          Don't have an account? 
          <Link
            to="/auth/signup"
            className="font-inter text-[14px] font-medium text-[#5A38F5] ml-1   "
          >
            Sign up free
          </Link>
        </h3>
      </div>

    </div>
  )
}
