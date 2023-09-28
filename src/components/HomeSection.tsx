'use client'
import { motion } from 'framer-motion'

interface HomeSectionProps {
  title: string
  description: string
  background: string
  buttonLink: string
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  description,
  background,
  buttonLink,
}) => {
  return (
    <section
      className={`w-full h-screen overflow-x-hidden flex flex-col justify-center items-center ${background}`}
    >
      <div className="absolute w-full h-screen top-0 z-0"></div>
      <div className="w-5/6 h-44 flex flex-col justify-center items-center z-10">
        <motion.h3
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-white text-sm tracking-[1em] text-center	uppercase"
        >
          {description}
        </motion.h3>
        <motion.h1
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white font-extralight text-8xl text-center uppercase"
        >
          {title}
        </motion.h1>
      </div>
      <motion.a
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ delay: 0.6 }}
        href={buttonLink}
        className="mt-8 w-64 h-12 bg-white rounded-full flex justify-center text-sm font-bold items-center z-10 uppercase"
      >
        discovery now
      </motion.a>
    </section>
  )
}

export default HomeSection
