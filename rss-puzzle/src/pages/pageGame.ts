import '../pages/pageGame.css';

const pageGame = document.createElement('section');
pageGame.classList.add('page-game');

let arrLvls: object[] = [];

function getFile(link: string) {
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      arrLvls = data;
    });
}

getFile('lingleo/data/wordCollectionLevel1.json');

export { pageGame };
