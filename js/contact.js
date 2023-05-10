

function sendMessage() {
  var nameInput = document.querySelector('input[type="text"][name="name"]');
  var inputEmail = document.querySelector('input[type="email"][name="email"]');
  var phoneInput = document.getElementById('phone');
  var messageInput = document.querySelector('textarea[name="message"]');
  var email = inputEmail.value;
  var name = nameInput.value;
  var phone = phoneInput.value;
  var message = messageInput.value;
  var chatId = '719247054';
  var token = '6038539543:AAE14Mrpk7sX6TVW4SEwAG9RGGtjQBgyi-w';
  var text = `Name: ${name}%0A%0AEmail: ${email}%0A%0APhone number: ${phone}%0A%0ASubject: ${document.querySelector('input[type="text"][name="subject"]').value}%0A%0AMessage: ${message}`;

  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

  axios.get(url)
    .then(function (response) {
      alert('Qilgani boshqa ishing yoqmi?');
      nameInput.value = '';
      inputEmail.value = '';
      phoneInput.value = '';
      messageInput.value = '';
      document.querySelector('input[type="text"][name="subject"]').value = '';
    })
    .catch(function (error) {
      alert('Failed to send message. Please try again later.');
      console.log(error);
    });
}
