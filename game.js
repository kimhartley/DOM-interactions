document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {

    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
    
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

function makeHide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  totals ['blue'] = document.getElementsByClassName('blue').length;
  totals ['green'] = document.getElementsByClassName('green').length;
  totals ['invisible'] = document.getElementsByClassName('invisible').length;
 
  displayTotals(totals)
}


function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
