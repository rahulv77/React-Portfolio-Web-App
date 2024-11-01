import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial= {{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="bg-gradient-to-tr from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-3xl text-transparent my-20 text-center">Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter ">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x:-100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.phoneNo}
            </motion.p>
            <a href="https://mail.google.com/mail/" className="border-b">{CONTACT.email}</a>
        </div>
      
    </div>
  )
}

export default Contact
