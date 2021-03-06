import {Select} from '../modules/select.js';
function selectSettings(){
   if (document.querySelector('.settings-aside')){
      new Select('#select-sex', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Мужской'},
            {id: '3', value: 'Женский'}
         ]
      });
      new Select('#select-education', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Среднее общее'},
            {id: '3', value: 'Среднее профессиональное'},
            {id: '4', value: 'Высшее'},
            {id: '5', value: 'Школьник'},
            {id: '6', value: 'Студент'},
         ]
      });
      new Select('#select-residence', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Санкт-Петербург'},
            {id: '3', value: 'Москва'},
            {id: '4', value: 'Ростов-на-Дону'},
            {id: '5', value: 'Нижний Новгород'},
            {id: '6', value: 'Волгоград'}
         ]
      });
      new Select('#select-family-status', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Разведен(а)'},
            {id: '3', value: 'Состоит в браке'},
            {id: '4', value: 'Не был(а) в браке'}
         ]
      });
   }
   if (document.querySelector('.modal_respond')){
      new Select('#select-modal-education', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Среднее общее'},
            {id: '3', value: 'Среднее профессиональное'},
            {id: '4', value: 'Высшее'},
            {id: '5', value: 'Школьник'},
            {id: '6', value: 'Студент'},
         ]
      });
      new Select('#select-modal-fs', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Разведен(а)'},
            {id: '3', value: 'Состоит в браке'},
            {id: '4', value: 'Не был(а) в браке'}
         ]
      });
      new Select('#select-modal-education-2', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Среднее общее'},
            {id: '3', value: 'Среднее профессиональное'},
            {id: '4', value: 'Высшее'},
            {id: '5', value: 'Школьник'},
            {id: '6', value: 'Студент'},
         ]
      });
      new Select('#select-modal-fs-2', {
         placeholder: 'Не важно',
         data: [
            {id: '1', value: 'Не важно'},
            {id: '2', value: 'Разведен(а)'},
            {id: '3', value: 'Состоит в браке'},
            {id: '4', value: 'Не был(а) в браке'}
         ]
      });
   }
   if (document.querySelector('.respondent-settings')){
      new Select('#select-time', {
         placeholder: 'Время',
         data: [
            {id: '1', value: '9:00-10:00'},
            {id: '2', value: '10:00-11:00'},
            {id: '3', value: '11:00-12:00'},
            {id: '4', value: '12:00-13:00'},
            {id: '5', value: '13:00-14:00'},
            {id: '6', value: '14:00-15:00'},
            {id: '7', value: '15:00-16:00'},
            {id: '8', value: '16:00-17:00'}
         ]
      });
   }
   
}
export default selectSettings;