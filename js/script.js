const $ = document;
const button1 = $.getElementById('seasion-1');
const button2 = $.getElementById('seasion-2');

const seasion1 = $.getElementById('se-1');
const seasion2 = $.getElementById('se-2');

button1.addEventListener('click', function() {
    seasion1.style.display = 'flex';
    seasion2.style.display = 'none';
    button1.style.color = 'orange'
    button1.style.backgroundColor = '#615b5b'
    button1.style.borderBottom = '3px solid orange'


    button2.style.color = '#a2a2a2'
    button2.style.backgroundColor = 'rgb(40, 40, 40)'
    button2.style.border = 'none'
})

button2.addEventListener('click', function() {
    seasion2.style.display = 'flex';
    seasion1.style.display = 'none';
    button2.style.color = 'orange'
    button2.style.backgroundColor = '#615b5b'
    button2.style.borderBottom = '3px solid orange'

    button1.style.color = '#a2a2a2'
    button1.style.backgroundColor = 'rgb(40, 40, 40)'
    button1.style.border = 'none'
})