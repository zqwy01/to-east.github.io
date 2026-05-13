---
title: "axolotl"
author: zqwy
alias: "ax"
aliases: 
tags: 
- phonk
- orchestral
- electronic
- basshouse 
description: 
date: 2025-11-14
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
      url('https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp');
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
<img src="https://ia801809.us.archive.org/14/items/zqwy_axs/axolotl_cover_v1.webp" alt="zqwy_axolotl"/>
</h1>

>[!abstract] Description of The Cover:
> #### An axolotl is depicted in a stylized, almost naïve manner: a rounded, broad head with a soft “smile,” bright pink feathery external gills at the sides, short limbs extending from the lower body, and a thin finned tail. The color palette is dominated by turquoise and blue tones for the background and body, with contrasting pink accents on the gills; the brushstrokes are loose and decorative, creating a sense of an underwater environment.

>[!abstract] 
> #### 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_axs" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_axolotl"></iframe>


![[bass_mitzva]]