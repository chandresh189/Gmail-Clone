var c = 0;
document.querySelector(".c1").onclick = function () {
    document.querySelector(".mail-type-container").classList.add('primary')
    document.querySelectorAll(".mail-type-container")[1].classList.remove('social')
    document.querySelectorAll(".mail-type-container")[2].classList.remove('promotion')
    document.querySelectorAll(".mail-type-container span")[0].style.color = 'red'
    document.querySelectorAll(".mail-type-container span")[1].style.color = 'gray'
    document.querySelectorAll(".mail-type-container span")[2].style.color = 'gray'
}

document.querySelector(".c2").onclick = function () {
    document.querySelector(".mail-type-container").classList.remove('primary')
    document.querySelectorAll(".mail-type-container")[1].classList.add('social')
    document.querySelectorAll(".mail-type-container")[2].classList.remove('promotion')
    document.querySelectorAll(".mail-type-container span")[0].style.color = 'gray'
    document.querySelectorAll(".mail-type-container span")[1].style.color = 'blue'
    document.querySelectorAll(".mail-type-container span")[2].style.color = 'gray'
}

document.querySelector(".c3").onclick = function () {
    document.querySelector(".mail-type-container").classList.remove('primary')
    document.querySelectorAll(".mail-type-container")[1].classList.remove('social')
    document.querySelectorAll(".mail-type-container")[2].classList.add('promotion')
    document.querySelectorAll(".mail-type-container span")[0].style.color = 'gray'
    document.querySelectorAll(".mail-type-container span")[1].style.color = 'gray'
    document.querySelectorAll(".mail-type-container span")[2].style.color = 'green'
}

document.querySelector(".compose").onclick = function () {
    document.querySelector(".send-mail").style.display='block'
}



function sendEmail() {

    var data = $('form').serializeArray();
    var from = "sender-mail";

    // console.log(data[0].value, data[1].value, data[2].value);

	Email.send({
    SecureToken : "generate-it",
    To : data[0].value,
	From : from,
	Subject : data[1].value,
	Body : data[2].value,
	}).then(
		message => alert(message)
	);
    
    document.querySelector(".send-mail").style.display = 'none'
}
