console.log("hi aadrika");
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-opt'));
const progbarTxt=document.getElementById('progressText');
const pointTxt=document.getElementById('points');


let curr_ques = {};
let acc_ans= false;
let points = 0;
let counter = 0;
let aval_ques = [];

let questions = [
    {
        "question": "What is the childhood toy that is nailed to a plank of wood to make the 'Geller Cup'?",
        "choice1": "A troll doll",
        "choice2": "A G.I. Joe",
        "choice3": "A Stretch Armstrong",
        "choice4": "A Barbie",
        "answer": "1",
        
    },
    {
        "question":"How many sisters does Joey have?",
        "choice1": "Five",
        "choice2": "Six",
        "choice3": "Seven",
        "choice4": "Two",
        "answer": "3"
    },
    {
        "question": "Where does Phoebe's boyfriend David have to move for work?",
        "choice1": "Kiev",
        "choice2": "Moscow",
        "choice3": "Tulsa",
        "choice4": "Minsk",
        "answer": "4"
    },
    {
        "question": "What is the name of the woman Ross goes home with in 'The One Where Ross and Rachel Take a Break'?",
        "choice1": "Mindy",
        "choice2": "Chloe",
        "choice3": "Julia",
        "choice4": "Victoria",
        "answer": "2"
    
    },
   
    {
        "question": "Which soap opera does Gunther tell Joey he used to act in before working at Central Perk?",
        "choice1": "All my Children",
        "choice2": "Days of Life",
        "choice3": "Another World",
        "choice4": "Mac & Cheese",
        "answer": "1"
    },

    {
        "question": "In 'The One Where Joey Moves Out', what does Joey do to start his argument with Chandler, which ends up with him moving out of their apartment?",
        "choice1": "He licks a spoon and then puts it back in the drawer",
        "choice2": "He drinks juice straight from the carton",
        "choice3": "He breaks the foosball table",
        "choice4": "Breaks the TV Set",
        "answer": "1"
    },

    {
        "question": " According to Chandler, back in college when Ross fell in love with Carol, he bought her a ridiculously expensive crystal what?",
        "choice1": "Penguin",
        "choice2": "Frog",
        "choice3": "Swan",
        "choice4": "Duck",
        "answer": "4"
    },

    {
        "question": " In 'The One With the Jellyfish', how many pages (front and back) is the letter Rachel writes to Ross (and he falls asleep reading)?",
        "choice1": "18",
        "choice2": "23",
        "choice3": "30",
        "choice4": "24",
        "answer": "1"
    },

    {
        "question": "Can you name this character, who was Rachel's boss and briefly dated Chandler?",
        "choice1": "Joanna",
        "choice2": "Janice",
        "choice3": "Julia",
        "choice4": "Jamie",
        "answer": "1"
    },

    {
        "question": "What big announcement is made when all of the friends interrupt Chandler's bath in 'The One Where Chandler Takes a Bath'?",
        "choice1": "Joey and Rachel have started seeing each other",
        "choice2": "Ross and Rachel 's baby is going to be a girl",
        "choice3": "Ross and Rachel are having a baby",
        "choice4": "Phoebe and Mike are getting married",
        "answer": "2"
    }
];

//CONSTANTS
const correct_ans = 10;
const max_ques = 10;

startQuiz = () => {
    counter = 0;
    points= 0;
    aval_ques= [...questions];
    getNewQues();

};

getNewQues = () => {
    if (aval_ques.length === 0 || counter >= max_ques) {
        //go to the end page

        localStorage.setItem('recentScore',points);       
        return window.location.assign("end.html");
    }
    counter++;
      
    progbarTxt.innerText="Question : " +counter + "/" +max_ques;
     
    //OR 

    //  progbarTxt.innerText=Question$(counter)/$(max_ques); 
    
    console.log((counter / max_ques) *100);
    
  // progressBarFull.style.width=`${(counter/max_ques )*100}%`; 

    progressBarFull.style.width = `${(counter / max_ques) * 100}%`; 
 
 const val = Math.floor(Math.random() * aval_ques.length);
 
    curr_ques = aval_ques[val];
    question.innerText = curr_ques.question;
    console.log(aval_ques)

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = curr_ques['choice' + number];
    });

    aval_ques.splice(val, 1); //remove ques
    acc_ans = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acc_ans) return;

        acc_ans = false;
        const sc = e.target;
        const sa = sc.dataset['number'];
        
         const ci = sa == curr_ques.answer ? 'correct' : 'incorrect';
         
         console.log(ci);
         
        if(ci == "correct")
        {
            plusScore(correct_ans);
        }

         sc.parentElement.classList.add(ci);
         
         setTimeout ( () => {
            sc.parentElement.classList.remove(ci);
            getNewQues();
         
        },1000);
       // getNewQues();
    });
});

plusScore = num => 
{
    points += num;
    pointTxt.innerText=points;
};

startQuiz();