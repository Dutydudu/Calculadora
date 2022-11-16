function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickBtn();
        this.captureKey();
    }


    this.clearDisplay = () => this.display.value = '';

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.captureKey = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.doCount();
            };
        });
    };

    this.doCount = () => {
        let count = this.display.value;

        try {
            count = eval(count);

            if(!count) {
                alert('Conta Invalida');
                return;
            }
            this.display.value = String(count);
        } catch(e) {
            alert('Conta Invalida'); 
            return;
        }
    };

    this.clickBtn = () => {
        document.addEventListener('click', e => {
            const el = e.target; 

            this.display.focus();

            if(el.classList.contains('btn-num')) this.btnForDisplay(el.innerText);

            if(el.classList.contains('btn-clear')) this.clearDisplay();

            if(el.classList.contains('btn-del')) this.deleteOne();
            
            if(el.classList.contains('btn-eq')) this.doCount();
        });
    };

    this.btnForDisplay = (value) => this.display.value += value;
};

const calculator = new Calculator();
calculator.start();
