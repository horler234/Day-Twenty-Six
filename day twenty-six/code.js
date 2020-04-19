document.getElementById('kaishi').addEventListener("click", function() {
  document.getElementById('quesRes').style.display = 'block';
  document.getElementById('choices').style.display = 'block';
  document.getElementById('message').style.display = 'block';
  document.getElementById('result').style.display = 'block';
  document.getElementById('next').style.display = 'block';
  document.getElementById('kaishi').innerHTML = 'Restart';
  var quiz = [
    {
      "question": "How old was Uchiha Itachi when he joined the ANBU Forces?",
      "choice": ["14", "13", "16", "18"],
      "answer": 2
    },

    {
      "question": "Who founded Akatsuki?",
      "choice": ["Madara", "Nagato", "Obito", "Minato"],
      "answer": 1
    },

    {
      "question": "What is Asta\'s big sword called?",
      "choice": ["Mjolnir", "Soothsayer", "Thunderbolt", "Demon Slayer"],
      "answer": 3
    },

    {
      "question": "What\'s Naruto\'s father\'s last name?",
      "choice": ["Namikaze", "Uzumaki", "Sarutobi", "Senju"],
      "answer": 0
    },

    {
      "question": "Yuno has a wind spirit, what\'s its name?",
      "choice": ["Sylph", "Salamander", "Kurama", "Merlin"],
      "answer": 0
    },

    {
      "question": "Who did Tanjiro first fight to defend his sister?",
      "choice": ["Kosuke", "Giyu", "Naruto", "Tunde"],
      "answer": 1
    },

    {
      "question": "Who was the sixth Hokage but died before inauguration?",
      "choice": ["Neji", "Shikaku", "Danzo", "Tsunade"],
      "answer": 2
    },

    {
      "question": "What\'s the name of the Black Bull\'s captain?",
      "choice": ["Silva", "Yami", "Finral", "Crystal"],
      "answer": 1
    },

    {
      "question": "According to the anime, Naruto, who is the father of Ninshu?",
      "choice": ["Kaguya", "Indra", "Ashura", "Hagoromo"],
      "answer": 3
    },

    {
      "question": "What\'s the Clover kingdom rival?",
      "choice": ["Diamond", "Spade", "Hearts", "Oshodi"],
      "answer": 0
    },

    {
      "question": "Who did Obito have a crush on?",
      "choice": ["Tsunade", "Rin", "Sakura", "Kurenai"],
      "answer": 1
    },

    {
      "question": "What do you have to do with a Pokemon?",
      "choice": ["Snatch \'em all!", "Fetch \'em all!", "Catch \'em all!", "Hit like and subscribe"],
      "answer": 2
    },

    {
      "question": "Which of these isn\'t a type of Pokemon?",
      "choice": ["Water", "Grass", "Poison", "Rubber"],
      "answer": 3
    },

    {
      "question": "Fill in the blank...  Dragon_ _ _ _Z",
      "choice": ["Beach", "Ball", "Mech", "Film"],
      "answer": 1
    },

    {
      "question": "What does Asta refer to as his magic?",
      "choice": ["Not giving up", "Confidence", "Bravery", "Magic Wand"],
      "answer": 0
    },
  ];



  // var choose = [];
  var randomQues = Math.floor(Math.random() * 15);
  var endQuiz = false;
  var point = 0;
  var numQues = 0;

  showQuestion();

  var message = document.getElementById('message');


  document.getElementById('next').addEventListener("click", function() {
    if (!endQuiz) {
      var checkRadio = document.querySelector('input[type=radio]:checked');

      if (checkRadio === null) {
        alert('Choose an option');
      } else {
        if (parseInt(checkRadio.value) === quiz[randomQues].answer) {
          point++;
        }

        randomQues = Math.floor(Math.random() * 10);
        numQues++;
        console.log(numQues);
        if (numQues < 5) {
          showQuestion();
        } else {
          document.getElementById('next').value = 'Play Again';
          numQues = 0;
          console.log(point);
          endQuiz = true;
          // document.getElementById('next').style.display = 'none';
          document.getElementById('quesRes').style.display = 'none';
          document.getElementById('choices').style.display = 'none';
          document.getElementById('result').innerHTML = 'You got: ' + point + ' out of 5';
          document.getElementById('result').style.display = 'block';
          document.getElementById('kaishi').style.display = 'none';
        }
      }
    } else {
      endQuiz = false;
      document.getElementById('next').value = 'Next';
      document.getElementById('quesRes').style.display = 'block';
      document.getElementById('choices').style.display = 'block';
      document.getElementById('kaishi').style.display = 'block';
      point = 0;
      reset();
      showQuestion();
      hideScore();

    }
  });

  function showQuestion() {
    var question = quiz[randomQues].question;
    var questionHTML = document.getElementById('quesRes');
    var choicelist = document.getElementById('choices');
    var numChoices = quiz[randomQues].choice.length;

    questionHTML.innerHTML = question;
    choicelist.innerHTML = '';

    var userChoice;
    for (var i = 0; i < numChoices; i++) {
      choice = quiz[randomQues].choice[i];
      var li = document.createElement('li');
      li.innerHTML = '<li><div class="radio"><input class="radioclick" type="radio" value="' + i + '" name="dynradio" /></div>' + '<div class="options">' + choice + '</div>' + '</li>';
      choicelist.appendChild(li);
    }
  }
});





function reset() {
  point = 0;
  hideScore();
}

function showScore() {
  var point;
  document.getElementById('result').innerHTML = point;
  document.getElementById('result').style.display = 'block';


}

function hideScore() {
  document.getElementById('result').style.display = 'none';
}

function begin() {
  document.getElementById('quesRes').style.display = 'none';
  document.getElementById('choices').style.display = 'none';
  document.getElementById('message').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('next').style.display = 'none';
}

begin();
