const form = document.querySelector('form');
const messages = [];

const saveMessage = (e) => {
    e.preventDefault();
    const name = document.querySelector('.yName');
    const mail = document.querySelector('.yMail');
    const message = document.querySelector('.yMess');
    const add = name.value + ',' + mail.value + ',' + message.value;

    if ((name.value == '') || (mail.value == '') || (message.value == '')) {
        alert('Uzupełnij formularz!')
    } else {
        messages.push(add);
        name.value = '';
        mail.value = '';
        message.value = '';
        alert('Błąd wysyłania!')
    }
};

form.addEventListener('submit', saveMessage);