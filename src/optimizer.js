export function optimizeImage(url, options = {}) {
    const { quality, width, height, format } = options;
    // Handle dynamic optimization
    const connection = navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
    const downloadSpeed = connection ? connection.downlink : 1; // in Mbps
    let adjustedQuality = quality !== null && quality !== void 0 ? quality : 80; // Default quality if not specified
    let adjustedWidth = width !== null && width !== void 0 ? width : 800; // Default width if not specified
    let adjustedHeight = height !== null && height !== void 0 ? height : 600; // Default height if not specified
    if (downloadSpeed < 1) {
        adjustedQuality = Math.max(adjustedQuality - 20, 30); // lower quality
        adjustedWidth = Math.floor(adjustedWidth * 0.8); // reduce width
        adjustedHeight = Math.floor(adjustedHeight * 0.8); // reduce height
    }
    else if (downloadSpeed < 3) {
        adjustedQuality = Math.max(adjustedQuality - 10, 50); // moderate quality reduction
    }
    return `${url}?quality=${adjustedQuality}&width=${adjustedWidth}&height=${adjustedHeight}${format ? `&format=${format}` : ''}`;
}
//# sourceMappingURL=optimizer.js.map