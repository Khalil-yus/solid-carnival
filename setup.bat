@echo off
REM Windows setup script

echo 🌍 Установка Ecology Sustainable Development Site
echo ===================================================

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js не установлен!
    echo 📥 Пожалуйста, установите Node.js с https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js найден
node --version
echo ✅ npm найден
npm --version

echo.
echo 📦 Установка зависимостей...
call npm install

echo.
echo ✅ Зависимости установлены!
echo.
echo 🚀 Запуск сервера...
echo ===================================================
echo 🌐 Сервер доступен по адресу: http://localhost:3000
echo ===================================================
echo.

call npm start
pause
