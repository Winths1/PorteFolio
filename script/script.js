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
  Apropos.classList.add('light');
  Projets.classList.remove('light');
  Contact.classList.remove('light');

  sec1.classList.remove('active');
  sec2.classList.remove('active');
  sec3.classList.remove('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})

li2.addEventListener('click', () =>{

  Apropos.classList.remove('light');
  Projets.classList.add('light');
  Contact.classList.remove('light');

  sec1.classList.add('active');
  sec2.classList.add('active');
  sec3.classList.remove('active');;
  sec4.classList.remove('active');
  sec5.classList.remove('active');
  sec6.classList.remove('active');
  sec7.classList.remove('active');
})

li3.addEventListener('click', () => {

  Apropos.classList.remove('light');
  Projets.classList.remove('light');
  Contact.classList.add('light');

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




const form = document.getElementById('formulaire') ;
let nom = document.getElementById('nom');
let email = document.getElementById('email');
let entreprise = document.getElementById('entreprise');
let message = document.getElementById('message');

form.addEventListener('submit', 
        (e) => {
          
        // e.preventDefault();
        let etat = true ;

        if (nom.value.match(/[^a-zA-Zéèçàùê-\s]/g)) {
            alert('Syntaxe de nom incorrecte') ;
            etat = false ;
        }
        if (entreprise.value.match(/[^a-zA-Zéèçàùê-]/g)) {
            alert('Syntaxe de nom incorrecte') ;
            etat = false ;
        }
        if (email.value.split("@")[1].split('.').length > 1) {
            if (email.value.split("@")[1].split('.')[1].length > 3 || email.value.split("@")[1].split('.')[1].length < 2) {
                alert("Syntaxe d'adresse mail incorrecte") ;
                etat = false ;
            }
        } else {
            alert("Syntaxe d'adresse mail incorrecte") ;
            etat = false ;
        }
      
        // nom.value = "";
        // entreprise.value = "";
        // email.value = "";
        // message.value = "";

      alert('Le message a bien été envoyé!');  

      }
)


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