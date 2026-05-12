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


body.light-mode .content { color: #111; }
body.dark-mode .content  { color: #fff; }

body.light-mode .bg {
  background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('path/to/cover.jpg');
  filter: blur(8px) brightness(1);
}
body.dark-mode .bg {
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('path/to/cover.jpg');
  filter: blur(8px) brightness(0.6);
}


<script>
  // Найти кнопку по реальному селектору (замените, если нужно)
  const btn = document.querySelector('button.darkmode');

  if (btn) {
    const hasVisibleDayIcon = () => {
      const el = btn.querySelector('.dayIcon');
      if (!el) return false;
      const style = getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    };

    const applyTheme = () => {
      if (hasVisibleDayIcon()) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      }
    };

    // начальная синхронизация
    applyTheme();

    // Наблюдаем за изменениями атрибутов и деревом внутри кнопки
    const mo = new MutationObserver(() => applyTheme());
    mo.observe(btn, { attributes: true, attributeFilter: ['class', 'style'], childList: true, subtree: true });

    // Если хотите — также реагируем на клики (например, ваш код меняет вид иконок)
    btn.addEventListener('click', () => {
      // не обязателен — applyTheme вызовётся через MutationObserver, но можно и явно:
      applyTheme();
    });
  } else {
    console.warn('Button .darkmode not found');
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
