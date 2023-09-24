'use client'
import { useState, useEffect, useRef, RefObject } from 'react'
import HomeSection from '@/components/HomeSection'

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
    <div style={{ display: 'flex', height: '100vh', overflowY: 'scroll' }}>
      <div style={{ flex: '1', scrollSnapType: 'y mandatory' }}>
        <div ref={pageRefs[0]}>
          <HomeSection
            description="Pagina 1"
            title="Component 1"
            background="white"
            buttonLink="/"
          />
        </div>
        <div ref={pageRefs[1]}>
          <HomeSection
            description="Pagina 2"
            title="Component 2"
            background="black"
            buttonLink="/"
          />
        </div>
        <div ref={pageRefs[2]}>
          <HomeSection
            description="Pagina 3"
            title="Component 3"
            background="blue-500"
            buttonLink="/"
          />
        </div>
      </div>
      <div className="absolute top-1/3 w-16 h-44 flex flex-col justify-around items-center">
        <button
          onClick={() => handleManualScroll(0)}
          className="w-2 h-2 bg-white rounded-full"
        ></button>
        <button
          onClick={() => handleManualScroll(1)}
          className="w-2 h-2 bg-white rounded-full"
        ></button>
        <button
          onClick={() => handleManualScroll(2)}
          className="w-2 h-2 bg-white rounded-full"
        ></button>
      </div>
    </div>
  )
}

export default MainPage
