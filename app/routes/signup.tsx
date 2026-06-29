import { Link, Links } from "react-router"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import AuthInput from "~/components/common/auth-input"
import Logo from "~/components/common/logo"
import { Button } from "~/components/ui/button"

export default function Signup({}: {}) {
  return (
    <div className="w-full max-w-122 rounded-2xl bg-white p-10">
      {/* logo */}

      <div className="flex justify-center">
        <Logo height={100} width={100} />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
        <p className="font-inter mt-2 text-base text-[#5F6275]">
          Join Fangram and own the moment
        </p>
      </div>

      {/* role selection */}
      <div className="mt-6">
        <AnimatedTabs
          tabs={[
            { id: "fan", label: "Fan" },
            { id: "athlete", label: "Player/Athlete" },
          ]}
          onTabChange={(tab) => {
            console.log(tab)
          }}
        />
      </div>

      <div className="mt-10 space-y-4">
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

      {/* sign in btn */}
      <Button className="font-inter mt-6 w-full rounded-full bg-[#5A38F5] py-5.5 text-base font-medium hover:bg-[#5A38F5]">
        Create Account
      </Button>

      <div className="mt-6.5 text-center">
        <h3 className=" flex items-center gap-1 text-[#717182]  ">
          By signing up you agree to our
          <Link
            to="/auth/signup"
            className="font-inter ml-1 text-[14px] font-medium text-[#5A38F5]"
          >
            Terms
          </Link>
          & 
          <Link
            to="/auth/signup"
            className="font-inter ml-1 text-[14px] font-medium text-[#5A38F5]"
          >
            Privacy Policy
          </Link>
        </h3>

        <h3 className="text-[#717182] mt-2   ">
          Already have an account?
          <Link
            to="/auth"
            className="font-inter ml-1 text-[14px] font-medium text-[#5A38F5]"
          >
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  )
}
