(function () {
    'use strict';

    var groups = document.querySelectorAll('.container-test');
    var items = document.querySelectorAll('.container-test > .content > div');
    var i;
    var to;

    for (i = 0; i < groups.length; i++) {
        groups[i].querySelector('header').addEventListener('click', function(e){
            var group = e.currentTarget.parentNode;
            var section = group.querySelector('section');

            if (group.classList.contains('open')) {
                section.style.height = (section.scrollHeight - 50)+'px';
                setTimeout(function(section){ section.style.height = '0px'; }, 0, section);
                group.classList.remove('open');
            } else {
                group.classList.add('open');
                section.style.height = section.scrollHeight+'px';

                section.addEventListener('transitionend', function(e){
                    if (e.currentTarget.style.height !== '0px') {
                        e.currentTarget.style.height = 'auto';
                    }
                });
            }
        });
    }

    for (i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseover', function(e){
            var item = e.currentTarget;

            clearTimeout(to);
            to = setTimeout(function(item){ item.classList.add('open'); }, 400, item);
        });

        items[i].addEventListener('mouseleave', function(e){
            var item = e.currentTarget;

            clearTimeout(to);
            item.classList.remove('open');
        });
    }
})();
