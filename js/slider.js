(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})();

(function(){
    
    const sliders2 = [...document.querySelectorAll('.testimony__body2')];
    const buttonNext = document.querySelector('#next2');
    const buttonBefore = document.querySelector('#before2');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition2(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition2(-1);
    });

    const changePosition2 = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show2').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders2[Number(currentTestimony)-1].classList.remove('testimony__body--show2');
        if(value === sliders2.length+1 || value === 0){
            value = value === 0 ? sliders2.length  : 1;
        }

        sliders2[value-1].classList.add('testimony__body--show2');

    }

})();