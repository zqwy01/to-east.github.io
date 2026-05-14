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
  :root{
    --blur:8px;
    --bg-light:rgba(255,255,255,0.7);
    --bg-dark:rgba(18,18,20,0.6);
    --text-light:#111;
    --text-dark:#fff;
    --trans:300ms;
  }
  html, body { height: 100%; margin: 0; }
  .bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
      url('https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg');
    background-size: cover, cover;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-blend-mode: normal; /* градиент сверху смешивается с картинкой */
    opacity: 0.3;
    filter: blur(8px);
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
  <div class="bg" aria-hidden=true"></div>
</body>




<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>CSS Particles</title>
<style>
  :root{
    --bg:#071026;
    --particle:#8bd3ff;
  }

  html,body{height:100%;margin:0}
  .hero{
    position:relative;
    min-height:100vh;
    background:linear-gradient(180deg,var(--bg) 0%, #021026 100%);
    overflow:hidden;
  }

  /* Контейнер партиклов */
  .particles{
    position:absolute;
    inset:0;
    pointer-events:none;
  }

  /* Общие стили частицы */
  .particles span{
    position:absolute;
    display:block;
    width:var(--s);
    height:var(--s);
    background:radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.25) 8%, rgba(137,211,255,0.05) 30%, transparent 60%);
    border-radius:50%;
    opacity:var(--o);
    transform:translate3d(0,0,0);
    animation: float var(--dur) linear infinite;
    left:var(--x);
    top:var(--y);
    filter:blur(var(--blur));
  }

  /* Вариации через nth-child — быстро задаём случайные параметры */
  .particles span:nth-child(4n+1){ --s:2px;  --o:.6;  --dur:18s; --x:6%;  --y:10%;  --blur:0px; }
  .particles span:nth-child(4n+2){ --s:3px;  --o:.5;  --dur:12s; --x:22%; --y:30%;  --blur:0.2px; }
  .particles span:nth-child(4n+3){ --s:4px;  --o:.45; --dur:24s; --x:48%; --y:5%;   --blur:0px; }
  .particles span:nth-child(4n+4){ --s:5px;  --o:.35; --dur:30s; --x:78%; --y:20%;  --blur:0.6px; }

  /* Дополнительно смещаем, чтобы частицы шли вверх и слегка вбок */
  @keyframes float{
    0%   { transform: translate3d(0, 0, 0) scale(1); opacity:var(--o); }
    50%  { transform: translate3d(calc(var(--drift, 20px) * -1), -40vh, 0) scale(1.05); opacity:calc(var(--o) * 0.9); }
    100% { transform: translate3d(calc(var(--drift, 20px)), -80vh, 0) scale(0.95); opacity:0; }
  }

  /* Немного случайности: для каждого 7-го/5-го элемента меняем стартовые координаты и дрейф */
  .particles span:nth-child(5n+1){ --x:10%;  --y:85%; --drift: 40px; }
  .particles span:nth-child(6n+1){ --x:35%;  --y:92%; --drift: 70px; --dur:22s; }
  .particles span:nth-child(7n+1){ --x:60%;  --y:88%; --drift: 30px; --dur:16s; }

  /* Тёмный воскрешающий градиент на переднем плане (опционально) */
  .overlay{
    position:absolute; inset:0; pointer-events:none;
    background:linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.25) 100%);
  }

  /* Пример контента для наглядности */
  .center{
    position:relative; z-index:2;
    color:#e6f7ff; font-family:system-ui,Segoe UI,Roboto; text-align:center;
    padding-top:20vh;
  }
</style>
</head>
<body>
  <section class="hero">
    <div class="particles" aria-hidden="true">
      <!-- Скопируйте/удалите span чтобы управлять количеством -->
      <!-- Здесь 60 элементов -->
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>

    <div class="overlay"></div>

    <div class="center">
      <h1>Particle background (CSS)</h1>
      <p>Пример без JS — регулируйте количество span, размеры и nth-child-параметры.</p>
    </div>
  </section>
</body>







# 

### 

> [!infobox]
>
> ## algiz
> ![](https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg)
> ###### 




>[!abstract] 
> #### Алгиз - руна защиты связи между ланями. После декомпозиции сахарной лошади, образовались две лани. Является необходимой для предтечи и связи между белой ланью и тёмной. Ведь для сотворение этой лани были использованы множество нескольких форм влияний. Цикличность порождает рекурсивность, повторность. Это не позволяет сфокусироваться и инертно осмыслять. Души заключенные для связи между белой и темной ланью, защищены от перехвата и подходили для такой работы. Есть бедствие которое несёт белая лань, но помимо неё на гране прибывает - и другая лань. Которая связана с руной одал и также несёт бедствие, эта тёмная лань. Между ними есть защищённая связь для безопасной транспортировки душ. Однако тёмная лань не всегда способна сфокусироваться чтобы наладить связь и не прервать этот цикл передачи. Так, а что же делает тёмная лань по ту сторону? Его суть, подобрать подходящие места для новоприбывших. Пока цикл душ на этой гране, не завершится, его копыта пишут картину этой грани. Это он формирует пустоту, он превращает ничего в то, чем некогда раньше был занята белая лань. И только когда эта душа была отточенна, она возвращается обратно и тем самым насыщает белого, тем чего не хватает тёмному. Лань бежит, стучит копытам: "цок-цок-цок" и видит кот. И это не просто кот, а словно анекдот! Вот он - Кузя... Вот так вот…

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_algiz" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_algiz"></iframe>
