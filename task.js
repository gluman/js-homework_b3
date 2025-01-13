
const tabs_content = document.querySelectorAll('.tab__content');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, i) => {

    tab.addEventListener('click', () => {
      
        tabs.forEach(tab => {
            tab.classList.remove('tab_active')
        });
        tab.classList.add('tab_active')
        // Удаляем класс 'tab__content_active' у всех разделов
        tabs_content.forEach(content => content.classList.remove('tab__content_active'));
        // Добавляем класс 'tab__content_active' к нужному разделу
        tabs_content[i].classList.add('tab__content_active');


    });

});