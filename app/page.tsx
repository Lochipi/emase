import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div>
      <div className="px-8 mt-4">
        <p className="text-orange-400 md:text-2xl">Hi, my name is</p>
        <h2 className="text-4xl md:text-6xl pt-4 font-extrabold">
          Cornelius Emase <br /> Lochipi
        </h2>
        <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-transparent pt-4">
          I'm a Software Engineer
        </h2>
        <p className="pt-4 text-1.5xl">
          I'm a Final Year Computer Software Engineering student, that
          interested in Web Development specialized in Frontend Engineering that
          most of the time working with React Ecosystem, but also open to trying
          different things. I'm always eager to learn new things, improve skills
          with my high curiosity of how something works.
        </p>

        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
