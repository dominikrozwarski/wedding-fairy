const show = document.querySelector('.mail');
const form = document.querySelector('.contact-form');
const shadow = document.querySelector('.shadow');
const closeBtn = document.querySelector('.close');
const name = document.querySelector('#fname');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const send = document.querySelector('.send');

const showMsg = () => {
	form.style.zIndex = '100';
	shadow.style.zIndex = '10';
};

const closeMsg = () => {
	form.style.zIndex = '-100';
	shadow.style.zIndex = '-100';
};

const sendBtn = () => {
	if (name.value == '' || phone.value == '' || subject || value == '') {
		console.log('no');
	}
};

send.addEventListener('click', sendBtn);
show.addEventListener('click', showMsg);
closeBtn.addEventListener('click', closeMsg);
