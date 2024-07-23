<div align="center">

# `image-optimize-cli`

[![Contributors](https://img.shields.io/github/contributors/muhammad-fiaz/image-optimize-cli.svg)](https://github.com/muhammad-fiaz/image-optimize-cli/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/muhammad-fiaz/image-optimize-cli/main.svg)](https://github.com/muhammad-fiaz/image-optimize-cli/commits/main)
[![npm version](https://badge.fury.io/js/image-optimize-cli.svg)](https://badge.fury.io/js/image-optimize-cli)
[![GitHub issues](https://img.shields.io/github/issues/muhammad-fiaz/image-optimize-cli.svg)](https://github.com/muhammad-fiaz/image-optimize-cli/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/muhammad-fiaz/image-optimize-cli)](https://github.com/muhammad-fiaz/image-optimize-cli/pulls)
[![GitHub forks](https://img.shields.io/github/forks/muhammad-fiaz/image-optimize-cli.svg)](https://github.com/muhammad-fiaz/image-optimize-cli/network)
[![GitHub stars](https://img.shields.io/github/stars/muhammad-fiaz/image-optimize-cli.svg)](https://github.com/muhammad-fiaz/image-optimize-cli/stargazers)
[![GitHub followers](https://img.shields.io/github/followers/muhammad-fiaz?label=Follow)](https://github.com/muhammad-fiaz?tab=followers)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor%20on%20GitHub-Become%20a%20Sponsor-blue)](https://github.com/sponsors/muhammad-fiaz)

<div align="center">
<h3> Join our Discord Community: </h3>

[![Join Our Discord](https://img.shields.io/badge/Discord-Join_us!-blue?style=flat&logo=discord)](https://discord.com/invite/pMw7nfBzXz)

</div>
<br/>
</div>
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