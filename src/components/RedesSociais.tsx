'use client'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoWhatsapp } from 'react-icons/bi'

const RedesSociais = () => {
  return (
    <motion.div
      initial={{ y: '200vh' }}
      animate={{ y: 0 }}
      transition={{ delay: 1.0 }}
      className="fixed bottom-0 right-8 w-px h-2/6 flex justify-start items-start bg-white z-50"
    >
      <div className="w-full h-2/3 flex flex-col items-center justify-between">
        <motion.a
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 360 }}
          transition={{ delay: 1.5 }}
          href="https://github.com/OliveiraDevs"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white"
        >
          <AiFillGithub size={30} />
        </motion.a>
        <motion.a
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 360 }}
          transition={{ delay: 1.8 }}
          href="https://www.linkedin.com/in/c410j0s3/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white"
        >
          <BiLogoLinkedin size={30} />
        </motion.a>
        <motion.a
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 360 }}
          transition={{ delay: 2.1 }}
          href="https://wa.me/5521980903910"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white"
        >
          <BiLogoWhatsapp size={30} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default RedesSociais
