---
title: "in_forest"
author: zqwy
alias: "infor"
aliases: 
tags: 
- ambient
- ocrhestral
- drone
- soundscape
description: 
date: 2026-03-24
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
    url('');
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

    <h1>in_forest</h1>
    <p><strong>Author:</strong> zqwy</p>
    <img class="cover" src="" alt="zqwy_in_forest" />
    <section>
      <h2>Описание</h2>
      <p>Я не придумал пока-что описание, но трек уже лежит тут для прослушивание</p>
    </section>
    <section>
      <h2>Инструменты</h2>
      <p></p>
    </section>
    <iframe name="player" class="player" src="https://archive.org/details/zqwy_in_forest" scrolling="no" title="zqwy_in_forest"></iframe>

  </div>
</body>
