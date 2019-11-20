document.getElementById('get-joke').addEventListener('click', getJoke);

function getJoke(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', "https://official-joke-api.appspot.com/random_joke", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);


      let output = '';

      if (response.type === 'general') {
        output = `<li>${response.setup} ${response.punchline}</li>`
      } else {
        output = '<li>Something went wrong</li>'
      }
      document.getElementById('jokes').innerHTML += output;
    }
    
  }

  xhr.send();
  e.preventDefault();
}

document.getElementById('clear-jokes').addEventListener('click', clearJokes);

function clearJokes(e) {
  document.getElementById('jokes').innerHTML = '';
  e.preventDefault();
}