---
title: "cyber_logos"
author: zqwy
alias: "cl"
aliases: 
tags: 
- trap
- hyperpop
- darkwave
- darkpop
- triphop
- hiphop
- electronic
- darksynth
- idm
- grime
- techno
- house
- dubstep
- ukgarage
- edm
- drumandbass
- chillwave
- electro
- basshouse
- dub
- downtempo
- breakbeat
- psydub
- dancepop
- midtempo 
description: На изображении — стилизованное «глитч»-арт изображение человеческой головы в профиль (смотрит влево). Форма лица и шея — узнаваемы, но детали размыты и зашумлен
date: 2024-03-12
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
<img src="https://ia902908.us.archive.org/2/items/cyber_logos/zqwy_cyber_logos_cover_site.webp" alt="zqwy_cyber_logos"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Кибер Логос состоит исключительно из данных, а не из органического или синтетического материала Изначально был создан в цифровом виде, а исход инкапсулирование до электрического уровня. Метал заражённый кибер логосом, обладает заряд с вредоносной программой. Поэтому его присутствие обусловлено распространением при помощи металлических объектов. Лишённый мяса, крови, плоти Его формирование уничтожило надежду человека, в последствие человек перестал стремится преодолевать и начал стремительно падать и самоуничтожаться из-за своей беспомощности и отсутствием необходимости в следствие автоматизации металла

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/cyber_logos" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_cyber_logos"></iframe>
