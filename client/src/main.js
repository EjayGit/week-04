const userForm = document.getElementById('user-form');

function eventHandler(submitEvent){
  submitEvent.preventDefault();
  const formData = new FormData(userForm);
  const userEntry = Object.fromEntries(formData);
  console.log("Success 1, probably");
  fetch('https://week-04-server.onrender.com/message',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userEntry}),
  });
  console.log("Success 2, probably");
}

userForm.addEventListener('click', eventHandler);

