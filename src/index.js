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
        	document.querySelector('#show-mp-1').classList.add('active')
        	document.querySelector('#show-mp-2').classList.remove('active')
        	event.target.nextSibling.nextSibling.setAttribute('type', 'text');
        }else{
        	document.querySelector('#show-mp-2').classList.add('active')
        	document.querySelector('#show-mp-1').classList.remove('active')
        	event.target.nextSibling.nextSibling.setAttribute('type', 'password');
        }
        
    });
}


//Exercice moment

moment.locale('fr')  

const element = document.querySelector('.slogan em'); 

element.innerHTML =  
`Le cours a commencé :  
${moment("2020 04 27, 8:00:00 am", "YYYY MM DD, h:mm:ss a")   
	.fromNow()}`; 