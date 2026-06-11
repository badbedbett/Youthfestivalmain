import { useEffect } from 'react'
import { preloadAllProgramImages } from '../utils/preloadImages'

export default function ProgramImagesPreloader() {
  useEffect(() => {
    const run = () => preloadAllProgramImages()

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }

    const timer = window.setTimeout(run, 800)
    return () => window.clearTimeout(timer)
  }, [])

  return null
}
