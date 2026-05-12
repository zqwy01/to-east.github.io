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
<img src="https://ia600601.us.archive.org/16/items/zqwy_dystopian_future/dystopian_future_cover.jpg" alt="zqwy_dystopian_future"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Печальное будущее движимое сопротивлением к живому:ненавистью к человеческому, даёт ключ к глубокому размышлению о поисках возможных вариантов избежать неизбежную погибель живого. Хотя это скудное наблюдение за сгорающим в огне противоречий человеческого сознания. Упрощение живых существ, примитивизация на простые объекты, оптимизация абсолютное существо, некто уничтожил всё сущее скомплировал киберлогос, который проник и разрушил связь между мирами. Утопическая часть воплощается, чуть более через сломанный космос

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_dystopian_future" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_dystopian_future"></iframe>
