import {apiUrl} from './general.js';

export async function signIn(id) {
	 const authenticate = ({ id, name }) => {
      alert("Welcome " + name);
      localStorage.auth = JSON.stringify(id);
    }
	 const option = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    };
	
	let user;
    // request delete old session
    await fetch(`${apiUrl}login/${id}`, { method: 'delete' });
    // verify user
    let res = await fetch(`${apiUrl}users/${id}`);
    res.ok ? (user = await res.json()) : alert('Authentication fails');
    // login
    res.ok && (res = await fetch(`${apiUrl}login`, option));
    res.ok && authenticate(user);
	return res.ok;
};

export async function signUp(data) {
	const option = {
	  method: 'post',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	};
	
	let user;
	const res = await fetch(apiUrl + 'users', option);
	res.ok ? (user = await res.json()) : alert(`${data.name} is already existed`);

	return {ok: res.ok, user};
};

export async function authenticate(id) {
  //  get from login list
  let res = await fetch(`${apiUrl}login/${id}`);
  // if logged in, get from users
  res.ok && (res = await fetch(`${apiUrl}users/${id}`)); // get full profile
  return res.ok ? (await res.json()):null;
};