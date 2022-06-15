const show = document.querySelector('.mail');
const form = document.querySelector('.contact-form');
const shadow = document.querySelector('.shadow')
const closeBtn = document.querySelector('.close')

const showMsg = () => {
	form.style.zIndex = "100";
    shadow.style.zIndex="10";
};


const closeMsg = () =>{
    form.style.zIndex = "-100";
    shadow.style.zIndex="-100";
}


show.addEventListener('click', showMsg);
closeBtn.addEventListener('click', closeMsg)
