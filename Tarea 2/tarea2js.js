const vs = document.getElementById('resultado'); 
const buttons = document.querySelectorAll('.botones span'); 

buttons.forEach(e =>  {
    e.addEventListener('click', (btn) => {
            const btnvalor = btn.target.innerHTML;

            if (isNaN(btnvalor) === false) {

                if (vs.innerHTML.length < 16) {
                    vs.innerHTML += eval(btnvalor);
                }

            }else if (btnvalor === '=') {
                if(vs.innerHTML !== '' && isNaN(vs.innerHTML.substr(-1)) == false) {
                    vs.innerHTML = eval(vs.innerHTML);
                }
            }
            else if(btnvalor === 'CE') {
                vs.innerHTML = vs.innerHTML.substr(0, vs.innerHTML.length - 1);
            }
            else if(btnvalor === 'C') {
                vs.innerHTML = '';
            }
            else {
                if(isNaN(vs.innerHTML.substr()) === false) {
                    vs.innerHTML += btnvalor;
                }
                else {
                    vs.innerHTML = vs.innerHTML.substr(0, vs.innerHTML.length - 1) + btnvalor;
                  }
            }
        });
});