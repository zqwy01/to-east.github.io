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
<style>
  html, body { height: 100%; margin: 0; }

  :root {
    --overlay-color: rgba(255,255,255,0.6);
    --text-color: #111;
    --blur: 8px;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --overlay-color: rgba(0,0,0,0.6);
      --text-color: #fff;
      --blur: 8px;
    }
  }

  .bg {
    position: fixed;
    inset: 0;
    /* сначала слой затем изображение: overlay цвет задаётся через переменную */
    background-image:
      linear-gradient(var(--overlay-color), var(--overlay-color)),
      url('https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp');
    background-size: cover;
    background-position: center;
    filter: blur(var(--blur));
    transform: scale(1.0);
    z-index: -1;
  }

  .content {
    position: relative;
    z-index: 1;
    color: var(--text-color);
    padding: 2rem;
    /* при необходимости — добавить легкий фон для читаемости в светлой теме */
    background: transparent;
  }

  /* опционально: более плотный тёмный/светлый градиент в зависимости от темы */
  @media (prefers-color-scheme: light) {
    .bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.55)),
        url('https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp');
    }
  }

  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
        url('https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp');
    }
  }
</style>
</head>
<body>
  <div class="bg" aria-hidden="true"></div>

  <main class="content">
    <h1>Заголовок</h1>
    <p>Текст поверх фона — цвет и наложение меняются с темой.</p>
  </main>
</body>


>[!info] 
> #### 

<h1 align=center>
<img src="https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp" alt="zqwy_broken_space"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Подавляющая, гнетущая атмосфера безнадёжности и бессмысленности. Попытки человеческого разума, как пытки и поиски действительности, в реальности способной решительности в новом колонизаторстве. Связующая роль с утопичным будущем

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_broken_space" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_broken_space"></iframe>
