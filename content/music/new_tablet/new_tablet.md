---
title: "new_tablet"
author: zqwy
alias: "nt"
aliases: 
tags: 
- drone
- orchestral
- phonk 
description: 
date: 
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
<img src="https://ia600503.us.archive.org/32/items/zqwy_new_tablet/tablet_of_the_souls_site.webp" alt="zqwy_new_tablet"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Скрижаль душ это центр лабиринта, происхождение всего, каждый синтез и их переход в междумирье, на гране. Хранит память всех путей, которые уже прошли и готовит подходящие для тех, кто ещё придёт. Души вновь и вновь возвращаются к скрижали, а по-другую сторону переходят в иную скрижаль. Каждый раз, когда происходит синтез (новое сознание, созданное из данных или живой материи) проходит через её границу, скрижаль «читает» его сигнатуру, распознаёт паттерны прошлых переходов и формирует новый маршрут, который будет легче пройти.

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_new_tablet" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_new_tablet"></iframe>
