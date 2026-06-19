import { useEffect, useState } from 'react'

type ProgramImageProps = {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
}

export default function ProgramImage({ src, alt, className, style, priority = false }: ProgramImageProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
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
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
    </div>
  )
}
