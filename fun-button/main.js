const btn = document.getElementById('button');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = colors[index];
  btn.style.color = 'black';
    
  index = index >= colors.length - 1 ? 0 : index + 1;
});