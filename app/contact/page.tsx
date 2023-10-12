"use client";

const page = () => {
  return (
    <div className="w-full md:max-h-screen p-4">
      <div className="max-h-screen max-w-[600px] mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl inline-block text-orange-700 border-b-4 border-cyan-600 font-bold ">
            Contact Me!
          </h2>
        </div>

        <div className="max-w-[600px]">
          <p>Lemme hear from you!</p>
          <form action="/contact" method="post" className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="outline-none py-2 px-4 text-black "
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="outline-none py-2 px-4 text-black"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="outline-none py-2 px-4 text-black"
              rows={10}
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="mx-auto cursor-pointer font-bold px-4 py-2 border-orange-100 inline-block border hover:bg-orange-600 transition duration-20"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
