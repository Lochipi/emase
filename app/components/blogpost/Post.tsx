import Link from "next/link";

function Post(props: any) {
  return (
    <div className="text-gray-300 px-20 mt-4 py-2">
      <Link
        href=""
        className="cursor-pointer transition duration-150 hover:text-blue-500"
      >
        <h1 className="text-3xl">{props.title}</h1>
        <h5 className="text-2xl">{props.desc}</h5>
      </Link>
      <p className="font-light">
        Posted by{" "}
        <span className="text-gray-800">
          <Link
            href="#"
            className="underline italic font-light hover:text-blue-500 text-gray-400"
          >
            Cornelius L. Emase
          </Link>{" "}
        </span>{" "}
        <span className="px-2"> {props.date}.</span> {props.time} Min read.
      </p>
      <hr className="mt-2" />
    </div>
  );
}

export default Post;
