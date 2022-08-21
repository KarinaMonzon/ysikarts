const btnUp = document.getElementById('arrow-up')

function abrir(){
       window.scroll({
        top:0,
        behavior: 'smooth'
    })
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_by48zaa';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      window.location.href ='index.html';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
