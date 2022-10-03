const modal = [...document.querySelectorAll('.modal')];
const box = document.querySelector('main>picture');
const main = document.querySelector('main');

modal.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const target = e.currentTarget;
        const arrow = item.querySelector('img');
        const question = item.querySelector('h2');
        question.classList.toggle('heavy-font');
        target.parentElement.classList.toggle('show-content')
        arrow.classList.toggle('rotate')
        modal.forEach(function (obj) {
            if (obj !== target) {
                obj.parentElement.classList.remove('show-content')
                obj.querySelector('img').classList.add('rotate')
                obj.querySelector('h2').classList.remove('heavy-font')
            };
        });
    });
    item.addEventListener('mouseover',function(e) {
        const target = e.currentTarget;
        target.querySelector('h2').classList.add('hover-state')
        box.classList.add('translate-box');
        main.classList.add('translate-hero');
    });
    item.addEventListener('mouseout',function(e) {
        const target = e.currentTarget;
        target.querySelector('h2').classList.remove('hover-state')
        box.classList.remove('translate-box');
        main.classList.remove('translate-hero');
    });
});