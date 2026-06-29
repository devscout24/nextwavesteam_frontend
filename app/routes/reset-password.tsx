import { useState } from "react"
import AuthInput from "~/components/common/auth-input"
import Logo from "~/components/common/logo"
import { Button } from "~/components/ui/button"
import { MdArrowBackIosNew } from "react-icons/md"
import { Link } from "react-router"

export default function ResetPassword({}: {}) {
  const [step, setStep] = useState(1)

  return step === 1 ? (
    <div className="w-full max-w-122 rounded-2xl bg-white p-10">
      <Link
        to="/auth"
        className="mb-2 flex items-center gap-2 bg-transparent text-[#717182] hover:bg-transparent"
      >
        <MdArrowBackIosNew />
        <span className="">Back to sign in</span>
      </Link>

      {/* logo */}
      <div className="flex justify-center">
        <Logo height={100} width={100} />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
        <p className="font-inter mt-2 text-base text-[#5F6275]">
          We'll send a code to your email
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <AuthInput
          label="Email address"
          placeholder="you@example.com"
          type="email"
        />
      </div>

      {/* Send Code in btn */}
      <Button
        onClick={() => setStep(2)}
        className="font-inter mt-6 w-full rounded-full bg-[#5A38F5] py-5.5 text-base font-medium hover:bg-[#5A38F5]"
      >
        Send Code
      </Button>
    </div>
  ) : step === 2 ? (
    <div className="w-full max-w-122 rounded-2xl bg-white p-10">
      {/* logo */}
      <div className="flex justify-center">
        <Logo height={100} width={100} />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Enter your code</h2>
        <p className="font-inter mt-2 text-base text-[#5F6275]">
          Enter the 4-digit code we sent to your email.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <AuthInput label="Code" placeholder="Enter your code" type="text" />
      </div>

      {/* Send Code in btn */}
      <Button
        onClick={() => setStep(3)}
        className="font-inter mt-6 w-full rounded-full bg-[#5A38F5] py-5.5 text-base font-medium hover:bg-[#5A38F5]"
      >
        Submit Code
      </Button>
      <p className="mt-1 text-center text-[14px] text-[#5F6275]">
        For security, this code expires in 10 minutes.
      </p>
    </div>
  ) : step === 3 ? (
    <div className="w-full max-w-122 rounded-2xl bg-white p-10">
      {/* logo */}
      <div className="flex justify-center">
        <Logo height={100} width={100} />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Create new password
        </h2>
        <p className="font-inter mt-2 text-base text-[#5F6275]">
          Choose something only you would know. Avoid reusing old passwords.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <AuthInput
          label="New Password"
          placeholder="Enter your new password"
          type="password"
        />
        <AuthInput
          label="Confirm Password"
          placeholder="Confirm your new password"
          type="password"
        />
      </div>

      {/* Send Code in btn */}
      <Button className="font-inter mt-6 w-full rounded-full bg-[#5A38F5] py-5.5 text-base font-medium hover:bg-[#5A38F5]">
        Save and continue
      </Button>
    </div>
  ) : null
}
