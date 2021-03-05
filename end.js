const user=document.getElementById('username');
const save=document.getElementById('saveScore');
const res=document.getElementById('finPoints');
const recentScore=localStorage.getItem('recentScore');

//res.innerText=recentScore;

const finScore=JSON.parse(localStorage.getItem("finScore")) || [];

const max_score=5;

console.log(finScore);

res.innerText=recentScore;

user.addEventListener('keyup',() => {
     console.log(user.value);
    saveScore.disabled=!user.value;
})


saveHighScore = e => {
    console.log("clicked");
    e.preventDefault(); // prevent form for taking action (next page)

    const points={
           
        point:recentScore,
        //  point:Math.floor(Math.random()*100),
       
        name: user.value,
     };



//const points={
  //  point:Math.floor(Math.random()*100),
    //name: user.value,
    //};


finScore.push(points);
finScore.sort((a, b) => b.points - a.points);
finScore.splice(5)

    localStorage.setItem("finScore",JSON.stringify(finScore));
   
    console.log(finScore);
   
    // localStorage.clear();    
};