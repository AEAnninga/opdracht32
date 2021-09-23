// Deel 1:
// Maak een event listener vast aan de buttons:
const buttonBig5 = document.getElementsByClassName('big-five-button');
const animalList = document.querySelector('#spotted-animals-list');
// console.log(buttonBig5);
// console.log(animalList);

const createListItem = (index) => {
    // console.log("Wordt deze functie gecalled?");
    let animalListUpdate = document.querySelectorAll('#spotted-animals-list li');
    // console.log(animalListUpdate);
    let animalName = Array.from(buttonBig5)[index].innerHTML;
    console.log(animalName);
    const checkIfAnimalInList = element => element.innerHTML == animalName;
    if (Array.from(animalListUpdate).some(checkIfAnimalInList) === false){
    let listItem = document.createElement('li');
    listItem.innerHTML = animalName;
    animalList.appendChild(listItem);
    listItem.classList.add('spotted-animals-list-item');
    } else {
        alert("Deze staat al in de lijst!");
    }  
}

/*
Wanneer je een argument meegeeft aan de functie in de addEventListener:
createListItem(0), 0 is het argument(parameter), 
dan wordt de functie gelijk getriggered, en lijkt het alsof je al hebt geklikt.
Waarom dit gebeurt weet ik (nog) niet!
Maar om dit te voorkomen: plak .bind(event, argument) aan de functie vast:
Dus in het eerste geval wordt dit:
createListItem.bind('click', 0)
Nu wordt de functie niet gelijk uitgevoerd, 
maar wordt wel het argument (0) doorgegeven aan de functie wanneer je klikt.
En treedt pas na een klik de functie in werking met het argument 0
Dit argument is nodig om de juiste naam (listitem) te selecteren
0 is gekoppeld aan de eerste li (lion)
1 is gekoppeld aan de tweede li (leopard)
etc
Op deze manier kan er 1 functie worden gebruikt voor 5 eventListeners
en heeft elke eventListener een verschillende output
*/
Array.from(buttonBig5)[0].addEventListener('click', createListItem.bind('click', 0));
Array.from(buttonBig5)[1].addEventListener('click', createListItem.bind('click', 1));
Array.from(buttonBig5)[2].addEventListener('click', createListItem.bind('click', 2));
Array.from(buttonBig5)[3].addEventListener('click', createListItem.bind('click', 3));
Array.from(buttonBig5)[4].addEventListener('click', createListItem.bind('click', 4));

// deel 2
const buttonRemoveFirstItem = document.querySelector('#remove-first-item-button');
// console.log(buttonRemoveFirstItem);

const removeFirstItem = () => {
    const firstListItem = document.querySelector('#spotted-animals-list li');
    animalList.removeChild(firstListItem); // animalList is de parent, al eerder geselecteerd
}
buttonRemoveFirstItem.addEventListener('click', removeFirstItem);

//deel 3
const buttonRemoveAllItems = document.querySelector('#remove-all-button');

const removeAllItems = () => {
    const allItems = document.querySelectorAll('.spotted-animals-list-item');
    console.log(allItems);
    allItems.forEach( item => {
        item.parentElement.removeChild(item);
    })
}
buttonRemoveAllItems.addEventListener('click', removeAllItems);