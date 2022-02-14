function changeSetting () {
   if (document.querySelector('.account-settings')){
      const editBtns = document.querySelectorAll('[data-btn="edit-setting"]');
      console.log(editBtns);
      editBtns.forEach((btn) => {
         btn.addEventListener('click', () => {
            const setting = btn.closest('.account-settings__setting');

            btn.classList.toggle('account-settings__edit_active');
            setting.classList.toggle('account-settings__setting_changing');
            setting.querySelector('input').classList.toggle('visually-hidden');
         });
      });
   }
}
export default changeSetting;