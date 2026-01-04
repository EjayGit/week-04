const userForm = document.getElementById('user-form');

function timerFunc(){
  location.reload();
};

async function deleteHandler(id){
  try{
    const response = await fetch(`http://localhost:8080/${id}`, {
    //const response = await fetch(`https://week-04-server.onrender.com/${id}`, {
      method: "DELETE",
    });
  } catch (error){
    console.error(`Error main.js line 10: ${error.message}`);
  }
}

function likeHandler(id){
  try {
    let likeData = {
      id: id,
      value: 1
    };
    console.log(likeData);
    fetch(`http://localhost:8080/likes`,{
    // fetch(`https://week-04-server.onrender.com/likes`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likeData}),
    });
  } catch(error){
    console.error(`Error main.js ln 30: ${error.message}`);
  }
}

async function getData(){
  try{
    const response = await fetch('http://localhost:8080/readMessages');
    // const response = await fetch('https://week-04-server.onrender.com/readMessages');
    if (!response.ok){
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    // for each object within result
    for (let i = result.length-1 ; i >= 0 ; i--){
      // create variable for each name and message
      let id = result[i].id;
      let name = result[i].name;
      let message = result[i].message;
      let likes = result[i].likes;
      // create elements and their attributes
      const nameElement = document.createElement('h3');
      nameElement.innerText = name;
      nameElement.className = "name";
      const messageElement = document.createElement('p');
      messageElement.innerText = message;
      messageElement.className = "message";
      const delBtn = document.createElement('button');
      delBtn.innerText = 'delete';
      delBtn.className = 'delBtn';
      delBtn.addEventListener('click', () =>{
        deleteHandler(id);
        setTimeout(timerFunc, 3000);
      });
      const likeBtn = document.createElement('button');
      likeBtn.innerText = likes;
      likeBtn.className = 'likeBtn';
      likeBtn.addEventListener('click', () =>{
        likeHandler(id);
        setTimeout(timerFunc, 3000);
      });
      // build elements (append children as required)     
      const messageContainer = document.getElementById('messageBoard');
      messageContainer.appendChild(nameElement);
      messageContainer.appendChild(messageElement);
      messageContainer.appendChild(delBtn);
      messageContainer.appendChild(likeBtn);
    }

  } catch (error){
    console.error(`Error Message line 47: ${error.message}`);
  }
}

getData();

//======================================================

function eventHandler(submitEvent){
  try{
    submitEvent.preventDefault();
    const formData = new FormData(userForm);
    const userEntry = Object.fromEntries(formData);
    fetch('http://localhost:8080/message',{
    //fetch('https://week-04-server.onrender.com/message',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userEntry}),
    });
    setTimeout(timerFunc, 3000);
  } catch(error){
    console.error(error.message);
  }
}

userForm.addEventListener('submit', eventHandler);


//=================================================
//Audio
const audioControl = document.getElementById('audio');
audioControl.volume = 0.05;
audioControl.play();