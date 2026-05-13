---
title: "mannequins"
author: zqwy
alias: "man"
aliases: 
tags: 
- neoclassic
- cinematic
- orchestral
- avantgarde 
description: 
date: 2023-06-15
publish: true
---

<head>
<style>
  html, body { height: 100%; margin: 0; }

  :root {
    --overlay-dark: rgba(0,0,0,0.9);
    --overlay-light: rgba(255,255,255,0.6);
    --text-light: #111;
  }

  /* По умолчанию — светлая тема (если нужно, можно поменять местами) */
  .bg {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(var(--overlay-light), var(--overlay-light)),
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
    color: var(--text-light);
    padding: 2rem;
  }

  /* Тёмная тема через предпочитаемую схему цветов ОС/браузера */
  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(var(--overlay-dark), var(--overlay-dark)),
        url('');
    }
    .content {
      color: var(--text-dark);
    }
  }

  /* Дополнительно: поддержка атрибута data-theme (при необходимости в шаблоне) */
  [data-theme="dark"] .bg {
    background-image:
      linear-gradient(var(--overlay-dark), var(--overlay-dark)),
      url('');
  }
  [data-theme="dark"] .content { color: var(--text-dark); }

  [data-theme="light"] .bg {
    background-image:
      linear-gradient(var(--overlay-light), var(--overlay-light)),
      url('');
  }
  [data-theme="light"] .content { color: var(--text-light); }
</style>
</head>
<body>
  <div class="bg" aria-hidden="true"></div>
  <div class="content">
    <!-- Ваш контент -->
  </div>
</body>


<head>
<style>
  html, body { height: 100%; margin: 0; }
  .bg {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)),
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
    color: #fff;
    padding: 2rem;
  }
</style>
</head>
<body>
  <div class="bg" aria-hidden="true"></div>
</body>



>[!info] 
> #### 

<h1 align=center>
<img src="" alt="zqwy_mannequins"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Изменение внешнего вида это тонкая ветка к моменту наступлению моментов на грани  Неопределенность ограниченности с переходом и наступление момента гибели. Флейта рушит всякую возможность не стать последним человек Но увы... Последний человек неотвратим и казалось бы настала трагедия, но последний схож с первым человеком и ударные пытаются не дать заглохнуть в окончание собственного восприятия и всё же примкнуть к нужному Exodus нового человека.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_mannequins"></iframe>
