import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const firebaseConfig = {
  databaseURL: "https://project-2-b0f21-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const reference = ref(database, 'Hovies'); // Reference to the 'Hovies' node in Firebase

const button = document.querySelector('.type2'); // Corrected selector to match your HTML
const input = document.querySelector('.input2');
const list = document.querySelector('.who');

// Listen for changes in the 'Hovies' node in Firebase
onValue(reference, function(snapshot) {
  if (snapshot.exists()) {
    let arr = Object.entries(snapshot.val());

    list.innerHTML = '';

    // Iterate through the entries in the Firebase snapshot
    arr.forEach(([id, task]) => {
      let newEl = document.createElement('li');
      newEl.textContent = task;
      list.appendChild(newEl);

      newEl.addEventListener('click', function() {
        // Remove the task from Firebase on click
        let exactLocation = ref(database, `Hovies/${id}`);
        remove(exactLocation);
      });
    });
  } else {
    list.innerHTML = 'No items yet...';
  }
});

// Add task when 'Enter' key is pressed
document.querySelector('body').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    let task = input.value.trim();
    if (task !== '') {
      push(reference, task); // Push new task to Firebase
      input.value = ''; // Clear input field
    }
  }
});

// Add task when 'Add' button is clicked
button.addEventListener('click', function() {
  let task = input.value.trim();
  if (task !== '') {
    push(reference, task); // Push new task to Firebase
    input.value = ''; // Clear input field
  }
});
