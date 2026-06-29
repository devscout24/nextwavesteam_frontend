import type { TPreOrder } from "~/types";
import { MdStars } from "react-icons/md";
import { Button } from "../ui/button";
import { Link } from "react-router";

 
export default function PreOrderCard({product_name , description , image_url}: TPreOrder) {
  return (
    <div className="relative shadow-md rounded-lg overflow-hidden     ">

        <p className="yellowbtn w-fit absolute top-2 right-2 py-1! text-[12px]!  ">
            <MdStars />
            <span className="">PRE-ORDER</span>
        </p>
        
        <img src={image_url} alt={product_name} className="w-full h-full   max-h-72.5  object-cover rounded-lg" />

        <div className="px-5 pb-6 ">
            <h2 className=" text-[#1E1E24] font-inter font-normal text-xl mt-4    ">
                {product_name}
            </h2>
            <p className="commonP mt-2 line-clamp-2   ">
                {description}
            </p>

           <Link
           to="/pre-order"
             className={` text-base font-inter font-medium text-white bg-[#5A38F5] w-full inline-block text-center rounded-full  mt-8 py-2!     `}
           >
            View Item
           </Link>

        </div>

    </div>
  )
}