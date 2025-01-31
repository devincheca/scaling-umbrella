# Documentation for devs
On this document you'll find the most important tokens that can be used to match the provided design.

## General
Font family used: Raleway (https://fonts.google.com/specimen/Raleway)

## Font sizes
- "MORE FROM"
    - mobile: `size 17px` / `weight 900`
    - desktop: `size 31px` / `weight 900`

- "ROUNDED" accent
    - mobile: `size 12px` / `weight 800`
    - desktop: `size 14px` / `weight 800`

- "MAIN" title
    - mobile: `size 49px` / `weight 900`
    - desktop: `size 35px` / `weight 900`

- "PARAGRAPH"
    - mobile: `size 14px` / `weight 500`
    - desktop: `size 16px` / `weight 500`

- "CTA"
    - mobile: `size 14px` / `weight 900`
    - desktop: `size 16px` / `weight 900`

## Colors
- Body: `#09101A`
- CTA:
    - Background: `#fff`
    - Color: `#fff`

## Gradients
The desktop background has two gradients: one from left to right and one from top to bottom. On mobile, the "background" image blends into the actual background color.

### Desktop gradient: Left to Right
- `rgba(37, 45, 55, 0) 40%`
- `#000000 72.92%`
- `#09101A 100%`

### Desktop gradient: Top to Bottom
- `rgba(0, 0, 0, 0) 75%`
- `#000000 100%`

## Foreground Image
Some slides have optional "foreground" images provided. On the first slide, there is a dog cutout image which is the foreground image; this is layered over the given background image.
When a slide is active and has a foreground image, the foreground is pinned to the bottom of the component. 

It will not exceed the below bounds of the background container. It will "overflow" above the background image container by 90px on desktop and 70px on mobile. 

The foreground takes up 50% of the available banner width on desktop and 40% on mobile. 
