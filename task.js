
const tabs_content = document.querySelectorAll('.tab__content');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, i) => {

    tab.addEventListener('click', () => {

        tabs.forEach(tab => {
            tab.classList.remove('tab_active')
        });
        tab.classList.add('tab_active')
        tabs_content.forEach(content => content.classList.remove('tab__content_active'));
        tabs_content[i].classList.add('tab__content_active');


    });

});