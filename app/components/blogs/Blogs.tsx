import Link from "next/link";
import Post from "../blogpost/Post";
import blogsData from "@/assets/blogsData";

function Blog() {
  return (
    <div id="blogs" className="p-2">
      <h1 className="text-4xl font-bold">Latest Blog Posts</h1>
      <div>
        {blogsData.map((blog) => (
          <Post
            key={blog.id}
            title={blog.title}
            desc={blog.desc}
            date={blog.date}
            time={blog.time}
            link={blog.link}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="https://corneliusemase.hashnode.dev/"
          target="_blank"
          className="font-bold text-blue-500"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}

export default Blog;
