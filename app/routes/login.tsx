import { Link } from "react-router"
import AuthInput from "~/components/common/auth-input"
import Logo from "~/components/common/logo"
import { Button } from "~/components/ui/button"

export default function Login() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10  ">
      {/* Logo */}
      <div className="flex justify-center">
        <Logo
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
          height={100}
          width={100}
        />
      </div>

      {/* Heading */}
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Welcome Back
        </h2>

        <p className="mt-2 font-inter text-sm text-[#5F6275] sm:text-base">
          Sign in to your Fangram account
        </p>
      </div>

      {/* Inputs */}
      <div className="mt-8 space-y-5">
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

      {/* Forgot Password */}
      <div className="mt-3 flex justify-end">
        <Link
          to="/auth/reset-password"
          className="text-sm font-medium text-[#5A38F5] transition hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Sign In */}
      <Button className="mt-6 h-12 w-full rounded-full bg-[#5A38F5] text-base font-medium hover:bg-[#4D2EE8] sm:h-14">
        Sign in
      </Button>

      {/* Signup */}
      <p className="mt-6 text-center text-sm text-[#717182] sm:text-base">
        Don't have an account?
        <Link
          to="/auth/signup"
          className="ml-1 font-medium text-[#5A38F5] hover:underline"
        >
          Sign up free
        </Link>
      </p>
    </div>
  )
}