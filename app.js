let validerTest = document.querySelector("button");
// console.log(validerTest);
validerTest.addEventListener("click",()=>{
    //Je recupere toutes les donnees du formulaire
    let corpsChaud = document.querySelectorAll("input[ name = 'corpschaud']");
    let fievre = document.querySelectorAll("input[ name = 'fievre']");
    let temperature = document.querySelectorAll("input[ name = 'temperature']");
    let cptm=0
    let cptnm=0;
    let cptcg=0;
    for(i=0; i<corpsChaud.length; i++){
        // console.log(corpsChaud);
        if(corpsChaud[i].checked===true){
            leCorpsChaud=corpsChaud[i].value ;
            // console.log(leCorpsChaud);
            if(leCorpsChaud==="Oui"){
                cptm++;
            }else if(leCorpsChaud==="Non"){
                cptnm++;
            }  
        }   
    }
    for(i=0; i<fievre.length; i++){ 
        if(fievre[i].checked===true){
            Lafievre=fievre[i].value ;
            if(Lafievre==="Oui"){
                cptm++;
            }else if(Lafievre==="Non"){
                cptnm++;
            }  
        }   
    }

    for(i=0; i<temperature.length; i++){
        if(temperature[i].checked===true){
            Latemperature=temperature[i].value ;
            if(Latemperature==="inferieure"){
                cptm++;
            }else if(Latemperature==="normale"){
                cptnm++;
            }else{
                cptcg++;
            }
        }   
    }
    // console.log(cptm);
    // console.log(cptnm);
    // console.log(cptcg);

    //Les donnees qui vont etre saisie par le utilisateurs

    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("CorpsChaud", leCorpsChaud);
    localStorage.setItem("fievre", Lafievre);
    localStorage.setItem("temperature", Latemperature);

    // console.log(document.querySelector("#nom"));

    //Affichagedes donner dans la page web
    // document.querySelector("#nom");

    document.querySelector("#lenom").innerHTML=localStorage.getItem("nom");
    document.querySelector("#leprenom").innerHTML=localStorage.getItem("prenom");
    document.querySelector("#lecorpschaud").innerHTML=localStorage.getItem("CorpsChaud");
    document.querySelector("#lafievre").innerHTML=localStorage.getItem("fievre");
    document.querySelector("#latemperature").innerHTML=localStorage.getItem("temperature");

    if(cptnm>cptm && cptcg==0){
        this.StyleSheet.color='orange';
        // alert("Vous ne representer aucun signe de covid");
    }else if(cptm>cptnm && cptcg==0){
        alert("Vous devez vous rendre dans un hopital le plus proche pour vous depister du covid vous avez les signe majeurs de covid");
    }else{
        alert("applez le 1818");
    }
})