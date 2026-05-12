---
title: "joker"
author: zqwy
alias: "joker"
aliases: 
tags: 
- phonk
- darkwave
- postrock
- industrial
- idm
description: 
date: 2024-11-18
publish: true
---

<style>
  .bg { /* your existing styles */ }
  .content { color: #111; }

  body.dark-mode .content { color: #fff; }
  body.dark-mode .bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('https://ia600403.us.archive.org/32/items/zqwy_joker/zqwy_joker_cover.jpg');
    filter: blur(8px) brightness(0.6);
  }
  body.light-mode .bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url('https://ia600403.us.archive.org/32/items/zqwy_joker/zqwy_joker_cover.jpg');
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









>[!info] Nocturnal Anxiety - phonk, darkwave and industrial post‑rock tension
> #### Moody, haunting, and eerie track with a heavy low end and industrial saturation; a groovy phonk beat at 92 BPM makes it simultaneously bouncy and driving. Expansive darkwave pads add a melancholic, meditative, and ethereal atmosphere, while post‑rock guitar accents give it cinematic, epic scale. Percussion and an IDM flair create chaotic, hypnotic, and tense rhythmic shifts, whereas vinyl noise and field samples provide a gritty, urban texture. The result is a dramatic, tense, and reflective track—both aggressive and contemplative—perfect for nocturnal, dystopian, and suspenseful soundtracks.

<h1 align=center>
<img src="https://ia600403.us.archive.org/32/items/zqwy_joker/zqwy_joker_cover.jpg" alt="zqwy_joker"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Эпоха возникнование мира непрырывно связана с эпохой исчезновение. Эпоха стремлений к распаду миранаступает для тех, кто на грани связанны со своей склонностью быть словно манекен, который способен примерить любую форму. Разница манекена и изменчивости связаны с непрерывностью существование, а не способом управление к которому приближается арбитр – некто.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_joker" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_joker"></iframe>
