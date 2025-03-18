---
title: "Advanced Markdown Formatting Guide"
description: "Learn how to use all the advanced formatting features in our blog system"
excerpt: "A comprehensive guide to all the advanced formatting options available in our blog system."
image: "https://placehold.co/1200x600/1F2937/FFFFFF?text=Advanced+Markdown+Guide"
imageAlt: "Advanced Markdown Formatting Guide"
publishDate: "2025-03-17"
category: "fivem"
tags: ["markdown", "formatting", "guide"]
author: "John Smith"
language: "en"
translationKey: "advanced-markdown-guide"
---

# Advanced Markdown Formatting Guide

Welcome to our advanced Markdown formatting guide. This article demonstrates all the rich formatting options available in our blog system.

## Basic Text Formatting

You can format text in various ways:

- **Bold text** for emphasis
- *Italic text* for slight emphasis
- ~~Strikethrough text~~ for deleted content
- `inline code` for code snippets

## Links and Buttons

You can create [normal links](https://example.com) or style them as buttons:

<a href="https://example.com" class="btn">Button-styled Link</a>

## Headings

### Third Level Heading

#### Fourth Level Heading

##### Fifth Level Heading

## Blockquotes

> This is a blockquote. It's ideal for highlighting important information or quotes from other sources.
> 
> You can have multiple paragraphs in a blockquote.

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

## Code Blocks

<div class="code-filename">example.js</div>

```javascript
// This is a JavaScript code block
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

// Function call
greet('World');
```

## Tables

| Name     | Age | Profession       |
|----------|-----|------------------|
| John     | 32  | Software Engineer |
| Sophie   | 28  | Data Scientist   |
| Michael  | 45  | Project Manager  |

## Images with Captions

![Server rack in a data center](https://placehold.co/800x400/1F2937/FFFFFF?text=Server+Rack)

<span class="image-caption">A server rack in our state-of-the-art data center</span>

## Custom Callouts

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Information
  </div>
  <div class="callout-content">
    This is an information callout. Use it to provide additional context or important notes.
  </div>
</div>

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    Warning
  </div>
  <div class="callout-content">
    This is a warning callout. Use it to warn users about potential issues or important considerations.
  </div>
</div>

<div class="callout danger">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Danger
  </div>
  <div class="callout-content">
    This is a danger callout. Use it to highlight critical warnings or dangerous actions.
  </div>
</div>

<div class="callout success">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Success
  </div>
  <div class="callout-content">
    This is a success callout. Use it to highlight successful operations or positive outcomes.
  </div>
</div>

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    Tip
  </div>
  <div class="callout-content">
    This is a tip callout. Use it to provide helpful tips and advice.
  </div>
</div>

## Two-Column Layout

<div class="two-columns">
  <div>
    <h3>Left Column</h3>
    <p>This content appears in the left column. You can put any content here, including lists, images, and more.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
  <div>
    <h3>Right Column</h3>
    <p>This content appears in the right column. Two-column layouts are great for comparing things side by side.</p>
    <p>On mobile devices, these columns will stack vertically for better readability.</p>
  </div>
</div>

## Cards

<div class="card">
  <div class="card-header">
    Card Title
  </div>
  <div class="card-body">
    <p>This is a card component. You can use it to group related content in a visually distinct container.</p>
    <p>Cards are great for highlighting specific features or information.</p>
  </div>
</div>

## Timeline

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">January 2025</div>
    <div class="timeline-content">
      <h4>Project Start</h4>
      <p>We began development on our new platform.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">February 2025</div>
    <div class="timeline-content">
      <h4>Alpha Release</h4>
      <p>First alpha version released to internal testers.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">March 2025</div>
    <div class="timeline-content">
      <h4>Beta Launch</h4>
      <p>Beta version made available to select customers.</p>
    </div>
  </div>
</div>

## Conclusion

This guide demonstrates the rich formatting options available in our blog system. Feel free to use these elements to create engaging and visually pleasing content.

---

For more information, contact our support team or refer to our documentation.