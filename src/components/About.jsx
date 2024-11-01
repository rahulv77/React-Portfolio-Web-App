import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="bg-gradient-to-tr from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-3xl text-transparent my-20 text-center">About Me
          </h2>
          <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex item-center justify-center">
              <img className="rounded-xl" src={aboutImg} alt="about"></img>
                </div>   
              </motion.div>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial= {{opacity:0, x:100}}
              transition={{duration:0.5}}
              className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
                </motion.div>
          </div>
    </div>
  );
};

export default About
