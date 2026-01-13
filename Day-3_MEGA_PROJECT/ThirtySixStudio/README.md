# 🚀 Day 3 — GSAP + Interactive Canvas Project

This day was focused on learning **GSAP (GreenSock Animation Platform)** and using it to build a **high-performance interactive website** with **React, Canvas, and Locomotive Scroll**.

The goal was to understand how modern animation systems work in real production websites and how they integrate with React.

---

## 🧠 What I Learned

### 1️⃣ GSAP Fundamentals
- `gsap.to()`
- `gsap.from()`
- `gsap.set()`
- Easing (`power2`, `linear`, `expo`, etc.)
- Infinite animations using `repeat: -1`
- `onUpdate()` for frame-based animations

---

### 2️⃣ React + GSAP Integration
- Why **GSAP should never animate React state**
- How to use `useRef()` as an animation object
- How to sync GSAP values into React state safely
- Why **React 18 Strict Mode** breaks impure code

---

### 3️⃣ Canvas Frame Animation
- Rendering image sequences on `<canvas>`
- Using `requestAnimationFrame` style loops via GSAP
- Handling device pixel ratio (`window.devicePixelRatio`)
- Preventing blurry canvas images

---

### 4️⃣ Scroll-Based Motion (Locomotive Scroll)
- Smooth scrolling
- Scroll-based parallax via `data-scroll-speed`
- Integrating Locomotive Scroll with Canvas layers

---

### 5️⃣ React Performance & Rules
- Why `Math.random()` is forbidden in JSX
- Why refs cannot be read during render
- Why GSAP must never mutate React state
- How React 18 renders components multiple times

---

## 🧩 Project Overview

I built a **ThirtySix Studios inspired interactive website** that includes:

- Full-screen canvas-based image animations
- Scroll-driven parallax motion
- Click-triggered color & canvas reveal animation
- Smooth scrolling with Locomotive Scroll
- GSAP powered timeline animations
