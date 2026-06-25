# 🚀 Развертывание сайта

## Локальный запуск

### Для Windows:
```bash
setup.bat
```

### Для macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

### Или вручную:
```bash
npm install
npm start
```

Сайт будет доступен на http://localhost:3000

---

## Развертывание в облако

### 1️⃣ Replit (Самый быстрый способ) ⭐

1. Перейдите на https://replit.com
2. Нажмите "+ Create" 
3. Выберите "Import from GitHub"
4. Вставьте URL: `https://github.com/Khalil-yus/solid-carnival.git`
5. Нажмите "Import from GitHub"
6. Нажмите кнопку "Run"

**Готово! Ваш сайт онлайн!** 🎉

---

### 2️⃣ Vercel (Для статического хостинга)

1. Перейдите на https://vercel.com
2. Нажмите "New Project"
3. Импортируйте репозиторий GitHub
4. Выберите `solid-carnival`
5. Нажмите "Deploy"

**Ваш сайт будет доступен на vercel.app** 🌐

---

### 3️⃣ Heroku (Классический вариант)

1. Установите Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Откройте терминал и выполните:

```bash
heroku login
heroku create ecology-sustainable-site
git push heroku main
```

**Ваш сайт будет доступен на herokuapp.com** 🚀

---

### 4️⃣ Railway (Современный вариант)

1. Перейдите на https://railway.app
2. Нажмите "New Project"
3. Выберите "Deploy from GitHub"
4. Авторизуйтесь и выберите репозиторий
5. Нажмите "Deploy"

**Готово!** 🎊

---

### 5️⃣ Render (Бесплатный хостинг)

1. Перейдите на https://render.com
2. Нажмите "New +" → "Web Service"
3. Подключите GitHub
4. Выберите `solid-carnival`
5. Настройки:
   - Runtime: Node
   - Build: `npm install`
   - Start: `npm start`
6. Нажмите "Create Web Service"

**Готово! Сайт онлайн!** ✨

---

## 📊 Таблица сравнения

| Платформа | Скорость | Бесплатно | Легкость | Статус |
|-----------|---------|----------|---------|--------|
| Replit    | ⭐⭐⭐  | ✅       | ⭐⭐⭐ | ✅ Лучше |
| Vercel    | ⭐⭐⭐⭐ | ✅       | ⭐⭐⭐ | ✅ |
| Heroku    | ⭐⭐    | ✅*      | ⭐⭐   | ⚠️ Платно |
| Railway   | ⭐⭐⭐  | ✅       | ⭐⭐   | ✅ |
| Render    | ⭐⭐⭐  | ✅       | ⭐⭐⭐ | ✅ |

*Heroku раньше был бесплатным, теперь платный

---

## 🔐 Переменные окружения

Если нужно, создайте `.env` файл:

```env
PORT=3000
NODE_ENV=production
SECRET_KEY=your-secret-key-here
```

---

## 📝 Логирование и отладка

Если что-то не работает:

1. Проверьте порт:
   ```bash
   lsof -i :3000  # macOS/Linux
   netstat -ano | findstr :3000  # Windows
   ```

2. Очистите кэш npm:
   ```bash
   npm cache clean --force
   ```

3. Переустановите зависимости:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🎯 Рекомендация

**Для начинающих:** Используйте **Replit** - самый простой способ! ⭐

**Для продакшена:** Используйте **Vercel** или **Railway** 🚀

---

Вопросы? Свяжитесь с нами! 📧
