let item1 = document.querySelector('.item1')
let cock = document.querySelector('.cock')
let close1 = document.querySelector('.close1')
let tips = document.querySelector('.tips')
let tipz = document.querySelector('.tipz')

item1.addEventListener('click', function name() {
    cock.classList.add('show')
    item1.classList.add('actives')
    soda.classList.remove('show')
    tips.classList.add('tip-show')
    item2.classList.remove('actives')
    tipz.classList.remove('actives')
})
close1.addEventListener('click', function name() {
    cock.classList.remove('show')
    tips.classList.add('tip-show')
});

let item2 = document.querySelector('.item2')
let soda = document.querySelector('.soda')
let close2 = document.querySelector('.close2')

item2.addEventListener('click', function name() {
    soda.classList.add('show')
    cock.classList.remove('show')
    tips.classList.add('tip-show')
    item2.classList.add('actives')
    item1.classList.remove('actives')
    tipz.classList.remove('actives')
})
close2.addEventListener('click', function name() {
    soda.classList.remove('show')
    tips.classList.add('tip-show')
});
tipz.addEventListener('click', function name() {
    soda.classList.remove('show')
    cock.classList.remove('show')
    tips.classList.remove('tip-show')
    tipz.classList.add('actives')
    item2.classList.remove('actives')
    item1.classList.remove('actives')
});

let kgl = document.querySelector('.kgl');
let p = document.querySelector('.kigali-items');

let est = document.querySelector('.est');
let p1 = document.querySelector('.east-items');

let wst = document.querySelector('.wst');
let p2 = document.querySelector('.west-items');

let nth = document.querySelector('.nth');
let p3 = document.querySelector('.north-items');

let sth = document.querySelector('.sth');
let p4 = document.querySelector('.south-items');
let svg = document.querySelector('.svg')
let svg1 = document.querySelector('.svg1')
let svg2 = document.querySelector('.svg2')
let svg3 = document.querySelector('.svg3')
let svg4 = document.querySelector('.svg4')

kgl.addEventListener('click', ()=>{
    p.classList.toggle('bura');
    svg.classList.toggle('rotate1')
})

wst.addEventListener('click', ()=>{
    p2.classList.toggle('bura');
    svg2.classList.toggle('rotate1')
})

est.addEventListener('click', ()=>{
    p1.classList.toggle('bura');
    svg1.classList.toggle('rotate1')
})

nth.addEventListener('click', ()=>{
    p3.classList.toggle('bura');
    svg3.classList.toggle('rotate1')
})

sth.addEventListener('click', ()=>{
    p4.classList.toggle('bura');
    svg4.classList.toggle('rotate1')
})







 
