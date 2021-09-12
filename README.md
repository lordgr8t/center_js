### GR8T-center
Это мини jq скрипт для центрирования блоков.
Центрировать можно только inline блоки или блоки с фиксированной высотой и шириной.

#### Структура html
``` 
      <div id="center-wrapper">
            <div id="center-heigh"></div>
      </div>
``` 
#### Параметры центрирования

Родительский блок задаётся id #center-wrapper.

Дочерние блоки:

| Результат                                                            | ID блока        |
| -------------------------------------------------------------------- |:---------------:|
| Центрировать по высоте родительского блока center-wrapper            | center-heigh    |
| Центрировать по ширине родительского блока center-wrapper            | center-width    |
| Центрировать по ширине и высоте родительского блока center-wrapper   | center-all      |

