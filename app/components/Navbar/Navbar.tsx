import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-prussian-blue-900 py-6">
        <h2 className="cursor-pointer text-3xl font-bold">
          <Link href="/" className="hover:text-cyan-400 duration-70">
            EmaseLC.
          </Link>
        </h2>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-cyan-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
