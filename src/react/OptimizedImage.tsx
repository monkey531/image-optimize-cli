import React from 'react'
import { optimizeImage } from '@/optimizer'

interface OptimizedImageProps {
  src: string
  alt?: string
  quality?: number
  width?: number
  height?: number
  format?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt = '',
  quality,
  width,
  height,
  format
}) => {
  const optimizedSrc = optimizeImage(src, { quality, width, height, format })

  return <img src={optimizedSrc} alt={alt} width={width} height={height} />
}

export default OptimizedImage
