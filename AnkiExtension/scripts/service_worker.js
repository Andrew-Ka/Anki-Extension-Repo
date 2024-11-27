// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));

//User needs to follow instructions listed:
//https://foosoft.net/projects/anki-connect/#:~:text=no%20longer%20supported.-,Installation,-The%20installation%20process

function invoke(action, version, params={}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('error', () => reject('failed to issue request'));
        xhr.addEventListener('load', () => {
            try {
                const response = JSON.parse(xhr.responseText);
                if (Object.getOwnPropertyNames(response).length != 2) {
                    throw 'response has an unexpected number of fields';
                }
                if (!response.hasOwnProperty('error')) {
                    throw 'response is missing required error field';
                }
                if (!response.hasOwnProperty('result')) {
                    throw 'response is missing required result field';
                }
                if (response.error) {
                    throw response.error;
                }
                resolve(response.result);
            } catch (e) {
                reject(e);
            }
        });

        xhr.open('POST', 'http://127.0.0.1:8765');
        xhr.send(JSON.stringify({action, version, params}));
    });
}
/*
example usage:
await invoke('createDeck', 6, {deck: 'test1'});
const result = await invoke('deckNames', 6);
console.log(`got list of decks: ${result}`);
*/

async function getDecks(){
    let deckNames = await invoke('deckNames', 6);
    //console.log(deckNames);    
    return deckNames;
}

async function writeCard() {
    const frontCardText = document.getElementById('BasicCardFront').innerHTML;
    console.log(frontCardText);
    const backCardText = document.getElementById('BasicCardBack').innerHTML;

    try {
        await invoke('addNote', 6, {note:{deckName:currentDeck, modelName:"Basic", fields:{Front:frontCardText, Back:backCardText}}});
        document.getElementById('BasicCardFront').innerHTML = "";
        document.getElementById('BasicCardBack').innerHTML = "";
    } catch (error) {
        console.log(error);
        if(currentDeck == "None"){
            notifcationAlert("Must pick a Deck for the Card \n (IT NEEDS A HOME 😢)");
        }else if(error == "cannot create note because it is a duplicate"){
            notifcationAlert("Check your card's, I think you already made one like this!🤷‍♂️")
        }
        else{
            notifcationAlert(error);
        }
    }
}



async function main(){
    try{    
        const deckResult = await getDecks();
        //(deckResult == 'failed to issue request');
        
        for(let a of deckResult){
            console.log(a)
        }
        displaydecks(deckResult);
        document.getElementById('placeholderDecks').style.display='none';
    }catch (error){
        window.alert("Anki must be open and the AnkiConnect Extension Installed");
        let stringError = "Must have Anki open. After opening Anki, toggle this window.";
        notifcationAlert(stringError);
        //specific animation
        let notifBar = document.getElementById('notificationBar');
        notifBar.innerHTML = stringError;
        notifBar.style.animation = "notifBarAnimIn 2s linear none";
        notifBar.style.opacity = 1;
        
        /*document.getElementById('notificationBar').style.display = "block";*/
        /*notifBar.style.opacity = 1;*/
        
    }

    /*await writeCard();*/
    
}

var currentDeck = "None";
async function updateCurrentDeck(deckName){
    currentDeck = deckName;
    const footer = document.getElementById('footer');
    footer.textContent = "Current Deck: " + currentDeck;
}

async function displaydecks(deckNames) {
    const deckList = document.getElementById('DeckList');

    let numbOfDecks = deckNames.length;
    console.log("Number of Decks: " + numbOfDecks);
    for(let i=0; i<numbOfDecks; i++){
        const deckLi = document.createElement('li');
        deckLi.textContent = deckNames[i];
        deckLi.addEventListener('click', () => {
            console.log(`Clicked deck: ${deckNames[i]}`);
            updateCurrentDeck(deckNames[i]);
            // Add your desired action here, e.g., show details, redirect, etc.
            //thanks gemini
        });
        deckList.appendChild(deckLi);
    }
    

    /*for(let i=0; i<numbOfDecks; i++){
        if(deckNames[i].includes("::"){
            //we know its a sub-deck
            
        })
    }*/

    /*
    const deckList = document.getElementById('SubDeck');

    for(const deckName of deckNames){
        const li = document.createElement('li');
        li.textContent = deckName;
    }*/
    
}

//general animation
function notifcationAlert(alertString){
    notifBar = document.getElementById('notificationBar');
    notifBar.innerHTML = alertString;
    notifBar.style.animation = "notifBarAnimIn 2s linear none";
    notifBar.style.opacity = 1;
    setTimeout(function (){
        notifBar.style.animation = "notifBarAnimOut 2s linear none";
        notifBar.style.opacity = 0;
    }, 5000);
}






main();

/*deckResult.then(results => {
    console.log(results);
});

for(let a of deckResult){
    console.log(a)
}
*/
let num = 1;
function menuFunction(){
    console.log("deck menu clicked");
    /*document.getElementById('SubDeck').classList.toggle("visible");*/
    if(num == 1){
        document.getElementById('DeckList').style.display = 'none';
        num++;
    }
    let deckListHide = document.getElementById('DeckList').style.display;
    console.log("Menu is ",deckListHide);
    /*document.getElementById('SubDeck').style.display = 'block';*/
    if(deckListHide == 'none'){
        document.getElementById('DeckList').style.display = 'block';
    }else{
        document.getElementById('DeckList').style.display = 'none';
    }
    

    
}

/*
document.getElementById(".dropbtn").addEventListener("click", myFunction);
*/
window.addEventListener('DOMContentLoaded', (event) =>{
    document.getElementById('deckDropBtn').addEventListener("click", menuFunction);
    document.getElementById('submitButton').addEventListener("click", writeCard);
    
}
);


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#deckDropBtn')) {
        document.getElementById('DeckList').style.display = 'none';
        //console.log("clicked");
    }
}

