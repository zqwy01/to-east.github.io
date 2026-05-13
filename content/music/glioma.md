---
title: "glioma"
author: zqwy
alias: "glioma"
aliases: 
tags: 
- drone
- dark
- ambient
- soundscape
- noise 
description: 
date: 2024-11-14
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
      url('https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp');
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
        url('https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp');
    }
  }

  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
        url('https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp');
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
<img src="https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp" alt="zqwy_glioma"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### В преддверии самозабвенного уничтожение человечества, наиболее уязвимым объектом для массовой атаки, оказался человеческий мозг. Кибер логос в ходе успешного анализа уязвимостей, сформулировал скрытый способ атаки с помощью ярких и быстро мигающих вспышек. Поэтому реакция мозга доведенна до абсурда в отсутствие разнообразности? Исход человека привязан с бегом Акса в пустыни в поисках лабиринта. Гибель разума приводит к пустоте и инертном в бесконечном цикле бури пустоты которая засасывает внутрь своей нескончаемым разнообразие и в следствие – единообразие

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_glioma" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_glioma"></iframe>
