---
title: "mice_inside"
author: zqwy
alias: "mi"
aliases: 
tags: 
- darkhappy
- electronica
- downtempo
- piano
- cinematic
- drone
- ambient
- phonk
- metal
- idm 
description: 
date: 
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
> #### A 19-track album blending darkhappy, electronica, downtempo, piano, cinematic, drone, ambient, phonk, metal, and IDM — an experimental, atmospheric, and rhythmically diverse collection where melancholic piano motifs and drone soundscapes intertwine with gritty phonk riffs, metal aggression, and intricate IDM textures. Suited for fans of film scores, late-night ambient sets, and listeners seeking contrasting, emotionally rich sonic landscapes.

<h1 align=center>
<img src="https://ia903109.us.archive.org/30/items/zqwy_mice_inside/mice_inside_cover.webp" alt="zqwy_mice_inside"/>
</h1>

>[!abstract] Description of The Cover:
> #### 

>[!abstract] 
> #### Мышь прямоходящая как и Акс Уничтожение и разложение мыши связано, однако, причина и следствие не однородны. Душа мыши внутри... Является последней душой, необходимой для починки оружие и восстановление скрижали. 

>[!done] При создание использовались следующие музыкальные и не музыкальные инструменты:
> #### 

<iframe name="player" class="player" src="https://archive.org/details/zqwy_mice_inside" scrolling="no" width="100%" height="500" align=center frameborder="0" title="zqwy_mice_inside"></iframe>


![[agnosia]]