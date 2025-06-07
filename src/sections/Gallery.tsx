import Lenis from 'lenis'
import { useEffect, useRef, useState } from 'react'

import { useTransform, useScroll, motion } from 'motion/react'
import type { MotionValue } from 'motion'
import { cn } from '@/lib/utils'

const images = [
  '/gallery/photo01.webp',
  '/gallery/photo02.webp',
  '/gallery/photo03.webp',
  '/gallery/photo04.webp',
  '/gallery/photo05.webp',
  '/gallery/photo06.webp',
  '/gallery/photo07.webp',
  '/gallery/photo08.webp',
  '/gallery/photo09.webp',
  '/gallery/photo10.webp',
  '/gallery/photo11.webp',
  '/gallery/photo12.webp',
]

export default function Gallery() {
  const gallery = useRef(null)

  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ['start end', 'end start'],
  })

  const { height } = dimension

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.9])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.65])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section>
      <div className="h-[25vh]"></div>
      <div ref={gallery} className="bg-dark h-[175vh] overflow-hidden">
        <div className="relative -top-[50vh] flex h-[200vh] gap-[2vw] p-[2vw]">
          <Column y={y} images={[images[0], images[1], images[2]]} />
          <Column className="hidden sm:flex" y={y2} images={[images[3], images[4], images[5]]} />
          <Column y={y3} images={[images[6], images[7], images[8]]} />
          <Column className="2lg:flex hidden" y={y4} images={[images[9], images[10], images[11]]} />
        </div>
      </div>
      <div className="h-[25vh]"></div>
    </section>
  )
}

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  images: string[]
  y: MotionValue
}

const Column = (props: ColumnProps) => {
  const { className, images, y } = props
  return (
    <motion.div
      className={cn('relative flex h-full flex-1 flex-col gap-[2vw] whitespace-nowrap', className)}
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div key={i} className="relative h-1/3 w-full overflow-hidden rounded-[.5vw]">
            <img className="size-full object-cover" src={`${src}`} alt="image" />
          </div>
        )
      })}
    </motion.div>
  )
}
