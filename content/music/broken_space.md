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

  /* Базовые переменные (светлая по умолчанию) */
  :root {
    --overlay: rgba(255,255,255,0.6);
    --text-color: #111;
    --blend-mode: normal; /* можно поменять, если нужно */
  }

  /* Ручная установка темы (если сервер/шаблон ставит data-theme="dark") */
  html[data-theme="dark"] {
    --overlay: rgba(0,0,0,0.6);
    --text-color: #fff;
  }
  html[data-theme="light"] {
    --overlay: rgba(255,255,255,0.6);
    --text-color: #111;
  }

  /* Автовыбор по предпочтению ОС */
  @media (prefers-color-scheme: dark) {
    :root {
      --overlay: rgba(0,0,0,0.6);
      --text-color: #fff;
    }
  }
  @media (prefers-color-scheme: light) {
    :root {
      --overlay: rgba(255,255,255,0.6);
      --text-color: #111;
    }
  }

  .bg {
    position: fixed;
    inset: 0;
    /* Фоновое изображение + наложение через CSS-переменную */
    background-image:
      linear-gradient(var(--overlay), var(--overlay)),
      url('https://ia601802.us.archive.org/8/items/zqwy_broken_space/zqwy_broken_space_cover_site.webp');
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    transform: scale(1.0);
    z-index: -1;
    /* Если хотите тёмный/светлый режим с другим режимом смешивания:
       mix-blend-mode: var(--blend-mode);
    */
  }

  .content {
    position: relative;
    z-index: 1;
    color: var(--text-color);
    padding: 2rem;
  }
</style>
</head>
<body>
  <div class="bg" aria-hidden="true"></div>
  <main class="content">
    <h1>Заголовок</h1>
    <p>Текст поверх фона — цвет меняется в зависимости от темы.</p>
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
