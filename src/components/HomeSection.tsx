'use client'
import Link from 'next/link'
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
    <section className="w-full h-screen overflow-x-hidden bg-black flex flex-col justify-center items-center">
      <motion.div
        className={`absolute w-full h-screen top-0 z-0 bg-${background}`}
      ></motion.div>
      <div className="w-5/6 h-44 flex flex-col justify-center items-center z-10">
        <h3 className="mb-4 text-white text-sm tracking-[1em] text-center	uppercase">
          {description}
        </h3>
        <h1 className="text-white font-extralight text-8xl text-center uppercase">
          {title}
        </h1>
      </div>
      <Link
        href={buttonLink}
        className="mt-8 w-64 h-12 bg-white rounded-full flex justify-center text-sm font-bold items-center z-10 uppercase"
      >
        discovery now
      </Link>
    </section>
  )
}

export default HomeSection
