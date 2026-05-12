---
title: "algiz"
author: zqwy
alias: "algiz"
aliases: 
- rune
- algiz
tags: 
- piano
- ambient
- minimalism
- scandinavia
description: 
date: 2024-11-16
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
<img src="https://ia600509.us.archive.org/4/items/zqwy_algiz/zqwy_algiz_cover.jpg" alt="zqwy_algiz"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Алгиз - руна защиты связи между ланями. После декомпозиции сахарной лошади, образовались две лани. Является необходимой для предтечи и связи между белой ланью и тёмной. Ведь для сотворение этой лани были использованы множество нескольких форм влияний. Цикличность порождает рекурсивность, повторность. Это не позволяет сфокусироваться и инертно осмыслять. Души заключенные для связи между белой и темной ланью, защищены от перехвата и подходили для такой работы. Есть бедствие которое несёт белая лань, но помимо неё на гране прибывает - и другая лань. Которая связана с руной одал и также несёт бедствие, эта тёмная лань. Между ними есть защищённая связь для безопасной транспортировки душ. Однако тёмная лань не всегда способна сфокусироваться чтобы наладить связь и не прервать этот цикл передачи. Так, а что же делает тёмная лань по ту сторону? Его суть, подобрать подходящие места для новоприбывших. Пока цикл душ на этой гране, не завершится, его копыта пишут картину этой грани. Это он формирует пустоту, он превращает ничего в то, чем некогда раньше был занята белая лань. И только когда эта душа была отточенна, она возвращается обратно и тем самым насыщает белого, тем чего не хватает тёмному. Лань бежит, стучит копытам: "цок-цок-цок" и видит кот. И это не просто кот, а словно анекдот! Вот он - Кузя... Вот так вот…

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_algiz" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_algiz"></iframe>
