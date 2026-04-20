/* ============================================================
   Japanese Word Practice – Main Application Logic
   ============================================================ */

// ── State ─────────────────────────────────────────────────────
const state = {
  level:        'N5',
  quizMode:     'mixed',      // 'mixed' | 'jp-en' | 'en-jp'
  words:        [],           // all words for current level
  sentences:    {},           // { word_id: { present_pos, present_neg, past_pos, past_neg } }
  selected:     new Set(),    // word IDs the user marked as learned
  filterCat:    'all',        // category filter on selection screen
  searchTerm:   '',

  // quiz runtime
  quiz: {
    queue:     [],
    current:   0,
    correct:   0,
    wrong:     0,
    answered:  false,
    direction: null,          // 'jp-en' | 'en-jp' for current question
  }
};

const TENSE_LABELS = {
  present_pos: 'Present – Affirmative',
  present_neg: 'Present – Negative',
  past_pos:    'Past – Affirmative',
  past_neg:    'Past – Negative',
};

// ── Helpers ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const shuffle = arr => arr.slice().sort(() => Math.random() - .5);

function saveState() {
  localStorage.setItem(`jp_selected_${state.level}`, JSON.stringify([...state.selected]));
  localStorage.setItem(`jp_quizMode`, state.quizMode);
  localStorage.setItem(`jp_level`, state.level);
}

function loadState() {
  const saved = localStorage.getItem(`jp_selected_${state.level}`);
  if (saved) state.selected = new Set(JSON.parse(saved));
  const mode = localStorage.getItem('jp_quizMode');
  if (mode) state.quizMode = mode;
  const lvl = localStorage.getItem('jp_level');
  if (lvl) state.level = lvl;
}

function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $(`view-${name}`).classList.add('active');
}

// ── Data loading ──────────────────────────────────────────────
// Data is loaded via <script> tags (no fetch needed — works with file://)
// Available globals: N5_WORDS_DATA, SENTENCES_DATA
// Add N4_WORDS_DATA etc. in data/n4_words.js when ready.

const WORD_DATA_MAP = {
  N5: () => typeof N5_WORDS_DATA !== 'undefined' ? N5_WORDS_DATA : null,
  // N4: () => typeof N4_WORDS_DATA !== 'undefined' ? N4_WORDS_DATA : null,
};

function loadData() {
  const getter = WORD_DATA_MAP[state.level];
  const wData  = getter ? getter() : null;

  if (!wData) {
    showToast(`No data found for level ${state.level}`);
    return;
  }

  state.words = wData.words;

  // Index sentences by word_id
  state.sentences = {};
  if (typeof SENTENCES_DATA !== 'undefined') {
    SENTENCES_DATA.sentences.forEach(entry => {
      state.sentences[entry.word_id] = entry.sentences;
    });
  }

  loadState();
  updateLevelSelect();
  renderWordGrid();
  updateStartBtn();
}

// ── Top bar controls ──────────────────────────────────────────
function updateLevelSelect() {
  $('level-select').value = state.level;
}

$('level-select').addEventListener('change', function() {
  state.level = this.value;
  state.selected.clear();
  loadData();
});

$('mode-select').addEventListener('change', function() {
  state.quizMode = this.value;
  saveState();
});

$('btn-word-select').addEventListener('click', () => {
  renderWordGrid();
  showView('select');
});

$('btn-start-quiz').addEventListener('click', startQuiz);

// ── Word Selection View ────────────────────────────────────────
function renderWordGrid() {
  const grid = $('word-grid');
  grid.innerHTML = '';

  let words = state.words;

  // Category filter
  if (state.filterCat !== 'all') {
    words = words.filter(w => w.category === state.filterCat);
  }

  // Search filter
  if (state.searchTerm) {
    const q = state.searchTerm.toLowerCase();
    words = words.filter(w =>
      w.kanji.includes(q) ||
      w.reading.includes(q) ||
      w.romaji.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q)
    );
  }

  $('select-count').textContent = `${state.selected.size} learned / ${state.words.length} total`;

  words.forEach(word => {
    const card = document.createElement('div');
    card.className = 'word-card' + (state.selected.has(word.id) ? ' selected' : '');
    card.innerHTML = `
      <div class="wc-kanji">${word.kanji}</div>
      <div class="wc-reading">${word.reading}</div>
      <div class="wc-romaji">${word.romaji}</div>
      <div class="wc-meaning">${word.meaning}</div>
      <span class="wc-pos">${word.pos}</span>
    `;
    card.addEventListener('click', () => toggleWord(word.id, card));
    grid.appendChild(card);
  });
}

function toggleWord(id, card) {
  if (state.selected.has(id)) {
    state.selected.delete(id);
    card.classList.remove('selected');
  } else {
    state.selected.add(id);
    card.classList.add('selected');
  }
  $('select-count').textContent = `${state.selected.size} learned / ${state.words.length} total`;
  saveState();
  updateStartBtn();
}

function updateStartBtn() {
  $('btn-start-quiz').disabled = state.selected.size < 2;
  $('btn-start-quiz').title = state.selected.size < 2 ? 'Select at least 2 learned words' : '';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    state.filterCat = this.dataset.cat;
    renderWordGrid();
  });
});

// Search
$('search-box').addEventListener('input', function() {
  state.searchTerm = this.value.trim();
  renderWordGrid();
});

// Select All / Deselect All
$('btn-select-all').addEventListener('click', () => {
  state.words.forEach(w => state.selected.add(w.id));
  saveState();
  updateStartBtn();
  renderWordGrid();
  showToast(`All ${state.words.length} words marked as learned`);
});

$('btn-deselect-all').addEventListener('click', () => {
  state.selected.clear();
  saveState();
  updateStartBtn();
  renderWordGrid();
  showToast('Selection cleared');
});

$('btn-back-from-select').addEventListener('click', () => showView('quiz'));

// ── Quiz ──────────────────────────────────────────────────────
function startQuiz() {
  const selected = state.words.filter(w => state.selected.has(w.id));
  if (selected.length < 2) { showToast('Select at least 2 words first!'); return; }

  state.quiz.queue    = shuffle(selected);
  state.quiz.current  = 0;
  state.quiz.correct  = 0;
  state.quiz.wrong    = 0;
  state.quiz.answered = false;

  showView('quiz');
  renderQuestion();
}

function resolveDirection() {
  if (state.quizMode === 'mixed') {
    return Math.random() < .5 ? 'jp-en' : 'en-jp';
  }
  return state.quizMode;
}

function renderQuestion() {
  const q = state.quiz;
  const word = q.queue[q.current];
  q.direction = resolveDirection();
  q.answered  = false;

  // Progress
  const pct = (q.current / q.queue.length) * 100;
  $('progress-bar-fill').style.width = pct + '%';
  $('progress-label').textContent    = `${q.current + 1} / ${q.queue.length}`;

  // Score
  $('score-correct').textContent = `✓ ${q.correct}`;
  $('score-wrong').textContent   = `✗ ${q.wrong}`;

  // Mode badge
  $('quiz-mode-badge').textContent = q.direction === 'jp-en' ? 'Japanese → English' : 'English → Japanese';

  // Question card
  if (q.direction === 'jp-en') {
    $('q-main').textContent    = word.kanji;
    $('q-reading').textContent = word.reading;
    $('q-romaji').textContent  = word.romaji;
    $('q-pos').textContent     = word.pos;
  } else {
    $('q-main').textContent    = word.meaning;
    $('q-reading').textContent = '';
    $('q-romaji').textContent  = '';
    $('q-pos').textContent     = word.pos;
  }

  // Answers – pick 3 wrong distractors
  const pool        = state.words.filter(w => w.id !== word.id);
  const distractors = shuffle(pool).slice(0, 3);
  const options     = shuffle([word, ...distractors]);

  const grid = $('answers-grid');
  grid.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    if (q.direction === 'jp-en') {
      btn.textContent = opt.meaning;
    } else {
      btn.innerHTML = `<span style="font-size:1.1rem;font-weight:700">${opt.kanji}</span><br>
                       <span style="font-size:.75rem;color:#7480a0">${opt.reading} · ${opt.romaji}</span>`;
    }
    btn.addEventListener('click', () => handleAnswer(btn, opt.id === word.id, word));
    grid.appendChild(btn);
  });

  // Feedback & next
  $('feedback-msg').textContent = '';
  $('feedback-msg').className   = 'feedback-msg';
  $('btn-next').style.display   = 'none';

  // Sentences panel
  renderSentences(word);
}

function handleAnswer(btn, isCorrect, word) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  // Reveal all buttons
  const allBtns = document.querySelectorAll('.answer-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    // Find correct one by checking text vs word meaning/kanji
    const matchesCorrect = state.quiz.direction === 'jp-en'
      ? b.textContent === word.meaning
      : b.querySelector('span')?.textContent === word.kanji;
    if (matchesCorrect) b.classList.add('correct-ans');
  });

  if (isCorrect) {
    btn.classList.add('correct-ans');
    state.quiz.correct++;
    $('score-correct').textContent = `✓ ${state.quiz.correct}`;
    $('feedback-msg').textContent  = '正解！Correct!';
    $('feedback-msg').className    = 'feedback-msg correct';
  } else {
    btn.classList.add('wrong-ans');
    state.quiz.wrong++;
    $('score-wrong').textContent  = `✗ ${state.quiz.wrong}`;
    $('feedback-msg').textContent = `Wrong – ${state.quiz.direction === 'jp-en' ? word.meaning : word.kanji + '（' + word.reading + '）'}`;
    $('feedback-msg').className   = 'feedback-msg wrong';
  }

  $('btn-next').style.display = 'inline-block';
}

$('btn-next').addEventListener('click', () => {
  state.quiz.current++;
  if (state.quiz.current >= state.quiz.queue.length) {
    showResult();
  } else {
    renderQuestion();
  }
});

$('btn-restart-quiz').addEventListener('click', startQuiz);
$('btn-quit-quiz').addEventListener('click', () => showView('select'));

// ── Sentences panel ───────────────────────────────────────────
function renderSentences(word) {
  const banner = $('current-word-banner');
  banner.querySelector('.banner-kanji').textContent   = word.kanji;
  banner.querySelector('.banner-reading').textContent = `${word.reading}  ·  ${word.romaji}`;
  banner.querySelector('.banner-meaning').textContent = word.meaning;

  const container = $('sentences-container');
  container.innerHTML = '';

  const data = state.sentences[word.id];
  if (!data) {
    container.innerHTML = `<p class="no-sentences">No example sentences yet for this word.<br>
      Add them in <code>data/sentences.json</code> using word_id <strong>${word.id}</strong>.</p>`;
    return;
  }

  Object.entries(data).forEach(([key, s]) => {
    const block = document.createElement('div');
    block.className = 'sentence-block';
    block.innerHTML = `
      <div class="sentence-tense ${key}">${TENSE_LABELS[key] || key}</div>
      <div class="sentence-jp">${s.japanese}</div>
      <div class="sentence-romaji">${s.romaji}</div>
      <div class="sentence-en">${s.english}</div>
    `;
    container.appendChild(block);
  });
}

// ── Result screen ─────────────────────────────────────────────
function showResult() {
  const q   = state.quiz;
  const tot = q.queue.length;
  const pct = Math.round((q.correct / tot) * 100);

  $('result-score').textContent  = `${pct}%`;
  $('result-detail').textContent = `${q.correct} correct · ${q.wrong} wrong · ${tot} total`;

  let emoji = pct >= 90 ? '🏆 Excellent!' : pct >= 70 ? '👍 Good job!' : pct >= 50 ? '📚 Keep studying!' : '💪 Don\'t give up!';
  $('result-card').querySelector('h2').textContent = emoji;

  showView('result');
}

$('btn-result-retry').addEventListener('click', startQuiz);
$('btn-result-select').addEventListener('click', () => {
  renderWordGrid();
  showView('select');
});

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('jp_quizMode');
  if (savedMode) { state.quizMode = savedMode; $('mode-select').value = savedMode; }
  const savedLevel = localStorage.getItem('jp_level');
  if (savedLevel) { state.level = savedLevel; $('level-select').value = savedLevel; }

  loadData();
  showView('select');
});
