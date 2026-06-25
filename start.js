#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.clear();
console.log('\n🌍 ═══════════════════════════════════════════════════════');
console.log('   Экология и Устойчивое Развитие');
console.log('   EcoWorld - Sustainable Development Platform');
console.log('═══════════════════════════════════════════════════════\n');

// Проверка папки data
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('✅ Создана папка data/');
}

// Проверка файлов данных
const files = ['users.json', 'reviews.json', 'contacts.json'];
files.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2));
        console.log(`✅ Создан файл ${file}`);
    }
});

console.log('\n🚀 Запуск сервера...\n');

const server = spawn('node', ['server.js'], {
    stdio: 'inherit',
    shell: true
});

server.on('error', (error) => {
    console.error('❌ Ошибка:', error.message);
    process.exit(1);
});

server.on('exit', (code) => {
    console.log(`\n⛔ Сервер остановлен (код ${code})`);
});

process.on('SIGINT', () => {
    console.log('\n\n🛑 Сервер остановлен пользователем');
    process.exit(0);
});
