const show = document.querySelector('.mail');
const form = document.querySelector('.contact-form');
const shadow = document.querySelector('.shadow');
const closeBtn = document.querySelector('.close');
const nameF = document.querySelector('#fname');
const email = document.querySelector('#e-mail');
const subject = document.querySelector('#subject');
const send = document.querySelector('.send');
const phone = document.querySelector('#phone');

const showMsg = () => {
	form.style.zIndex = '100';
	shadow.style.zIndex = '10';
};

const closeMsg = () => {
	form.style.zIndex = '-100';
	shadow.style.zIndex = '-100';

	clearAll();
};

const clearAll = () => {
	nameF.style.border = '2px solid pink';
	email.style.border = '2px solid pink';
	subject.style.border = '2px solid pink';
	nameF.value = '';
	subject.value = '';
	email.value = '';
	phone.value = '';
};

const sendBtn = () => {
	if (nameF.value == '' || email.value == '' || subject.value == '') {		nameF.style.border = '2px solid red';
		email.style.border = '2px solid red';
		subject.style.border = '2px solid red';
	} else {
		clearAll();
		closeMsg();
		alert('Dziękuję, wiadomość została wysłana');
		
	}
};

send.addEventListener('click', sendBtn);
show.addEventListener('click', showMsg);
closeBtn.addEventListener('click', closeMsg);
