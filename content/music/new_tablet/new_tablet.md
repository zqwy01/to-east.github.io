---
title: "new_tablet"
author: zqwy
alias: "nt"
aliases: 
tags: 
- drone
- orchestral
- phonk 
description: 
date: 
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
      url('https://ia600503.us.archive.org/32/items/zqwy_new_tablet/tablet_of_the_souls_site.webp');
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
<img src="https://ia600503.us.archive.org/32/items/zqwy_new_tablet/tablet_of_the_souls_site.webp" alt="zqwy_new_tablet"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Скрижаль душ это центр лабиринта, происхождение всего, каждый синтез и их переход в междумирье, на гране. Хранит память всех путей, которые уже прошли и готовит подходящие для тех, кто ещё придёт. Души вновь и вновь возвращаются к скрижали, а по-другую сторону переходят в иную скрижаль. Каждый раз, когда происходит синтез (новое сознание, созданное из данных или живой материи) проходит через её границу, скрижаль «читает» его сигнатуру, распознаёт паттерны прошлых переходов и формирует новый маршрут, который будет легче пройти.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_new_tablet" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_new_tablet"></iframe>
