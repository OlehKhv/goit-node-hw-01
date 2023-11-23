# goit-node-hw-01

```shell
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
```
[LIST](https://prnt.sc/TGPEgXR4KRm8)

```shell
# Отримуємо контакт по id і виводимо у консоль об'єкт контакта або null якщо контакту з таким id не існує
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```
[GET](https://prnt.sc/k4nLA6t07dNC)

```shell
# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```
[ADD](https://prnt.sc/uqkjIHaCqsXU)

```shell
# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null якщо контакту з таким id не існує
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```
[REMOVE](https://prnt.sc/B84zKmYnDGNU)
