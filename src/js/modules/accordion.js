function accordion () {
   if (document.querySelector('.accordion')){
      const accordionsBtn = document.querySelectorAll('.accordion__header');
      accordionsBtn.forEach(btn => {
         btn.addEventListener('click', (e) => {
            const targetAccord = btn.closest('.accordion');
            const allAccords = document.querySelectorAll('.accordion');

            allAccords.forEach(el => {
               el.classList.remove('accordion_active');
            })
            targetAccord.classList.toggle('accordion_active');
            
         })
      })
   }
}
export default accordion;