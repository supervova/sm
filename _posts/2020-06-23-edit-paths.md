---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 4)&nbsp;Редактирование контуров
description: Для работы с&nbsp;контурами в&nbsp;Illustrator’е есть абсолютно гениальный виджет динамического угла, а&nbsp;также стандартные ножицы, ластик и&nbsp;т.&nbsp;д.
date: 2020-06-23
categories: Illustrator
---

{% include blog/illustrator.html %}

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Составной контур (Compound Path)</h2>
<p>Объект, нарисованный только линиями. Представляет собой единое целое. Если применить к&nbsp;нему стили обводки, все фрагменты контура будут выглядеть единообразно.</p>
<p>Удобен, в&nbsp;частности, для рисования букв.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/01-path.png" alt="Составной контур"></p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/02-stroke.png" alt="Составной контур"></p>
<ul>
  <li>⌘J&nbsp;— Соединить фрагменты контура </li>
  <li> ⌘⇧⌥J&nbsp;— Соединить фрагменты контура, выбрав тип опорной точки в&nbsp;диалоге
    <p><img src="{{ site.assets }}/img/blog/2020/06-23/03-join.png" alt="Соединить фрагменты контура"></p>
  </li>
  <li> ⌘8&nbsp;— Объединить контуры в&nbsp;составной контур <br>
    Object ➜ Compound Path ➜ Make <br>
    ☝&nbsp;&nbsp;Составной контур можно разобрать: <br>
    Object ➜ Compound Path ➜ Release </li>
</ul>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Выравнивание опорных точек</h2>
<p>Опорные точки можно выравнивать также как и&nbsp;объекты. Тип выравнивания&nbsp;— Align to&nbsp;Selection.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/04-align.png" alt="Выравнивание опорных точек"></p>
<p>Также можно выбрать команду Object ➜ Path ➜ Average (⇧⌥J) и&nbsp;выровнять по&nbsp;вертикали, горизонтали или по&nbsp;обеим осям.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/05-average.png" alt="Выравнивание опорных точек — Average"></p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/06-average.png" alt="Выравнивание опорных точек — Average"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Ножницы (C)&nbsp;и&nbsp;инструмент «Стирание контура» (Path Eraser Tool)</h2>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/07-eraser-tool.png" alt="Стирание контура"></p>
<p>Кликнув ножницами на&nbsp;контур, добавляешь разрыв&nbsp;— две опорных точки, одну под другой.￼</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/08-scissors.png" alt="Ножницы"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент соединения контуров</h2>
<p>Последний пункт в&nbsp;меню карандаша</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/09-join-tool.png" alt="Инструмент соединения контуров"></p>
<ul>
  <li> Для того чтобы соединить пересекающие пути, надо инструментом Join «стереть» ненужные отрезки
    <p><img src="{{ site.assets }}/img/blog/2020/06-23/10-join-tool.png" alt="Инструмент соединения контуров"></p>
  </li>
  <li> Для того чтобы удалить разрыв между двумя точками, надо дорисовать недостающий отрезок.
    <p><img src="{{ site.assets }}/img/blog/2020/06-23/11-join-tool.png" alt="Инструмент соединения контуров"></p>
  </li>
</ul>
<p>См. также 👉&nbsp;&nbsp;Векторная графика ➜ Рисование фигур линиями и&nbsp;инструментом быстрой заливки.</p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Скругление углов контура</h2>
<p>Выбрав белой стрелкой контур с&nbsp;углом, можно скруглить имеющиеся углы, точно также как у&nbsp;фигур. Либо потянув за&nbsp;круглые ручки <strong>виджета динамического угла</strong>, либо введя радиус в&nbsp;поле Corners.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/12-live-corners-widget.png" alt="Виджет динамического угла"></p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/13-live-corners-widget.png" alt="Виджет динамического угла"></p>
<p>И&nbsp;так&nbsp;же, как в&nbsp;случае со&nbsp;скруглением у&nbsp;форм двойной клик на&nbsp;метке скругления вызовет диалог, в&nbsp;котором можно ввести точный радиус и&nbsp;изменить тип угла.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/14-corners-palette.png" alt="Панель скругления углов"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент «Стирание контура» (Path Eraser Tool)</h2>
<p>Проведя «Стиранием контура» от&nbsp;одной опорной точки к&nbsp;другой удаляешь фрагмент между ними.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/15-path-eraser-tool.png" alt="Стирание контура"></p>
<p>Сравнение «Стирание контура» (слева) со&nbsp;стиранием ластиком справа.￼</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/16-erase-comparison.png" alt="Сравнение «Стирание контура» со стиранием ластиком справа"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Карандаш</h2>
<p>Инструмент для рисования от&nbsp;руки, прежде всего на&nbsp;планшетах.</p>
<p>В&nbsp;настройках можно увеличить плавность линий, чтобы рисунки мышью получались плавней.</p>
<p>А&nbsp;также поставить расстояние между крайними точками, на&nbsp;котором контур будет замыкаться.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/17-pencil-tool-options.png" alt="Настройки карандаша"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент сглаживания</h2>
<p>Провести инструментом по&nbsp;линии, чтобы сделать её&nbsp;плавней и&nbsp;уменьшить количество опорных точек.</p>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/18-smooth-tool.png" alt="Инструмент сглаживания"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Перевести обводку, мазки кисти в&nbsp;формы </h2>
<ul>
  <li>Чтобы перевести в&nbsp;формы линии<br>
    Object ➜ Expand<br>
    или<br>
    Object ➜ Path ➜ Outline Stroke
    <p><img src="{{ site.assets }}/img/blog/2020/06-23/19-expand.png" alt="Expand"></p>
    <p>Object ➜ Path ➜ Outline Stroke&nbsp;— это частный случай Expand.</p>
    <p>☝️🧐&nbsp;&nbsp;Возможности Expand шире перевода обводки в&nbsp;формы.<br>
    <ul>
      <li>Перевод в&nbsp;градиенты, переходы в&nbsp;набор форм.</li>
      <li>Разделение объекта с&nbsp;заливкой и&nbsp;обводкой на&nbsp;два объекта: только с&nbsp;заливкой и&nbsp;только с&nbsp;обводкой.</li>
    </ul>
    <p>См. группировку и&nbsp;разбор объектов</p>
  </li>
  <li> Чтобы перевести в&nbsp;формы графику, созданную с&nbsp;помощью эффектов или шаблонных кистей<br>
    Object ➜ Expand Appearance </li>
</ul>
<p><img src="{{ site.assets }}/img/blog/2020/06-23/20-expand-appearance.png" alt="Expand Appearance"></p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Упростить контур</h2>
<p>Object ➜ Path ➜ Simplify </p>
<p> Примерные настройки: <br>
  Curve Precision = 90% <br>
  Angle Threshold = 0 </p>
<p><a href="https://helpx.adobe.com/ru/illustrator/using/editing-paths.html" target="_blank" rel="noopener noreferrer">Подробнее</a></p>
