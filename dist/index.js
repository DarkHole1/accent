(function() {
  var delay, random;

  window.addEventListener('load', function() {
    var root;
    root = document.getElementById('word');
    return window.addEventListener('click', async function() {
      var accent, el, els, handler, i, j, len, letter, solved, word;
      root.classList.add('hide');
      await delay(500);
      root.innerText = '';
      word = random(words);
      accent = -1;
      solved = false;
      els = [];
      for (i = j = 0, len = word.length; j < len; i = ++j) {
        letter = word[i];
        el = document.createElement('span');
        els.push(el);
        if (letter === letter.toUpperCase()) {
          accent = i;
        }
        el.innerText = letter.toUpperCase();
        handler = function(e) {
          i = els.indexOf(this);
          if (!solved) {
            solved = true;
            e.stopPropagation();
            if (i === accent) {
              return this.classList.add('correct');
            } else {
              this.classList.add('incorrect');
              return els[accent].classList.add('correct');
            }
          }
        };
        el.addEventListener('click', handler);
        root.appendChild(el);
      }
      return root.classList.remove('hide');
    });
  });

  random = function(list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  delay = function(ms) {
    return new Promise(function(res) {
      return setTimeout(res, ms);
    });
  };

}).call(this);
