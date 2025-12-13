const userForm = document.getElementById('user-form');

function eventHandler(submitEvent){
  submitEvent.preventDefault();
  const formData = new FormData(userForm);
  const userEntry = Object.fromEntries(formData);
  fetch('https://week-04-52tf.onrender.com/message',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userEntry}),
  });
}

userForm.addEventListener('submit', eventHandler);

// ====================================================

async function getData(){
  try{
    const response = await fetch('https://week-04-52tf.onrender.com/readMessages');
    if (!response.ok){
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    // for each object within result
    for (let i = result.length-1 ; i >= 0 ; i--){
      // create variable for each name and message
      let name = result[i].name;
      let message = result [i].message;
      // create elements and their attributes
      const nameElement = document.createElement('h3');
      nameElement.innerText = name;
      nameElement.className = "name";
      const messageElement = document.createElement('p');
      messageElement.innerText = message;
      messageElement.className = "message";
      // build elements (append children as required)     
      const messageContainer = document.getElementById('messageBoard');
      messageContainer.appendChild(nameElement);
      messageContainer.appendChild(messageElement);
    }

  } catch (error){
    console.error(error.message);
  }
}

getData();