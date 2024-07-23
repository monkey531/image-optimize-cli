interface OptimizeOptions {
  quality?: number
  width?: number
  height?: number
  format?: string
}

export function optimizeImage(url: string, options: OptimizeOptions = {}): string {
  const { quality, width, height, format } = options

  // Handle dynamic optimization
  const connection =
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection
  const downloadSpeed = connection ? connection.downlink : 1 // in Mbps

  let adjustedQuality = quality ?? 80 // Default quality if not specified
  let adjustedWidth = width ?? 800 // Default width if not specified
  let adjustedHeight = height ?? 600 // Default height if not specified

  if (downloadSpeed < 1) {
    adjustedQuality = Math.max(adjustedQuality - 20, 30) // lower quality
    adjustedWidth = Math.floor(adjustedWidth * 0.8) // reduce width
    adjustedHeight = Math.floor(adjustedHeight * 0.8) // reduce height
  } else if (downloadSpeed < 3) {
    adjustedQuality = Math.max(adjustedQuality - 10, 50) // moderate quality reduction
  }

  return `${url}?quality=${adjustedQuality}&width=${adjustedWidth}&height=${adjustedHeight}${format ? `&format=${format}` : ''}`
}
