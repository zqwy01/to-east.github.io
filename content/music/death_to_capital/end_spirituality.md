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
      url('');
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
> ## end_spirituality
> ![]()
> ###### 




>[!abstract] 
> #### Напряжённая атмсофера, гигантские волны тревожности с хаотическим настроением, неопределенность тёмных мыслей. Мистика элегатно переполненное пафосом и эпичностью. Футуризм наполненный перегруженным бассом синтезатора совместно выжигая мощными струннами остатки нежной души, ведь человеческое перестало быть необходимым но не менее лживым. 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_end_spirituality"></iframe>
