---
title: "must_all_things_end"
author: zqwy
alias: "mate"
aliases: 
tags: 
- metal
- phonk
- nuclear
description: 
date: 2024-12-02
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
      url('https://archive.org/download/zqwy_must_all_things_end/zqwy_must_all_things_end_cover_site.webp');
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
<img src="https://archive.org/download/zqwy_must_all_things_end/zqwy_must_all_things_end_cover_site.webp" alt="zqwy_must_all_things_end"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Эпоха уничтожение мира - катарсис события приближение уничтожения мира свершился, угрозы пред живыми, оказались не пустыми обещаниями, а воплощением идейне разнообразности

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://www.pond5.com/ru/royalty-free-music/item/293667835-electronic-cyber-dance-must-all-things-end" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_must_all_things_end"></iframe>
