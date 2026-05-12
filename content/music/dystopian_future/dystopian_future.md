---
title: "dystopian_future"
author: zqwy
alias: "df"
aliases: 
- end of world
- конец света
- конец жизни на земле
tags: 
- drone
- phonk
- ambient
- noise
- soundscape
description: 
date: 2023-05-21
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
<img src="https://ia600601.us.archive.org/16/items/zqwy_dystopian_future/dystopian_future_cover.jpg" alt="zqwy_dystopian_future"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Печальное будущее движимое сопротивлением к живому:ненавистью к человеческому, даёт ключ к глубокому размышлению о поисках возможных вариантов избежать неизбежную погибель живого. Хотя это скудное наблюдение за сгорающим в огне противоречий человеческого сознания. Упрощение живых существ, примитивизация на простые объекты, оптимизация абсолютное существо, некто уничтожил всё сущее скомплировал киберлогос, который проник и разрушил связь между мирами. Утопическая часть воплощается, чуть более через сломанный космос

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_dystopian_future" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_dystopian_future"></iframe>
