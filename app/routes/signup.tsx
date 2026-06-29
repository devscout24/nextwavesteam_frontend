import { Link } from "react-router"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import AuthInput from "~/components/common/auth-input"
import Logo from "~/components/common/logo"
import { Button } from "~/components/ui/button"

export default function Signup() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
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
          Create an Account
        </h2>

        <p className="mt-2 text-sm text-[#5F6275] sm:text-base">
          Join Fangram and own the moment
        </p>
      </div>

      {/* Role */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-max">
          <AnimatedTabs
            tabs={[
              { id: "fan", label: "Fan" },
              { id: "athlete", label: "Player / Athlete" },
            ]}
            onTabChange={(tab) => console.log(tab)}
          />
        </div>
      </div>

      {/* Inputs */}
      <div className="mt-8 space-y-5">
        <AuthInput
          label="Full name"
          placeholder="Your full name here"
          type="text"
        />

        <AuthInput
          label="Email address"
          placeholder="you@example.com"
          type="email"
        />

        <AuthInput
          label="Password"
          placeholder="Min. 8 characters"
          type="password"
        />
      </div>

      {/* Button */}
      <Button className="mt-6 h-12 w-full rounded-full bg-[#5A38F5] text-base font-medium hover:bg-[#4D2EE8] sm:h-14">
        Create Account
      </Button>

      {/* Footer */}
      <div className="mt-6 space-y-3 text-center text-sm text-[#717182]">
        <p className="flex flex-wrap items-center justify-center gap-1">
          <span>By signing up you agree to our</span>

          <Link
            to="/terms"
            className="font-medium text-[#5A38F5] hover:underline"
          >
            Terms
          </Link>

          <span>&</span>

          <Link
            to="/privacy-policy"
            className="font-medium text-[#5A38F5] hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

        <p>
          Already have an account?
          <Link
            to="/auth"
            className="ml-1 font-medium text-[#5A38F5] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}