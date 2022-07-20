fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(err => console.error('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/6')
  .then(response => response.json())
  .then(charizard => console.log(charizard))
  .catch(err => console.error('Fetch failed!', err));
