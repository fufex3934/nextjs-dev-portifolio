import Image from "next/image";
const About = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Image src={"/favicon.png"} alt="logo" width={100} height={100} />

        <h2 className="text-xl font-semibold">About Me</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        I'm a passionate software developer with a focus on building clean,
        efficient, and user-friendly applications. I love working with modern
        web technologies like React, Node.js, and MongoDB, and I'm always
        exploring new tools to improve my craft. Whether it's frontend, backend,
        or full-stack, I enjoy turning ideas into reality through code.
      </p>
    </section>
  );
};

export default About;
