document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.nav-menu');
    const menuList = document.querySelector('.menu-list');
    const orderBtn = document.querySelector('.order-btn');

    orderBtn.addEventListener('click', () => {
        document.getElementById('work_together').scrollIntoView({ behavior: 'smooth' });
    });

    let outsideClickListener;
    let menuLinkListeners = [];

    function closeMenu() {
        menuList.classList.remove('visible');
        removeListeners();
    }

    function handleMenuLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        closeMenu();
    }

    function handleOutsideClick(event) {
        if (!menuList.contains(event.target) && !menuTrigger.contains(event.target)) {
            closeMenu();
        }
    }

    function addListeners() {
        const links = document.querySelectorAll('.menu-link');
        menuLinkListeners = Array.from(links).map(link => {
            const handler = handleMenuLinkClick.bind(link);
            link.addEventListener('click', handler);
            return { link, handler };
        });

        outsideClickListener = handleOutsideClick;
        document.addEventListener('click', outsideClickListener);
    }

    function removeListeners() {
        menuLinkListeners.forEach(({ link, handler }) => {
            link.removeEventListener('click', handler);
        });
        menuLinkListeners = [];

        if (outsideClickListener) {
            document.removeEventListener('click', outsideClickListener);
            outsideClickListener = null;
        }
    }

    menuTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        const isVisible = menuList.classList.toggle('visible');

        if (isVisible) {
            addListeners();
        } else {
            removeListeners();
        }
    });
});
