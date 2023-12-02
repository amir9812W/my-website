import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"

import { getDatabase, ref ,push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

 const firebaseConfig = {
    databaseURL: "https://project-2-b0f21-default-rtdb.firebaseio.com",
  };

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const refrence = ref(database, 'movies')
const refrence2 = ref(database, 'toDos')

const button = document.querySelector('.input2')
const nani = document.querySelector('.type2')
const list = document.querySelector('.who')

onValue(refrence2, function(snapshot) {
  if(snapshot.exists()){
    let arr = Object.entries(snapshot.val())
    list.innerHTML = ''


    for(let i = 0 ; i < arr.length ; i++){

      let current = arr[i]
      let ids = current[0]
      let keys = current[1]

  
      let newEl = document.createElement('li')
      newEl.textContent = keys
      list.append(newEl)
  
      newEl.addEventListener('click', function() {
        let exactLocation = ref(database, `toDos/${ids}`)
        remove(exactLocation)
      })
    }
  }else{
    list.innerHTML += 'no items yet...'
  }

})


document.querySelector('body').addEventListener('keydown', function(event) {
  if(event.key === 'Enter'){
    let data3 = button.value
    push(refrence2, data3)
  }
})


nani.addEventListener('click', function() {
  let data3 = button.value
  push(refrence2, data3)
})
