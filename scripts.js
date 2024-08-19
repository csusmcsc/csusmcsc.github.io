document.getElementById('menu-toggle').addEventListener('change', function() {
    document.getElementById('hamburger-line-top').classList.toggle('rotate-45');
    document.getElementById('hamburger-line-mid').classList.toggle('hide');
    document.getElementById('hamburger-line-bot').classList.toggle('rotate--45');
});