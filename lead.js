const finPointsList= document.getElementById("finPointsList");
const finScore=JSON.parse(localStorage.getItem('finScore')) || [];

console.log(finScore);

console.log(
finPointsList.innerHTML =finScore.map( s => {
     return `<li class="high-score">${s.name}  -  ${s.point}</li>`;
})
.join(" ")
);