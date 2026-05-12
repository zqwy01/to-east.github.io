---
title: "biela"
author: zqwy
alias: "biela"
aliases: 
- biela
- white doe
tags: 
- folk
- phonk
- ambient
- orchestral
- esoteric
- epic
- scandinavia
- dark 
description: Белая лань с помощью руны осталась одной из выживших. В отличие от тёмной лани, которая была связана с помощью другой руны и находилась по другую сторону междум
date: 2024-11-03
publish: true
---

<style>
  .bg { /* your existing styles */ }
  .content { color: #111; }

  body.dark-mode .content { color: #fff; }
  body.dark-mode .bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('https://ia800106.us.archive.org/23/items/zqwy_biela/zqwy_biela_cover_original.webp');
    filter: blur(8px) brightness(0.6);
  }
  body.light-mode .bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url('https://ia800106.us.archive.org/23/items/zqwy_biela/zqwy_biela_cover_original.webp');
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









>[!info] Mysterious soundtrack, mystical, esoteric orchestra:
> #### Epic Scandinavian folklore. Dark epic, mysterious fantasy, ethereal folk. Folktronic ambient and spooky phonk. Twilight, secretive, and forbidden occultism. A fusion of East and West, a mythological atmosphere, syncopated chthonic nihilism. Magical energy, arcane ritual, and spirituality. 🎹

<h1 align=center>
<img src="https://ia800106.us.archive.org/23/items/zqwy_biela/zqwy_biela_cover_original.webp" alt="zqwy_biela"/>
</h1>

>[!abstract] Description of The Cover:
> #### The image is dark, on a black background showing a glowing, skeleton-like animal with long curved horns—looks like the skeleton of a goat or deer in a glitch/neon style: a skull, cervical and thoracic vertebrae, ribs, and part of a foreleg are visible. Colors are cold neon (blue, white, with a hint of purple); the image is grainy and distorted.

>[!abstract] Story About:
> #### [[biela|The White Doe]], with the help of the [[algiz|rune]], remained [[alone|alone]] of the survivors. Unlike the dark doe, who was bound by another rune and was [on the other side](na_hrane) of the interworld. Her essence is to [destroy everything](dystopian_future), in her path! 📖

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### Flute, talharpa, piano, cowbell, acoustic and synthesized drums, as well as percussion, synthesizer

<iframe name="player" class="player" src="https://archive.org/details/zqwy_biela" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_biela"></iframe>
