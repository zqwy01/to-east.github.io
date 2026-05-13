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
      url('https://ia800108.us.archive.org/7/items/death_to_capital/zqwy_death_to_capital_cover_site.webp');
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