//gallery
const galleryImage = document.querySelector('.gallery-image');
galleryImage.addEventListener('click',function(){
    galleryImage.classList.toggle('grayscale');
});
const galleryImage2 = document.querySelector('.gallery-image-2');
galleryImage2.addEventListener('click',function(){
    galleryImage2.classList.toggle('grayscale');
});
const galleryImage3 = document.querySelector('.gallery-image-3');
galleryImage3.addEventListener('click',function(){
    galleryImage3.classList.toggle('grayscale');
});

const buttonNext = document.querySelector('.gallery-next');
buttonNext.addEventListener('click', function(){
    const galleryItem = document.querySelector('.gallery-item');
    galleryItem.style.marginLeft = '-100%';
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
