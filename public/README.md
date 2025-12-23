# Public Assets

This folder contains all static assets for the EMRLD landing page.

## Folder Structure

- `/images` - General images used throughout the site
- `/logos` - Company and brand logos (EMRLD logo, partner logos, etc.)
- `/backgrounds` - Background images and patterns

## Usage

Assets in this folder can be referenced directly from the root path in your components:

```tsx
import Image from 'next/image'

<Image src="/logos/emrld-logo.png" alt="EMRLD" width={200} height={200} />
```

Or for background images in CSS:
```css
background-image: url('/backgrounds/hero-bg.jpg');
```





