import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800 bg-clip-text text-3xl text-transparent my-20 text-center">
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mg-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title} 
                className="my-5 mb-6 rounded"/>
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-500 hover:underline">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <a 
                href={project.livelink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 hover:underline">
                <h6 className="mb-2 font-semibold">{project.livelinktitle}</h6>
              </a>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-700">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>   
        ))}
      </div>
    </div>
  );
}

export default Projects;
