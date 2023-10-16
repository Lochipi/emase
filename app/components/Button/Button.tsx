import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div>
      <Link
        href="#about"
        className="inline-block text-white border p-4 mt-6 group hover:bg-orange-600 transition duration-20"
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center">Learn More</div>

          <div className="transform inline-block group-hover:rotate-90 transition-10 duration-300 ease-in-out">
            {" "}
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Button;
