import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 text-center text-gray-400 bg-gray-900 min-h-[50px]">
      <p className="font-bold">
        Designed and developed by
        <span className="text-orange-500 pl-1">Emmett</span>
      </p>

      <div>
        {/* social icons */}
        <div className="flex justify-center space-x-2 mt-2">
          <Link href="https://github.com/Lochipi" target="_blank">
            <FaGithub className="text-gray-400 text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cornelius-emase/"
            target="_blank"
          >
            <FaLinkedin className="text-blue-500 text-2xl" />
          </Link>
          <Link href="https://twitter.com/EmaseLC" target="_blank">
            <FaTwitterSquare className="text-blue-400 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
