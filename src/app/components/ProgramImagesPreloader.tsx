import { useEffect } from 'react'
import {
  preloadAllProgramImages,
  preloadPriorityImages,
  preloadSpeakerImages,
} from '../utils/preloadImages'

export default function ProgramImagesPreloader() {
  useEffect(() => {
    preloadPriorityImages()

    const runSecondary = () => {
      preloadSpeakerImages()
      preloadAllProgramImages()
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(runSecondary, { timeout: 1200 })
      return () => window.cancelIdleCallback(id)
    }

    const timer = window.setTimeout(runSecondary, 300)
    return () => window.clearTimeout(timer)
  }, [])

  return null
}
