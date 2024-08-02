/* Scaletta Mentale
1. Generare i numeri da 1 a 100
2. Stampare i numeri in console
3. Assegnare le parole ai multipili
    3.1. Multipili di 3 = Fizz
    3.2. Multipli di 5 = Buzz
    3.3. Multipli di 3 e 5 = FizzBuzz
4. Stamparli in pagina
*/

// # Fase di raccolta dati
//Creo variabile per il numero
let number;

//Recupero elemento nel DOM
const numberTable = document.getElementById('number-table');
console.log(numberTable);

//Creazione variabile per lista
const list = document.createElement('ul');

// # Fase di elaborazione dati
//Generiamo i numeri da 1 a 100
for(let i = 1; i < 101; i++){
    number = i;
    const listItem = document.createElement('li');
    
    //Assegnamo multipli e colori di sfondo
    if (i % 5 == 0 && i % 3 == 0){
        number = 'FizzBuzz';
        listItem.classList.add('bg-red');
        console.log(number);
    } else if (i % 3 == 0) {
        number = 'Fizz';
        listItem.classList.add('bg-blue');
        console.log(number);
    } else if (i % 5 == 0) {
        number = 'Buzz';
        listItem.classList.add('bg-yellow');
        console.log(number);
    } else {
        listItem.classList.add('bg-gray');
        console.log(i);
    }

    //Inseriemento li nella lista
    listItem.append(number);
    list.appendChild(listItem);
    listItem.classList.add('fw-bold');
}

// # Fase di Output
//Inserimento Lista in pagina
numberTable.appendChild(list);
