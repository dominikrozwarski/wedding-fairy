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

const msg = document.querySelector('.msg');
const msgButton = document.querySelector('.closeMsg');

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

const clearInput = () => {
	if (nameF.value == '') {
		nameF.style.border = '2px solid red';
	} else {
		nameF.style.border = '2px solid pink';
	}
};

const clearEmail = () => {
	if (email.value == '') {
		email.style.border = '2px solid red';
	} else {
		email.style.border = '2px solid pink';
	}
};

const clearSubject = () => {
	if (subject.value == '') {
		subject.style.border = '2px solid red';
	} else {
		subject.style.border = '2px solid pink';
	}
};

const sendBtn = () => {
	if (nameF.value == '' || email.value == '' || subject.value == '') {
		clearInput();
		clearEmail();
		clearSubject();
		//changing border of inputs to red to alert there something wrong
	} else {
		clearAll();
		closeMsg();
		msg.style.left = '50%';
		//all good , closing form and cleraing all inputs
	}
};

const closeM = () => {
	msg.style.left = '-10000px';
};

send.addEventListener('click', sendBtn);
show.addEventListener('click', showMsg);
closeBtn.addEventListener('click', closeMsg);
msgButton.addEventListener('click', closeM);
