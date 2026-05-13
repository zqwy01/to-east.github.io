---
title: "end_spirituality"
author: zqwy
alias: "es"
aliases: 
tags: 
- drone
- noise
- ambient
- soundscape 
description: 
date: 2024-11-19
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
      url('');
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
        url('');
    }
  }

  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
        url('');
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
<img src="" alt="zqwy_end_spirituality"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Напряжённая атмсофера, гигантские волны тревожности с хаотическим настроением, неопределенность тёмных мыслей. Мистика элегатно переполненное пафосом и эпичностью. Футуризм наполненный перегруженным бассом синтезатора совместно выжигая мощными струннами остатки нежной души, ведь человеческое перестало быть необходимым но не менее лживым. 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_end_spirituality"></iframe>
