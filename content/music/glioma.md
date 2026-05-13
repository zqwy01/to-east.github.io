---
title: "glioma"
author: zqwy
alias: "glioma"
aliases: 
tags: 
- drone
- dark
- ambient
- soundscape
- noise 
description: 
date: 2024-11-14
publish: true
---




(function(){
  const saved = localStorage.getItem('saved-theme'); // "dark" | "light" | null
  const html = document.documentElement;
  const dataTheme = html.getAttribute('data-theme'); // например "dark" или "light"
  const hasDarkClass = html.classList.contains('dark');
  let state;

  if (saved === 'dark' || saved === 'light') {
    state = saved;
    console.log('saved-theme (localStorage):', state);
  } else if (dataTheme === 'dark' || dataTheme === 'light') {
    state = dataTheme;
    console.log('data-theme (html attribute):', state);
  } else if (hasDarkClass) {
    state = 'dark';
    console.log('html has class "dark":', state);
  } else {
    state = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    console.log('system preference (prefers-color-scheme):', state);
  }

  // при необходимости вернуть значение
  return state;
})();










<head>
<style>
  html, body { height: 100%; margin: 0; }
  .bg {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)),
      url('https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp');
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
<img src="https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp" alt="zqwy_glioma"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### В преддверии самозабвенного уничтожение человечества, наиболее уязвимым объектом для массовой атаки, оказался человеческий мозг. Кибер логос в ходе успешного анализа уязвимостей, сформулировал скрытый способ атаки с помощью ярких и быстро мигающих вспышек. Поэтому реакция мозга доведенна до абсурда в отсутствие разнообразности? Исход человека привязан с бегом Акса в пустыни в поисках лабиринта. Гибель разума приводит к пустоте и инертном в бесконечном цикле бури пустоты которая засасывает внутрь своей нескончаемым разнообразие и в следствие – единообразие

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_glioma" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_glioma"></iframe>
