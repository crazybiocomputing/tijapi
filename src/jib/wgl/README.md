# wij : WebGL ImageJ-like components

This folder contains all the classes for WebGL components

## Design

Each window is composed of:
- UI component for displaying title, size, type, buttons (close, ..)
- Canvas containing:
    - Texture (pixels) (ImageProcessor-like)
    - Shader (for display): vertex and basic fragment shaders
    -

## Processing

All the various processing (normalize, MM, filters, ...) are done with WebGL to speed up the computation.

## Inspirations

- Webgl2 Fundamentals
- glfx.js
