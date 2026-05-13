---
title: "death_to_capital"
author: zqwy
alias: "dtc"
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
  :root{
    --blur:8px;
    --bg-light:rgba(255,255,255,0.7);
    --bg-dark:rgba(18,18,20,0.6);
    --text-light:#111;
    --text-dark:#fff;
    --trans:300ms;
  }
  html, body { height: 100%; margin: 0; }

  .bg{
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
  }

  /* сам градиент-перекрытие */
  .bg::after{
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    pointer-events: none;
  }

  /* слой с картинкой — можно контролировать opacity и фильтры отдельно */
  .bg::before{
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('path/to/your.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.5;          /* нужная прозрачность картинки */
    filter: blur(8px);     /* отдельно размываем картинку */
    transform: scale(1.0);
    pointer-events: none;
  }

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
  <script>
    console.log(5);
    const digit = 7;
    console.log(digit);
  </script>
  <div class="bg" aria-hidden="true"></div>
</body>



>[!info] 
> #### 

<h1 align=center>
<img src="https://ia800108.us.archive.org/7/items/death_to_capital/zqwy_death_to_capital_cover_site.webp" alt="zqwy_death_to_capital"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Кризисы, резкие всплески, эмциональные выпады. Смерть капитала не единственный резонный случай для подобного, это может быть и Death To Social и так далее. Суть в том, что это приводит к зрению в утопичное будущее.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/death_to_capital" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_death_to_capital"></iframe>


![[end_spirituality]]

![[it_happened]]