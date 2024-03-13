import '../components/resultsWindow.css';

const resultsWindow = document.createElement('div');
resultsWindow.classList.add('results-window');

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

function fillPanel(countKnow = 0, countDontKnow = 0) {
  dontKnowText.innerHTML = `I don't know: <span>${countDontKnow}</span>`;
  knowText.innerHTML = `I know: <span>${countKnow}</span>`;
}

export { resultsWindow, btnContinueInResults, fillPanel };
