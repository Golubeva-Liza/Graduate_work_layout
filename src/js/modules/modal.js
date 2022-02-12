function modal () {
   const modalBtns = document.querySelectorAll('[data-modal-btn]');

   if (modalBtns){
      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-modal-btn');
            const modalTarget = document.querySelector(`[data-modal-target="${target}"]`);
            modalTarget.classList.add('show');
            document.body.style.overflowY = "hidden";
            modalTarget.addEventListener('click', (e) => {
               if (e.target.classList.contains('modal__body') || (e.target.hasAttribute('data-modal-close'))){
                  modalTarget.classList.remove('show');
                  document.body.style.overflowY = "auto";
               }
            })
         });
      })
   }
}
export default modal;