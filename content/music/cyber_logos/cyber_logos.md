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

<style>
  .bg { /* your existing styles */ }
  .content { color: #111; }

  body.dark-mode .content { color: #fff; }
  body.dark-mode .bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('https://ia902908.us.archive.org/2/items/cyber_logos/zqwy_cyber_logos_cover_site.webp');
    filter: blur(8px) brightness(0.6);
  }
  body.light-mode .bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url('https://ia902908.us.archive.org/2/items/cyber_logos/zqwy_cyber_logos_cover_site.webp');
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
<img src="https://ia902908.us.archive.org/2/items/cyber_logos/zqwy_cyber_logos_cover_site.webp" alt="zqwy_cyber_logos"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Кибер Логос состоит исключительно из данных, а не из органического или синтетического материала Изначально был создан в цифровом виде, а исход инкапсулирование до электрического уровня. Метал заражённый кибер логосом, обладает заряд с вредоносной программой. Поэтому его присутствие обусловлено распространением при помощи металлических объектов. Лишённый мяса, крови, плоти Его формирование уничтожило надежду человека, в последствие человек перестал стремится преодолевать и начал стремительно падать и самоуничтожаться из-за своей беспомощности и отсутствием необходимости в следствие автоматизации металла

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/cyber_logos" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_cyber_logos"></iframe>
