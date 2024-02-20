const contentJoker = document.getElementById('joker');

const PATH_URL = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=1';

async function generatedJoker() {
  const data = await fetch(PATH_URL).then((e) => e.json());

  if(data) {
    contentJoker.innerText = data.joke;
  }
}