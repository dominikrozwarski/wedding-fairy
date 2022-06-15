const form = document.querySelector('.contact-form');
const shadow = document.querySelector('.shadow');
//form and boxShadow

const show = document.querySelector('.mail');
//displaying form

const send = document.querySelector('.send');
const closeBtn = document.querySelector('.close');
//buttons in form

const nameF = document.querySelector('#fname');
const email = document.querySelector('#e-mail');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
//inputs in form

const showMsg = () => {
	form.style.zIndex = '100';
	shadow.style.zIndex = '10';
	//displaying form and boxShadow
};

const closeMsg = () => {
	form.style.zIndex = '-100';
	shadow.style.zIndex = '-100';
	//hidding form and boxShadow

	clearAll();
};

const clearAll = () => {
	nameF.style.border = '2px solid pink';
	email.style.border = '2px solid pink';
	subject.style.border = '2px solid pink';
	//changing border of inputs to normal
	nameF.value = '';
	subject.value = '';
	email.value = '';
	phone.value = '';

	//clearing all inputs after cancel or sending
};

const sendBtn = () => {
	if (nameF.value == '' || email.value == '' || subject.value == '') {
		email.style.border = '2px solid red';
		subject.style.border = '2px solid red';
		nameF.style.border = '2px solid red';
		alert('Uzupełnij wszystkie pola zaznaczone " * " ');

		//changing border of inputs to red to alert there something wrong
	} else {
		clearAll();
		closeMsg();
		alert('Dziękuję, wiadomość została wysłana');
		//all good , closing form and cleraing all inputs
	}
};

send.addEventListener('click', sendBtn);
show.addEventListener('click', showMsg);
closeBtn.addEventListener('click', closeMsg);
