import '../components/resultsWindow.css';

const resultsWindow = document.createElement('div');
resultsWindow.classList.add('results-window');

const resultsPanel = document.createElement('div');
resultsPanel.classList.add('results-window__panel');
resultsWindow.append(resultsPanel);

const btnContinueInResults = document.createElement('button');
btnContinueInResults.textContent = 'Continue';
btnContinueInResults.classList.add('results-window__panel__button');
resultsPanel.append(btnContinueInResults);

export { resultsWindow, btnContinueInResults };
