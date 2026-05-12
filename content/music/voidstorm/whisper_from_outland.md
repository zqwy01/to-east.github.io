---
title: "whisper_from_outland"
author: zqwy
alias: "wfo"
aliases: 
- whisper
- from outland
tags: 

- jazzhop
- chillhop 
- lofi
- hiphop
- ambient
- downtempo
description: 
date: 2025-02-02
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










>[!info] Cute Beat: Jazz‑Lo‑Fi for Study & Relaxation (Chillout Soundscape)
> #### Warm, intimate, and rhythmically relaxed track with jazz harmony, spare melodies, and a sparse, atmospheric texture - perfect for studying, relaxing, or background listening: calm, soft, laid-back, dreamy, soothing, intimate, peaceful, contemplative, chill, lo-fi, jazzy, ambient, meditative, warm, serene, reflective, everyday, background, nostalgic.

<h1 align=center>
<img src="https://i.pinimg.com/474x/5d/a6/a4/5da6a46cf3001323588b55d097de56ea.jpg" alt="zqwy_whisper_from_outland"/>
</h1>

>[!abstract] Description of The Cover:
> #### A cozy evening scene: a table with a record player, a lit candle, and a lamp; on the table a mug with steam rising from it, a stack of books, and a smartphone — city lights visible through the window.

>[!abstract] To gaze into the void:
> #### 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### synth

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_whisper_from_outland"></iframe>
