function rangeSlider (){
   if (document.querySelector('.range-slider')){
      const slider = document.querySelector('.range-slider');
      const rangeInputs = slider.querySelectorAll('.range-slider__inputs input');
      const progress = slider.querySelector('.range-slider__progress');
      const values = slider.querySelectorAll('.range-slider__value');//2
      const numInputs = slider.querySelectorAll('.range-slider__field input');
      const numbers = slider.querySelectorAll('.range-slider__value span');

      const gap = 15;
      
      rangeInputs.forEach(input => {
         input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            let leftPercent = (minVal / rangeInputs[0].max) * 100 + '%';
            let rightPercent = 100 - (maxVal / rangeInputs[1].max) * 100 + '%';

            if (maxVal - minVal < gap){
               if (e.target == rangeInputs[0]){
                  rangeInputs[0].value = maxVal - gap;
               }else{
                  rangeInputs[1].value = minVal + gap;
               }
               
            }else{
               progress.style.left = leftPercent;
               progress.style.right = rightPercent;
               values[0].style.left = leftPercent;
               values[1].style.left = (maxVal / rangeInputs[1].max) * 100 + '%';
               // numInputs[0].value = minVal;
               // numInputs[1].value = maxVal;
               numbers[0].innerHTML = minVal;
               numbers[1].innerHTML = maxVal;
            }
            
            
            // console.log(progress);
         })
      })
   }
}
export default rangeSlider;