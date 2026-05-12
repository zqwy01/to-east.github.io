---
title: "bass_mitzva"
author: zqwy
alias: "bm"
aliases: 
tags: 
- drumandbass
- breakbeat
- dubstep
- idm
description: 
date: 2025-11-14
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
<img src="https://i.pinimg.com/1200x/ba/ae/1d/baae1dafc04b11ec4deb981f6484e5af.jpg" alt="zqwy_bass_mitzva"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Пустыня. Песок. Только тишина, и больше ничего. Аксолотль лежит на спине, в небольшой луже воды. Вокруг сухой песок янтарного цвета, словно застывший свет древнего заката. В этот момент ему было уютно, хоть и выглядел так, будто бы умер. Небольшой клочок прохлады на его спине контрастировал с настойчивой теплотой солнечных лучей. Его перистые жабры вяло покачивались, были почти неподвижны. Аксолотль лежал с закрытыми глазами; у него были небольшие тёмные глаза с синеватой обводкой. Закрытый взгляд устремлён прямо в светлое бездонное небо. Для него этот мир сузился до этой капли жизни, окружённой тревогой. Аксолотль, этот удивительный обломок вечности, продолжал лежать на спине, маленький островок розовой жизни посреди янтарной пустыни, глядя в бесконечность. Вокруг пустыня, и данный момент – спокойный момент – идеальный момент – тишина. Единственный звук, нарушитель тишины, – нежный шелест ветра, перекатывающего крупинки песка, создавая крошечные, мимолётные барханы вокруг его временного убежища. 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/embed/zqwy_axs/13_zqwy_bass_mitzva/13_zqwy_bass_mitzva.wav" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_bass_mitzva"></iframe>
