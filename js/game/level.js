export default (level) => {
  return `<div class="quest">
  <p class="text">${level.text}</p>
  <input type="text">
  <ul class="answers">
    ${level.answers.map((it) =>
    `<li class="answer">${it.action.toUpperCase()}. ${it.title}</li>`).join(``)}
  </ul>  
</div>`;
};
