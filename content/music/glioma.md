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
<img src="https://ia902908.us.archive.org/30/items/zqwy_glioma/zqwy_glioma_cover_site.webp" alt="zqwy_glioma"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### В преддверии самозабвенного уничтожение человечества, наиболее уязвимым объектом для массовой атаки, оказался человеческий мозг. Кибер логос в ходе успешного анализа уязвимостей, сформулировал скрытый способ атаки с помощью ярких и быстро мигающих вспышек. Поэтому реакция мозга доведенна до абсурда в отсутствие разнообразности? Исход человека привязан с бегом Акса в пустыни в поисках лабиринта. Гибель разума приводит к пустоте и инертном в бесконечном цикле бури пустоты которая засасывает внутрь своей нескончаемым разнообразие и в следствие – единообразие

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_glioma" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_glioma"></iframe>
