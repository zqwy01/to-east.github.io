---
title: "axolotl"
author: zqwy
alias: "ax"
aliases: 
tags: 
- phonk
- orchestral
- electronic
- basshouse 
description: 
date: 2025-11-14
publish: true
---

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
:root{
  --overlay-dark: rgba(0,0,0,0.9);
  --overlay-light: rgba(255,255,255,0.6);
  --overlay-color: var(--overlay-dark); /* fallback */
  --text-color: #fff;
}

@media (prefers-color-scheme: light) {
  :root{ --overlay-color: var(--overlay-light); --text-color: #111; }
}

@media (prefers-color-scheme: dark) {
  :root{ --overlay-color: var(--overlay-dark); --text-color: #fff; }
}

html, body { height: 100%; margin: 0; }
.bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--overlay-color), var(--overlay-color)),
    url('https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  transform: scale(1.0);
  z-index: -1;
}
.content {
  position: relative;
  z-index: 1;
  color: var(--text-color);
  padding: 2rem;
}
.player {
  width: 100%;
  height: 500px;
  border: none;
}
img.cover {
  display: block;
  max-width: 360px;
  width: 100%;
  margin: 1rem auto;
}
</style>
</head>
<body>
  <div class="bg" aria-hidden="true"></div>
  <div class="content">

    <h1>axolotl</h1>
    <p><strong>Author:</strong> zqwy</p>
    <img class="cover" src="https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp" alt="zqwy_axolotl" />
    <section>
      <h2>Описание</h2>
      <p></p>
    </section>
    <section>
      <h2>Инструменты</h2>
      <p></p>
    </section>
    <iframe name="player" class="player" src="https://archive.org/details/zqwy_axs" scrolling="no" title="zqwy_axolotl"></iframe>

  </div>
</body>

![[bass_mitzva]]