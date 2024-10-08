document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuContainer = document.getElementById('menu-container');
    const hamburgerLines = {
        top: document.getElementById('hamburger-line-top'),
        mid: document.getElementById('hamburger-line-mid'),
        bot: document.getElementById('hamburger-line-bot')
    };

    menuToggle.addEventListener('change', function() {
        //Brings menu out
        if (this.checked) {
            menu.classList.add('scale-y-100');
            hamburgerLines.top.classList.add('rotate-45');
            hamburgerLines.mid.classList.add('hide');
            hamburgerLines.bot.classList.add('rotate--45');
        } 
        //Sends menu back in
        else {
            menu.classList.remove('scale-y-100');
            hamburgerLines.top.classList.remove('rotate-45');
            hamburgerLines.mid.classList.remove('hide');
            hamburgerLines.bot.classList.remove('rotate--45');
        }   
    });

    // Closes menu when clicking outside the menu
    document.addEventListener('click', function(event) {
        if (!menuContainer.contains(event.target) && menuToggle.checked) {
            menuToggle.checked = false;

            //This line is a fix to manually force creating an event.
            menuToggle.dispatchEvent(new Event('change'));
        }
    });
    
});
