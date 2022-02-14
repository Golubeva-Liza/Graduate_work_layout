function calendar (selector) {
   if (document.querySelector(selector)){
      const calendar = document.querySelector(selector);
      const monthTitle = calendar.querySelector('.calendar__month-name');
      const yearTitle = calendar.querySelector('.calendar__year');
      const monthDays = calendar.querySelector('.calendar__days');

      const date = new Date();
      let days = "";
      const monthsNames = [
         "Январь",
         "Февраль",
         "Март",
         "Апрель",
         "Май",
         "Июнь",
         "Июль",
         "Август",
         "Сетрябрь",
         "Октрябрь",
         "Ноябрь",
         "Декабрь"
      ];
      
      //назначаем в шапку календаря актуальный месяц и год
      monthTitle.innerHTML = monthsNames[date.getMonth()];
      yearTitle.innerHTML = date.getFullYear();

      date.setDate(1);

      const firstDayIndex = date.getDay() - 1;//день недели первого дня месяца, где 0 - воскресенье, поэтому вычитаем единицу, чтобы 0 был понедельником
      if (firstDayIndex === -1){
         firstDayIndex = 6;
      }//а воскресенье станет последним индексом

      const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;
      if (lastDayIndex === -1){
         lastDayIndex = 6;
      }
      
      const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

      const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();//последний аргумент 0 дает последнее число предыдущего месяца. поэтому прибавляем к текущему месяцу 1

      const nextDays = 7 - lastDayIndex - 1;

      //формируем последние числа предыдущего месяца
      for (let x = firstDayIndex; x > 0; x--){
         days += `<div class="calendar__prev-date">${prevLastDay - x + 1}</div>`
      }

      //формируем числа месяца
      for (let i = 1; i <= lastDayOfCurrentMonth; i++){
         if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="calendar__today"><span>${i}</span></div>`;
         } else {
            days += `<div><span>${i}</span></div>`;
         }
         monthDays.innerHTML = days;
      }

      //формируем первые числа следующего месяца
      for (let j = 1; j <= nextDays; j++){
         days += `<div class="calendar__next-date">${j}</div>`
         monthDays.innerHTML = days;
      }

      
      //функционал со стрелками
      // https://youtu.be/o1yMqPyYeAo
   }
}
export default calendar;