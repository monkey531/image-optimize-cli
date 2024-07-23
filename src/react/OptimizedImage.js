import React from 'react';
import { optimizeImage } from '@/optimizer';
const OptimizedImage = ({ src, alt = '', quality, width, height, format }) => {
    const optimizedSrc = optimizeImage(src, { quality, width, height, format });
    return React.createElement("img", { src: optimizedSrc, alt: alt, width: width, height: height });
};
export default OptimizedImage;
//# sourceMappingURL=OptimizedImage.js.map