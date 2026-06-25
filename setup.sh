#!/bin/bash

echo "🌍 Установка Ecology & Sustainable Development Site"
echo "================================================="

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "📥 Пожалуйста, установите Node.js с https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js найден: $(node --version)"
echo "✅ npm найден: $(npm --version)"

echo ""
echo "📦 Установка зависимостей..."
npm install

echo ""
echo "✅ Зависимости установлены!"
echo ""
echo "🚀 Запуск сервера..."
echo "================================================="
echo "🌐 Сервер доступен по адресу: http://localhost:3000"
echo "================================================="
echo ""

npm start
