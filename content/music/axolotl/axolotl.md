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
      url('https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp');
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
        url('https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp');
    }
  }

  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
        url('https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp');
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
<img src="https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp" alt="zqwy_axolotl"/>
</h1>

>[!abstract] Description of The Cover:
> #### An axolotl is depicted in a stylized, almost naïve manner: a rounded, broad head with a soft “smile,” bright pink feathery external gills at the sides, short limbs extending from the lower body, and a thin finned tail. The color palette is dominated by turquoise and blue tones for the background and body, with contrasting pink accents on the gills; the brushstrokes are loose and decorative, creating a sense of an underwater environment.

>[!abstract] 
> #### 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_axs" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_axolotl"></iframe>


![[bass_mitzva]]