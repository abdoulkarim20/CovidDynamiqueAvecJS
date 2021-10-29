const Questions=[
                    {
                    "Question":"Quelle est votre etat de sante ?",
                     "option1":"pas mal",
                     "option2":"mal",
                     "option3":"tres mal"
                    },
                    {
                    "Question":"Quelle est votre genre",
                     "option1":"Masculin",
                     "option2":"Feminin",
                     "option3":"Discret"
                    },
                    {
                    "Question":"Quelle est votre temps ?",
                     "option1":"Lundi",
                     "option2":"Mardi",
                     "option3":"Mercredi"
                    }
                ];
                // for(i=0;i<Questions.length;i++){
                //     document.querySelector('#question').innerHTML=Questions[i];
                // }
// console.log(Questions);
//Les questions courants let
let questionCourant=0;
let question_lot=Questions.length;
let caseQuestion=document.getElementById('case-question');
let questioneElemnt=document.getElementById('question');
let text0=document.getElementById('text0');
let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let btnSuivant=document.getElementById('btn-btn-suivant');
let questionResultat=document.getElementById('resultat');
//les compteurs pour maladies
let cptm=0;
let cptnm=0;
let cptf=0;
//Chargeur de questions
function loadQuestion(indexQuestion){
    let qIndex=Questions[indexQuestion];
    questioneElemnt.textContent=(indexQuestion + 1)+'.' +qIndex.Question;
    text0.textContent=qIndex.option1;
    text1.textContent=qIndex.option2;
    text2.textContent=qIndex.option3;

}
function loadNexQuestion(){
    let selectOption=document.querySelector('input[type=radio]:checked');
    //Si une question nes pas selectionner 
    if(!selectOption){
        alert('Veuillez selectionner une response');
        return;
    }
    let answer = selectOption.value;
    if(Questions[questionCourant].answer==option1){
        cptm=cptm+1; 
    }
    selectOption.checked=false;
    questionCourant++;
    if(questionCourant==question_lot-1){
        btnSuivant.textContent ='Finish';
    }
    if(questionCourant==question_lot){
        caseQuestion.style.display='none';
        questionResultat.style.display='';
        questionResultat.textContent="Votre resultat test est" + cptm;
        return;
    }
    loadQuestion(questionCourant);
}
loadQuestion(questionCourant);
console.log(cptm);