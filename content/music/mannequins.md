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
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Пример</title>
<style>
html, body { height: 100%; margin: 0; }

:root {
  --overlay: rgba(255,255,255,0.6);
  --text-color: #111;
}

/* Ручная установка темы (если нужно) */
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
  background-image:
    linear-gradient(var(--overlay), var(--overlay)),
    url('{cover}');
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
<img src="" alt="zqwy_mannequins"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Изменение внешнего вида это тонкая ветка к моменту наступлению моментов на грани  Неопределенность ограниченности с переходом и наступление момента гибели. Флейта рушит всякую возможность не стать последним человек Но увы... Последний человек неотвратим и казалось бы настала трагедия, но последний схож с первым человеком и ударные пытаются не дать заглохнуть в окончание собственного восприятия и всё же примкнуть к нужному Exodus нового человека.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_mannequins"></iframe>
