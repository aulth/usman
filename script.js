function $(el){
  return document.querySelector(el);
  }
  let container = $('.container');
  let toggle = $('#toggle-theme');
  toggle.addEventListener('click', () =>{
      let list = container.classList;
      if(list.contains('default'))
      {
          list.replace('default', 'dark');
          toggle.textContent = 'Light';
      }
      else
      {
          list.replace('dark', 'default');
          toggle.textContent = 'Dark'
      }
  })


// progress bar 
const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
  setTimeout(() => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`
  }, 1000);
});