---
title: "kuzya"
author: zqwy
alias: "kuzya"
aliases: 
tags: 
- ambient
- piano
- minimalistic
- harpa 
description: 
date: 2024-11-25
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
    url('https://ia600604.us.archive.org/4/items/zqwy_kuzya/zqwy_kuzya_cover_site.webp');
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

    <h1>kuzya</h1>
    <p><strong>Author:</strong> zqwy</p>
    <img class="cover" src="https://ia600604.us.archive.org/4/items/zqwy_kuzya/zqwy_kuzya_cover_site.webp" alt="zqwy_kuzya" />
    <section>
      <h2>Описание</h2>
      <p>Расслабляющий, медитотивный, как наблюдение за погодой темп музыки Увидел человека, а этот котик как анекдотик Котик не хочет вызывать эмоции, ведь это - намеренное управление сознанием человека, его сознанием! В отличие от Бисимплер и остальных, котик умел понимать человеческую часть души Его конечная судьба, привела к естественной кончине, чтобы грустно не было, ему пришлось уйти вдаль, дабы его тело не нашёл человек Мыши в стенах, словно сны на местах, где не видно их. Котик не ловил мышей, боязнь причинение вреда. Даже последний птенец не был тронут</p>
    </section>
    <section>
      <h2>Инструменты</h2>
      <p></p>
    </section>
    <iframe name="player" class="player" src="https://archive.org/details/zqwy_kuzya" scrolling="no" title="zqwy_kuzya"></iframe>

  </div>
</body>
