'use client'
import { useState, useEffect, useRef, RefObject } from 'react'
import HomeSection from '@/components/HomeSection'
import { motion } from 'framer-motion'

const MainPage = () => {
  const pageRefs: RefObject<HTMLDivElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ]
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % 3)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const currentPageRef = pageRefs[currentPage]?.current
    if (currentPageRef) {
      currentPageRef.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentPage, pageRefs])

  const handleManualScroll = (index: number) => {
    setCurrentPage(index)
    const currentPageRef = pageRefs[index]?.current
    if (currentPageRef) {
      currentPageRef.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex min-w-full h-full overflow-hidden scroll-smooth">
      <div style={{ flex: '1', scrollSnapType: 'y mandatory' }}>
        <div ref={pageRefs[0]}>
          <HomeSection
            description="Pagina 1"
            title="Component 1"
            background="bg-gradient-to-r from-cyan-500 to-blue-500"
            buttonLink="/"
          />
        </div>
        <div ref={pageRefs[1]}>
          <HomeSection
            description="Pagina 2"
            title="Component 2"
            background="bg-gradient-to-r from-violet-500 to-fuchsia-500"
            buttonLink="/"
          />
        </div>
        <div ref={pageRefs[2]}>
          <HomeSection
            description="Pagina 3"
            title="Component 3"
            background="bg-gradient-to-r from-purple-500 to-pink-500"
            buttonLink="/"
          />
        </div>
      </div>
      <div className="fixed top-1/3 w-16 h-44 flex flex-col justify-around items-center">
        <motion.button
          initial={{ x: '-100vh' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => handleManualScroll(0)}
          className="w-3 h-3 bg-white rounded-full"
        ></motion.button>
        <motion.button
          initial={{ x: '-100vh' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.7 }}
          onClick={() => handleManualScroll(1)}
          className="w-3 h-3 bg-white rounded-full"
        ></motion.button>
        <motion.button
          initial={{ x: '-100vh' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.9 }}
          onClick={() => handleManualScroll(2)}
          className="w-3 h-3 bg-white rounded-full"
        ></motion.button>
      </div>
    </div>
  )
}

export default MainPage
