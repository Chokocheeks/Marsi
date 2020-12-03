document.addEventListener('DOMContentLoaded', function(){
    console.log('loaded');

    //gallery
    const galleryImage = document.querySelectorAll('.gallery-image');
    galleryImage.forEach(function(galleryImage){
        galleryImage.addEventListener('click',function(){
            galleryImage.classList.toggle('grayscale');
        });
    });
    
    const buttonPrevious = document.querySelector('.gallery-previous');
    const buttonNext = document.querySelector('.gallery-next');
    
    buttonPrevious.addEventListener('click', function(){
        const galleryItem = document.querySelector('.gallery-item');
        galleryItem.style.marginLeft = '0';
        buttonNext.style.opacity = '1';
        this.style.opacity = '0';
    })
    
    buttonNext.addEventListener('click', function(){
        const galleryItem = document.querySelector('.gallery-item');
        galleryItem.style.marginLeft = '-100%';
        buttonPrevious.style.opacity = '1';
        this.style.opacity = '0';
    })
    
    //Form Contact
    const formContact = document.querySelector('.form-contact');
    const inputs = formContact.querySelectorAll('input');
    //перебор списка элементов
    inputs.forEach(function(input){
        input.addEventListener('focus', function(){
            this.classList.add('active');
        });
        input.addEventListener('blur', function(){
            const inputValue = this.value;
            if(inputValue === ''){
                console.log('value=', inputValue);
                this.classList.remove('active');
            }
        });
    });

    //counter
    const counterElement = document.querySelector('counter');
    //забор контента
    const counterElementContent = counterElement.textContent;
    //преобразуем строку в число
    const counterElementNumber = Number.parseInt(counterElementContent);
    counterElement.textContent = '0 %';
    let k = 0;
     const interval = setInterval(function(){
            k += 2;
            counterElement.textContent = k + ' %';
            if (k >= counterElementNumber){
            clearInterval(interval); //stop timer
        }
    }, 100);
    // сделать обнуление
});


