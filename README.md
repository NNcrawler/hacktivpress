# hacktivpress

# Simple Blog using Vue.JS

Simple CRUD app that allow each user to post article and manage their own article.

# Working plan
1. Create register/login functionality with frontend prototype.
2. Design Schema.
3. Develop CRUD article functionality per feature (backend/frontend).

## Article
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /article/all      |GET     |GET all articles|
| /article/:id      |GET    |GET an article by id    |
| /article/  |POST  |Create an article. Pass title, content, category, author    |
| /article/  |PUT     |Update an article. Pass title, content, category, id|
| /article/:id  |DELETE     |DELET an article by id|

## User
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /user/id      |GET     |GET user data|
| /user/      |post     |Record user data|
