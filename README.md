# `image-optimize-cli`

`image-optimize-cli` is a library that dynamically optimizes images based on user internet speed and quality settings. It provides components for React, Vue, and Angular, and also supports plain JavaScript usage.

## Installation

To install `image-optimize-cli`, run:

```bash
npm install image-optimize-cli
```

## Usage

### React

To use `image-optimize-cli` with React, import the `OptimizeImage` component and use it in your components:

```jsx
import React from 'react';
import { OptimizeImage } from 'image-optimize-cli/react';
  
function App() {
  return (
    <div>
      <OptimizeImage src="image.jpg" alt="Image" />
    </div>
  );
}
```

### Vue

To use `image-optimize-cli` with Vue, import the `OptimizeImage` component and use it in your components:

```vue
<template>
  <div>
    <OptimizedImage src="image.jpg" alt="Image" />
  </div>
</template>

<script>
import { OptimizeImage } from 'image-optimize-cli/vue';

export default {
  components: {
    OptimizeImage,
  },
};
</script>
```

### Angular

To use `image-optimize-cli` with Angular, import the `OptimizeImage` component and use it in your components:

```typescript
import { Component } from '@angular/core';
import { OptimizeImage } from 'image-optimize-cli/angular';

@Component({
  selector: 'app-root',
    template: `
        <div>
        <OptimizeImage src="image.jpg" alt="Image"></OptimizeImage>
        </div>
    `,
})
export class AppComponent {}
```

### JavaScript

To use `image-optimize-cli` with plain JavaScript, import the `OptimizeImage` class and use it in your scripts:

```javascript
import { OptimizeImage } from 'image-optimize-cli';

const OptimizeImage = new OptimizeImage('image.jpg', 'Image');
document.body.appendChild(OptimizeImage);
```




## Contributing

We welcome contributions to the project! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md) for submitting issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
include.