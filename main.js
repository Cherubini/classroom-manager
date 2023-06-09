///BONUS
// 1) rimozione dello studente ok
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due ok
// 4) aggiunta della data di nascita dello studente ok
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato ok
'use strict'

const student1 = new Student('Simone', 'Maccarone', '01/03/2001');
const student2 = new Student('Luis Alberto', 'Castro', '21/05/2001');
const student3 = new Student('Davide', 'Consigliere', '08/04/2023');
const student4 = new Student('Francesco', 'Badile', '24/11/1964');

const classroom1 = new ClassRoom([student1, student2, student3, student4]);


function displayClassroom(classroom){
    
    // document.getElementById('student-list').innerHTML = '';
    
    // for (let i = 0; i < classroom1.students.length; i++) {
    //     const element = classroom1.students[i];
    //     const mainClassroom=document.getElementById('student-list');
    //     const newLi = document.createElement('li');
    //     const text = document.createTextNode(element.toString());
    //     const tempDate=new Date();
    //     if(element.isBirthday())
    //         {
    //         const bold = document.createElement('b');
    //         mainClassroom.appendChild(bold);
    //         bold.appendChild(newLi);
    //         newLi.appendChild(text);
    //         }
    //      else
    //         {
    //         newLi.appendChild(text);
            // mainClassroom.appendChild(newLi);
    //         }
    // }
    }
//********************************************** */
function displayClassroom2(classroom){
    document.getElementById('student-list').innerHTML = '';

    const mainClassroom=document.getElementById('student-list');

    for (let i = 0; i < classroom1.students.length; i++) {
        const element = classroom1.students[i];
        if(!element.isBirthday())
            mainClassroom.innerHTML += `<li class="list-element">${element.name} ${element.surname} </li>`
          else
            mainClassroom.innerHTML += `<li class="list-element"><b>${element.name} ${element.surname}</b> </li>`
        mainClassroom.innerHTML += `<button class='remove-btn' id='remove-btn${i}'> patate </button>`
        }
    for (let i = 0; i < classroom1.students.length; i++) {
        document.getElementById('remove-btn'+i).addEventListener('click', (event)=> removeStudentToClassroom())
        }

}

function displayClassroom3(classroom){
    document.getElementById('student-list').innerHTML = '';

    const mainClassroom=document.getElementById('student-list');
    const studentList = document.getElementById('student-list');
    studentList.innerHTML='';
    for (let i = 0; i < classroom.students.length; i++) {
        const element = classroom.students[i];
        if(!element.isBirthday())
            mainClassroom.innerHTML += `<li class="list-element">${element.name} ${element.surname} </li>`
          else
            mainClassroom.innerHTML += `<li class="list-element"><b>${element.name} ${element.surname}</b> </li>`
    }
}

displayClassroom3(classroom1);

function shuffleTheClassroom(){
    classroom1.shuffleStudents();
    displayClassroom3(classroom1);
}

function addStudentToClassroom(){
    const inputNome = document.getElementById('input-nome');
    const inputCognome = document.getElementById('input-cognome');
    const inputDob = document.getElementById('input-dob');
    if(inputNome.value !== '' && inputCognome.value !== ''  && inputDob.value !== ''){
        let student= new Student(inputNome.value, inputCognome.value, inputDob.value); 
        classroom1.addStudent(student);
    }
    inputNome.value = '';
    inputCognome.value = '';
    inputDob.value= '';
    displayClassroom3(classroom1);
}


function removeStudentToClassroom(){
    console.log('fiffi');
    const inputNome = document.getElementById('input-nome');
    const inputCognome = document.getElementById('input-cognome');
    if(inputNome.value !== '' && inputCognome.value !== ''){
        let student= new Student(inputNome.value, inputCognome.value);
        classroom1.removeStudent(student);
    }
    inputNome.value = '';
    inputCognome.value = '';
    displayClassroom3(classroom1);

}

function sumArray(array) {
    if(array===null || array.length===0 || array.length === 1 || array===undefined)
      return 0;
      console.log(array);
    let tempArray=array;
    let result=0;
    for(let i=0;i<tempArray.length;i++)
      {result+=tempArray[i];
    console.log(result);}
    return result-Math.min(tempArray)-Math.max(tempArray);
  }
