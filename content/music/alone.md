---
title: "alone"
author: zqwy
alias: "alone"
aliases: 
- alone
tags: 
- house
- dancepop
- jungle
- drumandbass 
description: Одиночество и последний человек Демонстрируют две ситуации самостоятельности, представленным в едином субъекте. Одиночество существует всегда. Проявляется в чел
date: 2023-08-19
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
<img src="https://ia600801.us.archive.org/14/items/zqwy_alone_/zqwy_alone_cover_site.webp" alt="zqwy_alone"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Alone and the last man demonstrate two situations of independence, presented in a single subject. Alone always exists. It manifests itself in humans through endorphin production, with the feeling of lost contact with people. Alone is not associated with the sensations of being the last man. The only man, with or without willpower, remains completely independent. Alone, however, is associated with the presence of others, and the feeling of being the last man is linked to the protagonist's worldview due to the absence of others. As a result, a closeness to the divine grows, which provides protection from pain in the rational part of the soul and from individuality. Axe is one of the last remaining on earth after the destruction of life. His animal soul differed from that of a human, yet he tried to understand and feel everything that the last man feels in solitude.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_alone"></iframe>
