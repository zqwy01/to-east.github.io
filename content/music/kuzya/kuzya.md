---
title: "kuzya"
author: zqwy
alias: "kuzya"
aliases: 
tags: 
- ambient
- piano
- minimalistic
- harpa 
description: 
date: 2024-11-25
publish: true
---

<style>
  .bg { /* your existing styles */ }
  .content { color: #111; }

  body.dark-mode .content { color: #fff; }
  body.dark-mode .bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('path/to/cover.jpg');
    filter: blur(8px) brightness(0.6);
  }
  body.light-mode .bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url('path/to/cover.jpg');
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
<img src="https://ia600604.us.archive.org/4/items/zqwy_kuzya/zqwy_kuzya_cover_site.webp" alt="zqwy_kuzya"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Расслабляющий, медитотивный, как наблюдение за погодой темп музыки Увидел человека, а этот котик как анекдотик Котик не хочет вызывать эмоции, ведь это - намеренное управление сознанием человека, его сознанием! В отличие от Бисимплер и остальных, котик умел понимать человеческую часть души Его конечная судьба, привела к естественной кончине, чтобы грустно не было, ему пришлось уйти вдаль, дабы его тело не нашёл человек Мыши в стенах, словно сны на местах, где не видно их. Котик не ловил мышей, боязнь причинение вреда. Даже последний птенец не был тронут

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_kuzya" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_kuzya"></iframe>
