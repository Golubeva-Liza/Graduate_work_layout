function sidebarMenu () {
   const header = document.querySelector('.header');
   if (header){
      const menuBtn = header.querySelector('.header__arrow');
      menuBtn.addEventListener('click', () => {
         header.classList.toggle('closed');
      });
   }
}
export default sidebarMenu;