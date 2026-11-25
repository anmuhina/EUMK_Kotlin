// script.js — вспомогательные функции для ЭУМК
// 1) Автоматическая подсветка активного пункта меню по имени текущего файла
// 2) Плавная прокрутка к якорям

document.addEventListener('DOMContentLoaded', function () {
    // Определяем имя текущей страницы
    const path = window.location.pathname;
    const currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    // Находим все ссылки в боковом меню
    const links = document.querySelectorAll('.sidebar nav a');

    links.forEach(function (link) {
        // Убираем active у всех, затем ставим на совпадающую
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (!href) return;
        // Сравниваем только имя файла (без путей)
        const hrefFile = href.substring(href.lastIndexOf('/') + 1);
        if (hrefFile === currentFile) {
            link.classList.add('active');
        }
    });

    // Плавная прокрутка для внутренних якорей
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});