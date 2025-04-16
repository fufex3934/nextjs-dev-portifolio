import Image from "next/image";

const projects = [
  {
    title: "Pizza Order App",
    description:
      "A full-stack pizza ordering system with dynamic topping selection, role-based access control, and order tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "CASL"],
    image: "/pizza.png",
    link: "https://www.freepik.com/free-photos-vectors/pizza-app", 
  },
  {
    title: "Pizza Order App",
    description:
      "A full-stack pizza ordering system with dynamic topping selection, role-based access control, and order tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "CASL"],
    image: "/pizza.png",
    link: "https://www.freepik.com/free-photos-vectors/pizza-app", 
  },
  {
    title: "Pizza Order App",
    description:
      "A full-stack pizza ordering system with dynamic topping selection, role-based access control, and order tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "CASL"],
    image: "/pizza.png",
    link: "https://www.freepik.com/free-photos-vectors/pizza-app", 
  },
  {
    title: "Task Manager",
    description:
      "A productivity app to create, track, and organize your tasks with a sleek UI and persistent storage.",
    tech: ["Next.js", "MongoDB", "Zustand"],
    image: "/task.avif",
    link: "https://pngtree.com/so/task-management",
  },
];
const Projects = () => {
  return <section className="max-w-5xl mx-auto px-4 py-12">
    <h2 className="text-4xl font-bol mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
        {
            projects.map((project,index)=>(
                <div key={index}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform"
                >
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}

                    />
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        {
                            project.tech.map((tech,i)=>(
                                <span key={i}>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                    <a href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >View Project</a>
                </div>
                
            ))
        }
    </div>
  </section>;
};

export default Projects;
