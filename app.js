const API_URL = 'https://jsonplaceholder.typicode.com/users';

const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');

ul.classList.add('bg-gray-200', 'p-4', 'rounded-md');

fetch(API_URL)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      let li = document.createElement('li');
      li.textContent = `${user.name} ${user.email}`;
      li.classList.add('text-gray-700', 'mb-2');
      ul.appendChild(li);
    });

    HTMLResponse.appendChild(ul);
  });
