import './emoji.sass';

const emoji = document.createElement('div');
emoji.classList.add('emoji');

const emojiBtn = document.createElement('div');
emojiBtn.classList.add('emoji-btn');
emojiBtn.innerHTML = '&#128578;';

const emojiBox = document.createElement('div');
emojiBox.classList.add('emoji-box');
emojiBox.innerHTML = `
  <span class="emoji-box__item">&#128512;</span>
  <span class="emoji-box__item">&#128513;</span>
  <span class="emoji-box__item">&#128514;</span>
  <span class="emoji-box__item">&#128515;</span>
  <span class="emoji-box__item">&#128516;</span>
  <span class="emoji-box__item">&#128517;</span>
  <span class="emoji-box__item">&#128518;</span>
  <span class="emoji-box__item">&#128519;</span>
  <span class="emoji-box__item">&#128520;</span>
  <span class="emoji-box__item">&#128521;</span>
  <span class="emoji-box__item">&#128522;</span>
  <span class="emoji-box__item">&#128523;</span>
  <span class="emoji-box__item">&#128524;</span>
  <span class="emoji-box__item">&#128525;</span>
  <span class="emoji-box__item">&#128526;</span>
  <span class="emoji-box__item">&#128527;</span>
  <span class="emoji-box__item">&#128528;</span>
  <span class="emoji-box__item">&#128529;</span>
  <span class="emoji-box__item">&#128530;</span>
  <span class="emoji-box__item">&#128531;</span>
  <span class="emoji-box__item">&#128532;</span>
  <span class="emoji-box__item">&#128533;</span>
  <span class="emoji-box__item">&#128534;</span>
  <span class="emoji-box__item">&#128535;</span>
  <span class="emoji-box__item">&#128536;</span>
  <span class="emoji-box__item">&#128537;</span>
  <span class="emoji-box__item">&#128538;</span>
  <span class="emoji-box__item">&#128539;</span>
  <span class="emoji-box__item">&#128540;</span>
  <span class="emoji-box__item">&#128541;</span>
  <span class="emoji-box__item">&#128542;</span>
  <span class="emoji-box__item">&#128543;</span>
  <span class="emoji-box__item">&#128544;</span>
  <span class="emoji-box__item">&#128545;</span>
  <span class="emoji-box__item">&#128546;</span>
  <span class="emoji-box__item">&#128547;</span>
  <span class="emoji-box__item">&#128548;</span>
  <span class="emoji-box__item">&#128549;</span>
  <span class="emoji-box__item">&#128550;</span>
  <span class="emoji-box__item">&#128551;</span>
  <span class="emoji-box__item">&#128552;</span>
  <span class="emoji-box__item">&#128553;</span>
  <span class="emoji-box__item">&#128554;</span>
  <span class="emoji-box__item">&#128555;</span>
  <span class="emoji-box__item">&#128556;</span>
  <span class="emoji-box__item">&#128557;</span>
  <span class="emoji-box__item">&#128558;</span>
  <span class="emoji-box__item">&#128559;</span>
  <span class="emoji-box__item">&#128560;</span>
  <span class="emoji-box__item">&#128561;</span>
  <span class="emoji-box__item">&#129297;</span>
  <span class="emoji-box__item">&#129398;</span>
`;

emoji.append(emojiBtn, emojiBox);

emojiBtn.addEventListener('mouseover', () => {
  emojiBox.classList.toggle('emoji-box_show');
});

emojiBtn.addEventListener('click', () => {
  emojiBox.classList.toggle('emoji-box_show');
});

emojiBox.addEventListener('click', () => {
  emojiBox.classList.remove('emoji-box_show');
});

export { emoji, emojiBox };
