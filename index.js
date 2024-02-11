const username = 'user'
const password = 'password'
if(username === 'user1' && password === 'password1'){
  console.log('Hi user1');
}
else if(username === 'user1' && password !== 'password1'){
  console.log('check password');
}
else if(username === 'user1' && password ==='password1'){
  console.log('you are good to go');
}
else if(password === 'password1' && username !== 'user1'){
  console.log('check username');
}
else if(username !== 'user1' && password !== 'password1'){
  console.log('wrong credentials');
}