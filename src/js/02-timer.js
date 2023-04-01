import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const BtnStart = document.querySelector('button[data-start]');
BtnStart.disabled = true;

const selector = document.querySelector('input[type="text"]');


// задаємо теперішній час 
// початкове значення инпута 
let selectTime = null;
// console.log('selectDate', selectTime)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);

       if (selectedDates[0].getTime() <= Date.now()) {
           Notiflix.Report.failure("Please choose a date in the future");
      }
      BtnStart.disabled = false;
      selectTime = selectedDates[0];
      console.log('onClose ~ selectDate', selectDate)

    },
};

flatpickr(selector, options);

// таймер


const timerEl = document.querySelector('.timer');

const timer = {
    
    intervalID: null,
    start(seclector, deadline) {

        this.intervalID = setInterval(() => {
            const startTime = Date.now();
            const gapTimer = deadline - startTime;
            const { days, hours, minutes, seconds } = this.convertMs(gapTimer);
        
            if (gapTimer <= 0) {
                this.stop();
                return;
             }

            seclector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
            seclector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
            seclector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
            seclector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);

        }, 1000);
        
    },

    stop() {
        clearInterval(this.intervalID);
        BtnStart.disabled = false;
        selector.disabled = false;
    },

    convertMs(ms) {
        // Кількість мілісекунд на одиницю часу
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Решта днів
        const days = Math.floor(ms / day);
        // Решта годин
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    },
        
            addLeadingZero(value) {
            return String(value).padStart(2, '0');
        }
    
};

BtnStart.addEventListener('click', () => {
    timer.start(timerEl, selectTime);
    BtnStart.disabled = true;
    selector.disabled = true;
});





 
