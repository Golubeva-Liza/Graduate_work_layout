function modalSteps(selector){
   if (document.querySelector(selector)){
      const modal = document.querySelector(selector);
      const contents = modal.querySelectorAll('.modal__content');
      const prevBtn = modal.querySelectorAll('[data-modal-prev]');
      const nextBtn = modal.querySelectorAll('[data-modal-next]');

      let current = 0;
      contents[current].style.display = 'block';

      nextBtn.forEach(btn => btn.addEventListener('click', () => {
         contents.forEach(content => {content.style.display = 'none';});
         current++;
         contents[current].style.display = 'block';
      }));

      prevBtn.forEach(btn => btn.addEventListener('click', () => {
         contents.forEach(content => {content.style.display = 'none';});
         current--;
         contents[current].style.display = 'block';
      }))
   }
}
export default modalSteps;