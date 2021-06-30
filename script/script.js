// Récupération des éléments html
//Récupération des clicks navbar
const Apropos = document.querySelector('#toApropos');
const Projets = document.querySelector('#toProjets');
const Contact = document.querySelector('#toContact');

const li1 = document.querySelector('#li1');
const li2 = document.querySelector('#li2');
const li3 = document.querySelector('#li3');

// Récupération des sections
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const sec5 = document.querySelector('.sec5');
const sec6 = document.querySelector('.sec6');
const sec7 = document.querySelector('.sec7');

//Récupération des boutons
const pr1 = document.querySelector('.btn1');
const pr2 = document.querySelector('.btn2');
const pr3 = document.querySelector('.btn3');
const pr4 = document.querySelector('.btn4');
const pr5 = document.querySelectorAll('.btn-projets');


//Création des fonctions


//fonctions navbar
//sec1.active = translateX sur la sec1
li1.addEventListener('click', () =>{
  li1.classList.add('light');
  li2.classList.remove('light');
  li3.classList.remove('light');

  sec1.classList.remove('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})

li2.addEventListener('click', () =>{

  li1.classList.remove('light');
  li2.classList.add('light');
  li3.classList.remove('light');

  sec1.classList.add('active');
  sec2.classList.add('active');
  sec3.classList.remove('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})

li3.addEventListener('click', () => {

  li1.classList.remove('light');
  li2.classList.remove('light');
  li3.classList.add('light');

  sec1.classList.add('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.add('active');
})

//fonctions buttons
pr1.addEventListener('click', () => {
  sec1.classList.add('active');
  sec2.classList.remove('active')
  sec3.classList.add('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})
pr2.addEventListener('click', () => {
  sec1.classList.add('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');
  sec4.classList.add('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})
pr3.addEventListener('click', () => {
  sec1.classList.add('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');
  sec4.classList.remove('active');
  sec5.classList.add('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})
pr4.addEventListener('click', () => {
  sec1.classList.add('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.add('active');
  sec7.classList.remove('active');
})

pr5.forEach(btn => {
  btn.addEventListener  ('click', () => {
    sec1.classList.add('active');
    sec2.classList.add('active');
    sec3.classList.remove('active');
    sec4.classList.remove('active');
    sec5.classList.remove('active');
    sec6.classList.remove('active');
    sec7.classList.remove('active');
})});



// pr5.addEventListener('click', () => {
//   console.log('test');
//   sec1.classList.add('active');
//   sec2.classList.add('active');
//   sec3.classList.remove('active');
//   sec4.classList.remove('active');
//   sec5.classList.remove('active');
//   sec6.classList.remove('active');
//   sec7.classList.remove('active');
// })