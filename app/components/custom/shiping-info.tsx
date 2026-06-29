import { Input } from "../ui/input";

export default function ShippingInfo({}: {}) {
  return (
    <div className="flex-1 rounded-xl bg-white p-8 shadow-sm    ">
      <h2 className="text-xl font-bold">Shipping Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4    ">

        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">First Name</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your first name"
            />
        </div>
        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">Last Name</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your last name"
            />
        </div>
        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">Email Address</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your email address"
              type="email"
            />
        </div>
        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">PHONE</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your phone number"
              type="tel"
            />
        </div>
        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">City</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your city"
            />
        </div>
        <div className="mt-4 ">
            <p className=" font-inter font-medium text-base text-[#1E1E24]   ">Zip / Postal Code</p>
            <Input
              className=" py-4 rounded-full   "
              placeholder="Enter your zip/postal code"
            />
        </div>

      </div>
    </div>
  )
}
