---
title: "na_hrane"
author: zqwy
alias: "nh"
aliases: 
tags: 
- trap
- ambient
- cinematic
- dubstep
- idm
- lofi
- grime
- downtempo
- phonk
- wave
- drone
- ukgarage
- boombap
- basshouse
- noise 
description: 
date: 
publish: true
---

<style>
  .bg { /* your existing styles */ }
  .content { color: #111; }

  body.dark-mode .content { color: #fff; }
  body.dark-mode .bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('https://ia600409.us.archive.org/24/items/zqwy_na_hrane/ZQWY_NA_HRANE_COVER_site.webp');
    filter: blur(8px) brightness(0.6);
  }
  body.light-mode .bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url('https://ia600409.us.archive.org/24/items/zqwy_na_hrane/ZQWY_NA_HRANE_COVER_site.webp');
    filter: blur(8px) brightness(1);
  }
</style>

<script>
  // Найти существующую кнопку (подставьте точный селектор, если нужен)
  const btn = document.querySelector('.darkMode') || document.querySelector('.dark-mode') || document.querySelector('button');

  if (btn) {
    const apply = () => {
      if (btn.classList.contains('dayIcon')) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      }
    };

    // Синхронизировать сразу
    apply();

    // Наблюдать за изменениями атрибутов класса кнопки (если класс меняется другими скриптами)
    const mo = new MutationObserver(() => apply());
    mo.observe(btn, { attributes: true, attributeFilter: ['class'] });

    // Опционально: если вы хотите, чтобы клик по кнопке переключал класс dayIcon
    btn.addEventListener('click', () => {
      btn.classList.toggle('dayIcon');
      // apply() вызовется через MutationObserver, но можно вызвать и тут для мгновенного эффекта:
      apply();
    });
  } else {
    console.warn('Theme button not found — проверьте селектор.');
  }
</script>









>[!info] 
> #### 

<h1 align=center>
<img src="https://ia600409.us.archive.org/24/items/zqwy_na_hrane/ZQWY_NA_HRANE_COVER_site.webp" alt="zqwy_na_hrane"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_na_hrane" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_na_hrane"></iframe>
