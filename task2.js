// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");
const userCity = document.getElementById("userCity");

getUserButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName === "") {
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      let userFound = false;
      for (const user of users) {
        if (user.name === userName) {
          userCity.textContent = user.address.city;
          userFound = true;
          break;
        }
      }

      if (!userFound) {
        userCity.textContent = "User not found";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
