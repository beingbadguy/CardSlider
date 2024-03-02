const left = document.querySelector('#left');
const right = document.querySelector('#right');
const wrapper = document.querySelector('.wrap');
let flag = 0;

left.addEventListener('click', () => {
  increment(100);
  console.log('left is clicked');
});
right.addEventListener('click', () => {
  wrapper.style.transform = 'translateX(+30%)';
  decrement(40);

  console.log('right is clicked');
});

function increment(value) {
  flag = flag + value;
  slide(flag);
}

function decrement(value) {
  flag = flag - value;
  slide(flag);
}

function slide(newval) {
  if (newval >= 0) {
    flag = 0;
    wrapper.style.transform = 'translateX(0%)';
    console.log(newval);
  }
  if (newval < 0) {
    wrapper.style.transform = `translateX(${newval}%)`;
    console.log(newval);
  }
  if (newval <= -450) {
    flag = 0;
    wrapper.style.transform = 'translateX(0%)';
  }
}
// console.log(increment());
