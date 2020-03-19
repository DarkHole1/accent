window.addEventListener 'load', ->
  root = document.getElementById 'word'

  window.addEventListener 'click', ->
    root.classList.add 'hide'
    await delay 500
    root.innerText = ''

    word = random words
    accent = -1
    solved = false
    els = []
    for letter, i in word
      el = document.createElement 'span'
      els.push el
      accent = i if letter is letter.toUpperCase()
      el.innerText = letter.toUpperCase()

      handler = (e) ->
        i = els.indexOf @
        if not solved
          solved = true
          e.stopPropagation()
          if i is accent
            @classList.add 'correct'
          else
            @classList.add 'incorrect'
            els[accent].classList.add 'correct'

      el.addEventListener 'click', handler

      root.appendChild el

    root.classList.remove 'hide'



random = (list) ->
  list[Math.floor Math.random() * list.length]

delay = (ms) ->
  new Promise (res) ->
    setTimeout res, ms
