// Pip is visual companionship only: these reactions never change game state.
function pipMarkup(mood) {
  mood = mood || (s.stage === 'end' ? 'farewell' : s.stage === 'plan' ? 'thinking' : 'idle');
  return `<button type="button" class="pip-companion" data-mood="${mood}" data-rest-mood="${mood}" aria-label="Say hello to Pip, your frog travel buddy" title="Hi, Pip!"><span class="pip-sprite" aria-hidden="true"></span><span class="pip-thought" aria-hidden="true">···</span></button>`;
}
function bird(text, mood) {
  return `<div class="bird">${pipMarkup(mood)}<div><strong>Pip, your travel buddy</strong><br>${text}</div></div>`;
}
function pipSetMood(pip, mood) {
  pip.dataset.mood = mood;
}
function pipRest(pip) {
  pipSetMood(pip, pip.matches(':hover, :focus-visible') ? 'curious' : pip.dataset.restMood);
}
function pipReact(mood, duration = 1400, only) {
  const scope = document.querySelector('#modal')?.open ? document.querySelector('#modal') : document;
  const companions = only ? [only] : scope.querySelectorAll('.pip-companion');
  companions.forEach(pip => {
    clearTimeout(pip.pipTimer);
    pip.dataset.reacting = 'true';
    pipSetMood(pip, mood);
    pip.pipTimer = setTimeout(() => {
      delete pip.dataset.reacting;
      if (pip.isConnected) pipRest(pip);
    }, duration);
  });
}
document.addEventListener('pointerover', e => {
  const pip = e.target.closest('.pip-companion');
  if (pip && !pip.contains(e.relatedTarget) && !pip.dataset.reacting) pipSetMood(pip, 'curious');
});
document.addEventListener('pointerout', e => {
  const pip = e.target.closest('.pip-companion');
  if (pip && !pip.contains(e.relatedTarget) && !pip.dataset.reacting) pipSetMood(pip, pip.dataset.restMood);
});
document.addEventListener('focusin', e => {
  if (e.target.matches('.pip-companion') && !e.target.dataset.reacting) pipSetMood(e.target, 'curious');
});
document.addEventListener('focusout', e => {
  if (e.target.matches('.pip-companion') && !e.target.dataset.reacting) pipSetMood(e.target, e.target.dataset.restMood);
});
document.addEventListener('click', e => {
  const pip = e.target.closest('.pip-companion');
  if (pip) pipReact('happy', 1400, pip);
});
