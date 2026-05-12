---
title: "forty_hours"
author: zqwy
alias: "fh"
aliases: 
tags: 
- electronica
- dancepop
- cinematic
- industrial
- basshouse
- ambient 
description: 
date: 2025-02-06
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










>[!info] 
> #### 

<h1 align=center>
<img src="https://ia801502.us.archive.org/13/items/zqwy_forthy_hours/zqwy_forty_hours_cover.jpg" alt="zqwy_forty_hours"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### История этого мини-альбома, связанна с небольшой трансляцией на сорок часов подряд... Первый восемь часов ушли на это Следующие четырнадцать на это И дальше лес формировался со мной сорок часов до этого состояние

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_forthy_hours" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_forty_hours"></iframe>
