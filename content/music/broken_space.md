---
title: "broken_space"
author: zqwy
alias: "brsp"
aliases: 
tags: 
- sovietwave
- ambient 
description: 
date: 2024-11-17
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
    url('https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp');
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

    <h1>broken_space</h1>
    <p><strong>Author:</strong> zqwy</p>
    <img class="cover" src="https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp" alt="zqwy_broken_space" />
    <section>
      <h2>Описание</h2>
      <p>Подавляющая, гнетущая атмосфера безнадёжности и бессмысленности. Попытки человеческого разума, как пытки и поиски действительности, в реальности способной решительности в новом колонизаторстве. Связующая роль с утопичным будущем</p>
    </section>
    <section>
      <h2>Инструменты</h2>
      <p></p>
    </section>
    <iframe name="player" class="player" src="https://archive.org/details/zqwy_broken_space" scrolling="no" title="zqwy_broken_space"></iframe>

  </div>
</body>
