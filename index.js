const input = document.getElementById('button');

function addingEventListener() {
    alert('I was clicked');
    input.addEventListener('click', addingEventListener);
}

input.addEventListener('click', addingEventListener);


/*
const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
*/