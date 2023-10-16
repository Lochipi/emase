import Link from "next/link";

const Button = () => {
  return (
    <div>
      <Link
        href="#about"
        className="inline-block text-white border p-4 mt-6 group hover:bg-orange-600 transition duration-20"
      >
        <span className="hover:rotate-0">Learn More</span>
        <span className="text-1xl">
          {" "}
          <div className="transform inline-block group-hover:rotate-90 transition-10 duration-300 ease-in-out">
            {" "}
            &#8594;
          </div>
        </span>
      </Link>
    </div>
  );
};

export default Button;
