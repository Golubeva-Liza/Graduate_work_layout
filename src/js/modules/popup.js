function popup () {
   const popupBtns = document.querySelectorAll('[data-popup-btn]');

   if (popupBtns){
      popupBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-popup-btn');
            const popupTarget = document.querySelector(`[data-popup-target="${target}"]`);
            popupTarget.classList.add('show');
            console.log(popupTarget)
            document.addEventListener('click', closePopup);
         });
      });
      function closePopup (e){
         console.log(!e.target.hasAttribute('data-modal-btn'));
         // && !e.target.closest('[data-popup-target]')
         if (!e.target.hasAttribute('data-popup-btn')){
            document.querySelectorAll('[data-popup-target].show').forEach(btn => {btn.classList.remove('show');});
            document.removeEventListener('click', closePopup);
         }
      }
   }

   
}
export default popup;