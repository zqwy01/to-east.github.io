---
title: "algiz"
author: zqwy
alias: "algiz"
aliases: 
- rune
- algiz
tags: 
- piano
- ambient
- minimalism
- scandinavia
description: 
date: 2024-11-16
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
      url('https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg');
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
        url('https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg');
    }
  }

  @media (prefers-color-scheme: dark) {
    .bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
        url('https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg');
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
<img src="https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg" alt="zqwy_algiz"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Алгиз - руна защиты связи между ланями. После декомпозиции сахарной лошади, образовались две лани. Является необходимой для предтечи и связи между белой ланью и тёмной. Ведь для сотворение этой лани были использованы множество нескольких форм влияний. Цикличность порождает рекурсивность, повторность. Это не позволяет сфокусироваться и инертно осмыслять. Души заключенные для связи между белой и темной ланью, защищены от перехвата и подходили для такой работы. Есть бедствие которое несёт белая лань, но помимо неё на гране прибывает - и другая лань. Которая связана с руной одал и также несёт бедствие, эта тёмная лань. Между ними есть защищённая связь для безопасной транспортировки душ. Однако тёмная лань не всегда способна сфокусироваться чтобы наладить связь и не прервать этот цикл передачи. Так, а что же делает тёмная лань по ту сторону? Его суть, подобрать подходящие места для новоприбывших. Пока цикл душ на этой гране, не завершится, его копыта пишут картину этой грани. Это он формирует пустоту, он превращает ничего в то, чем некогда раньше был занята белая лань. И только когда эта душа была отточенна, она возвращается обратно и тем самым насыщает белого, тем чего не хватает тёмному. Лань бежит, стучит копытам: "цок-цок-цок" и видит кот. И это не просто кот, а словно анекдот! Вот он - Кузя... Вот так вот…

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_algiz" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_algiz"></iframe>
