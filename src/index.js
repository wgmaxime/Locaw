import moment from 'moment'   
import './style.css';


//Animation Placeholder input
var input = document.querySelectorAll('input');
var showMp = document.querySelectorAll('.show-mp');

//__Animation Placeholder input
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', function(event) {
        event.target.classList.add('active');
    });
    input[i].addEventListener('blur', function(event) {
    	if (event.target.value == "") {
    		event.target.classList.remove('active');
    	}
    });
}

for (var i = 0; i < showMp.length; i++) {
    showMp[i].addEventListener('click', function(event) {
        if (event.target.nextSibling.nextSibling.getAttribute('type') == "password") {
        	document.querySelector('.show-mp-1').classList.add('active')
        	document.querySelector('.show-mp-2').classList.remove('active')
        	event.target.nextSibling.nextSibling.setAttribute('type', 'text');
        }else{
        	document.querySelector('.show-mp-2').classList.add('active')
        	document.querySelector('.show-mp-1').classList.remove('active')
        	event.target.nextSibling.nextSibling.setAttribute('type', 'password');
        }
        
    });
}

//Exercice moment

// moment.locale('fr')  

// const element = document.querySelector('.slogan em'); 

// element.innerHTML =  
// `Le cours a commencé :  
// ${moment("2020 04 27, 8:00:00 am", "YYYY MM DD, h:mm:ss a")   
// 	.fromNow()}`; 


/* -- */
const delayInMillisecond = 1000;
const email = "hello@lp.wd";
const password = "qwerty";
var newEmail = "";
var newPassword = "";
var finishRegister = false;
var name;
var lastname;

/* -- */
const onLoginSubmit = e => {
    e.preventDefault();
    startPendingState(e.target);

    setTimeout(() => {
        stopPendingState();

        const data = new FormData(e.target);
        processData(data);

    }, delayInMillisecond);
}

const startPendingState = (target) => {
    const button = document.querySelector("#login button");
    const loading = document.querySelector("#login #loading");

    button.setAttribute('disabled', '');
    //loading.classList.remove('hidden');
}

const stopPendingState = () =>{
    const button = document.querySelector("#login button");
    const loading = document.querySelector("#login #loading");

    button.removeAttribute('disabled');
    //loading.classList.remove('hidden');
}

const processData = data => {
    if (data.get('password_co') === password && data.get('identifiant_co') === email || data.get('password_co') === newPassword && data.get('identifiant_co') === newEmail) {
        sucessMessage();
    }else{
        errorMessage();
    }
}

const errorMessage = () => {
    alert("Tu t'es planté ! Recommence")
}

const sucessMessage = () => {
    if (finishRegister) {
        alert("Bienvenue "+name+", tu es maintenant connecté !!!")
    }else{
        alert("Bravo vous êtes connecté avec le compte de test ! À vous de créez votre propre compte maintenant")
    }
    
}

/* -- */
document.querySelector('#login').addEventListener('submit', onLoginSubmit);


//Gestion de l'ouverture et la fermeture de la Modal d'incription
let modal = document.getElementById("modalRegister");
let openModal = document.getElementById("register");
let closeModal = document.getElementsByClassName("close")[0];
openModal.onclick = function() {
  modal.style.display = "flex";
}
closeModal.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Gestion des étapes
let registerStep = 1;

document.querySelectorAll('.next').forEach(item => {
  item.addEventListener('click', event => {
    watchStep("next");
  })
})
document.querySelectorAll('.prev').forEach(item => {
  item.addEventListener('click', event => {
    watchStep("prev");
  })
})

document.querySelectorAll('.form-incription').forEach(item => {
  item.addEventListener('submit', event => {
    event.preventDefault();
  })
})

//Gestion des étapes suite et gestion des différents champs d'incription
function watchStep(event){
    document.getElementById("step-"+registerStep).style.display = "none";
    if (registerStep == 4) {
        document.getElementById("modalRegister").style.display = "none";
        finishRegister = true;
    }
    if (registerStep == 3) {
        newEmail = document.querySelector("input[name='email_re']").value;
        newPassword = document.querySelector("input[name='password_re']").value;
        if (email != "" && password != "") {
            registerStep++;
        }
    }
    if (registerStep == 2) {
        var born = document.querySelector("input[name='born_re']").value;
        var job = document.querySelector("textarea[name='job_re']").value;
        if (born != "" && job != "") {
            registerStep++;
        }
    }
    if (registerStep == 1) {

        name = document.querySelector("input[name='name_re']").value;
        lastname = document.querySelector("input[name='lastname_re']").value;
        var adress = document.querySelector("input[name='adress_re']").value;
        if (name != "" && lastname != "" && adress != "") {
            registerStep++;
        }
    }
    if (event == "prev") {
        registerStep--;
    }
    document.getElementById("step-"+registerStep).style.display = "block";
}









