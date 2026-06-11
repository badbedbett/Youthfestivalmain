import { useEffect, useState } from 'react'

type ProgramImageProps = {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export default function ProgramImage({ src, alt, className, style }: ProgramImageProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => setLoaded(true)
    img.onerror = () => setLoaded(true)
    img.src = src
    if (img.complete) setLoaded(true)
  }, [src])

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: loaded ? 'transparent' : 'linear-gradient(110deg, #f0f0f0 0%, #e8e8e8 50%, #f0f0f0 100%)',
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
    </div>
  )
}
