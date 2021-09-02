var readLine = require("readline-sync");


questionOne = {
  question: "In Hera Pheri, what was Paresh Rawal's character called?\n",
  options: ['Raju', 'Shyam', 'Baburao','Kabira'],
  answer: "Baburao",
}

questionTwo = {
  question: "What is the name of Sholay' s iconic villain?\n",
  options:['Kalia','Shakaal','Gabbar','Thakur'],
  answer: "Gabbar",
}

questionThree = {
  question: "Finish the quote from Deewar: \"Mere paas _____.\"\n",
  options:['Baap Hai', 'Paisa Hai', 'Maa Hai', 'iPhone Hai'],
  answer: "Maa Hai",
}

questionFour = {
  question: "What was aliens name in Koi Mil Gaya?\n",
  options:['Jaadu', 'Elon', 'Thanos', 'Eve'],
  answer: "Jaadu",
}

scores = {
  shivam: 4,
  friend: 3,
}

score = 0;

var quizQuestions = [questionOne,questionTwo,questionThree,questionFour];


for(var i=0; i < quizQuestions.length; i++){
  quiz(quizQuestions[i]);    
}

log("*****Scores*****")

log("Shivam : " + scores.shivam);
log("Friend : " + scores.friend);
log("Your Score: " + score);




function quiz(question){
  var ans = readLine.keyInSelect(question.options, question.question);
    if(question.options[ans] === question.answer){
    log('Correct');
    score++;
  }else{
    log('Wrong');
    score--;
  }

  log('-------------');
}


function log(msg){
  console.log(msg);
}

