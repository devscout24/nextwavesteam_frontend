import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { GoEyeClosed } from "react-icons/go"
import { GoEye } from "react-icons/go";

export default function AuthInput({
  label,
  placeholder,
  type,
}: {
  label?: string
  placeholder?: string
  type?: string
}) {
  const [showPassword, setShowPassword] = React.useState(false)

  if (type === "password") {
    return (
      <div className="relative">
        <p className="font-inter text-base font-medium text-[#1A1A2E]">
          {label}
        </p>
        <Input
          placeholder={placeholder}
          className="rounded-full bg-[#F5F4F9] py-5! pr-10 mt-1.5  "
          type={showPassword ? "text" : "password"}
        />

        <Button
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-0 bottom-1 bg-transparent text-[#717182]! hover:bg-transparent "
        >
          {showPassword ? <GoEye /> : <GoEyeClosed />}
        </Button>
      </div>
    )
  } else {
    return (
      <div>
        <p className="font-inter text-base font-medium text-[#1A1A2E]">
          {label}
        </p>
        <Input
          placeholder={placeholder}
          className="rounded-full bg-[#F5F4F9] py-5! mt-1.5 "
        />
      </div>
    )
  }
}
