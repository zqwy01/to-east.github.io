---
title: "joker"
author: zqwy
alias: "joker"
aliases: 
tags: 
- phonk
- darkwave
- postrock
- industrial
- idm
description: 
date: 2024-11-18
publish: true
---

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
    url('https://ia600403.us.archive.org/32/items/zqwy_joker/zqwy_joker_cover.jpg');
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
  max-width: 900px;
  margin: 0 auto;
}
.player {
  width: 100%;
  max-width: 100%;
  height: 500px;
  border: none;
}
img.cover {
  display: block;
  max-width: 360px;
  width: 100%;
  margin: 1rem auto;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}
</style>

<body>
  <div class="bg" aria-hidden="true"></div>
  <div class="content">
    <h1>joker</h1>
    <p><strong>Author:</strong> zqwy</p>
    <img class="cover" src="https://ia600403.us.archive.org/32/items/zqwy_joker/zqwy_joker_cover.jpg" alt="zqwy_joker" />
    <section>
      <h2>Описание</h2>
      <p>Эпоха возникнование мира непрырывно связана с эпохой исчезновение. Эпоха стремлений к распаду миранаступает для тех, кто на грани связанны со своей склонностью быть словно манекен, который способен примерить любую форму. Разница манекена и изменчивости связаны с непрерывностью существование, а не способом управление к которому приближается арбитр – некто.</p>
    </section>

    <section>
      <h2>Инструменты</h2>
      <p></p>
    </section>

    <iframe name="player" class="player" src="https://archive.org/details/zqwy_joker" scrolling="no" title="zqwy_joker"></iframe>
  </div>
</body>
