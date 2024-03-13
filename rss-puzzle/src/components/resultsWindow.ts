import '../components/resultsWindow.css';
import '../assets/images/svg/audio.svg';

const resultsWindow = document.createElement('div');
resultsWindow.classList.add('results-window');

const resultAudio = document.createElement('audio');
resultsWindow.append(resultAudio);

const resultsPanel = document.createElement('div');
resultsPanel.classList.add('results-window__panel');
resultsWindow.append(resultsPanel);

const dontKnowText = document.createElement('p');
dontKnowText.classList.add('results-window__panel_text');
resultsPanel.append(dontKnowText);

const dontKnowBox = document.createElement('div');
dontKnowBox.classList.add('results-window__panel__box');
resultsPanel.append(dontKnowBox);

const knowText = document.createElement('p');
knowText.classList.add('results-window__panel_text');
resultsPanel.append(knowText);

const knowBox = document.createElement('div');
knowBox.classList.add('results-window__panel__box');
resultsPanel.append(knowBox);

const btnContinueInResults = document.createElement('button');
btnContinueInResults.textContent = 'Continue';
btnContinueInResults.classList.add('results-window__panel__button');
resultsPanel.append(btnContinueInResults);

function addCountsResult(countKnow = 0, countDontKnow = 0) {
  dontKnowText.innerHTML = `I don't know: <span>${countDontKnow}</span>`;
  knowText.innerHTML = `I know: <span>${countKnow}</span>`;
}

function addSentenceResult(audioSrc: string, text: string, know: boolean) {
  const sentenceAudio = document.createElement('img');
  sentenceAudio.src = 'audio.svg';
  sentenceAudio.classList.add('btn-sound');
  sentenceAudio.dataset.audio = `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${audioSrc}`;

  const sentence = document.createElement('p');
  sentence.classList.add('results-window__panel__box_sentence');
  sentence.textContent = text;
  sentence.prepend(sentenceAudio);

  know ? knowBox.append(sentence) : dontKnowBox.append(sentence);
}

function removeSentenceResult() {
  const sentence = resultsPanel.getElementsByClassName('results-window__panel__box_sentence');
  for (let i = sentence.length - 1; i >= 0; i -= 1) sentence[i].remove();
}

resultsWindow.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  if (currentTarget.classList.contains('btn-sound')) {
    resultAudio.src = `${currentTarget.dataset.audio}`;
    resultAudio.play();
  }
});

export { resultsWindow, btnContinueInResults, addCountsResult, addSentenceResult, removeSentenceResult };
