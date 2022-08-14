// 
// main.js | Omikuji
// 
// (c) 2022 よね/Yone
// 

const box_num = 3;  // Cardの個数

let playTime = -1;

// ---------- Main ---------- //
$(document).on('DOMContentLoaded', main());

// ---------- Functions ---------- //
function main(){

  // Init play time
  let playTime = localStorage.getItem("omikuji-playTime");
  if(playTime == null){ playTime = 0; }

  $('#playTime span').text(playTime + "回");

  // Init result element and hide
  let ele_result = $('#result');
  ele_result.hide();

  let ele_cards = $('#cards');

  // Init boxes
  for(let i=1; i <= box_num; i++){

    // Make boxes
    ele_cards.append(`
      <div id="box-${i}" class="boxes"></div>
    `);

    // On click any box
    $(`#box-${i}`).on('click', (selector) => {

      // Hide cards and guide text
      ele_cards.hide();
      $('#main span').hide();

      // Init levels
      let levels = [
        "大吉",
        "吉",
        "中吉",
        "小吉",
        "末吉",
        "凶",
        "大凶"
      ];
      result = levels[getRandomInt(levels.length)];

      // Add result element
      ele_result.append(`
        <span>${result}</span>
      `)

      // Show result
      ele_result.fadeIn(1000);

      // Add play time
      playTime++;
      localStorage.setItem('omikuji-playTime', playTime);
      $('#playTime span').text(playTime + "回");
    })
  }
}

// Random int
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
