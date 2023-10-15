import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date().getDay()];

  console.log();
  return (
    <div className="p-4 text-center text-gray-400 bg-gray-900 min-h-[50px]">
      <p className="font-bold">
        Hey it's <span className="text-orange-500">{day}</span> have it nice
        Major!
      </p>

      <div>
        {/* social icons */}
        <div className="flex justify-center space-x-2 mt-2">
          <Link href="https://github.com/Lochipi">
            <FaGithub className="text-gray-400 text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/cornelius-emase/">
            <FaLinkedin className="text-blue-500 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
