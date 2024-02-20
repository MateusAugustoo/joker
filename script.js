const contentJoker = document.getElementById('joker');

const PATH_URL = 'https://v2.jokeapi.dev/joke/Programming?type=single&amount=1';

async function generatedJoker() {
  const data = await fetch(PATH_URL).then((e) => e.json());
  console.log(data.joke);
  if(data) {
    contentJoker.innerText = data.joke;
  }
}