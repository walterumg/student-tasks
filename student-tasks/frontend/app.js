const API_URL = "https://log1-v9iv.onrender.com";
let currentUser = null;

async function register() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPass').value;
  const res = await fetch(API_URL + '/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  const data = await res.json();
  alert(JSON.stringify(data));
}

async function login() {
  const email = document.getElementById('logEmail').value;
  const password = document.getElementById('logPass').value;
  const res = await fetch(API_URL + '/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.id) {
    currentUser = data;
    document.getElementById('auth').style.display = 'none';
    document.getElementById('tasks').style.display = 'block';
    loadTasks();
  } else {
    alert(data.error);
  }
}

async function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDesc').value;
  const res = await fetch(API_URL + '/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: currentUser.id, title, description })
  });
  await res.json();
  loadTasks();
}

async function loadTasks() {
  const res = await fetch(API_URL + '/tasks/' + currentUser.id);
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title + ' - ' + task.status;
    li.onclick = () => updateStatus(task.id);
    list.appendChild(li);
  });
}

async function updateStatus(id) {
  await fetch(API_URL + '/tasks/' + id + '/status', { method: 'PUT' });
  loadTasks();
}
