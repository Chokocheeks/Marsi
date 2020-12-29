document.addEventListener('DOMContentLoaded', function(){


  
    
   
    
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
    const counterElement = document.querySelector('.counter');
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

    // submit
    //jQuery + Ajax
    const  formSubmit = $('.form-contact');
    formSubmit.on('submit', function(event){
        event.preventDefault();
        const dataForm =$(this).serialize();
        $.post({
            url: 'send/send.php', //отправка данных
            data: dataForm,
            dataType: "json",
        }).done(function(data){
            console.log(data);
        });

    });

        // swiper

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
              },
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30
            }, 
        }
      });

      const buttonPrevious = document.querySelector('.gallery-previous');
      const buttonNext = document.querySelector('.gallery-next');

      //gallery
      const galleryImage = document.querySelectorAll('.gallery-image');
      galleryImage.forEach(function(galleryImage){
          galleryImage.addEventListener('click',function(){
              this.classList.toggle('grayscale');
          });
      });

      buttonPrevious.addEventListener('click', function(){
        swiper.slidePrev();
    });
    
        buttonNext.addEventListener('click', function(){
        swiper.slideNext();
    });


      

    //   buttonPrevious.addEventListener('click', function(){
    //       const galleryItem = document.querySelector('.gallery-item');
    //       galleryItem.style.marginLeft = '0';
    //       buttonNext.style.opacity = '1';
    //       this.style.opacity = '0';
    //   })
      
    //   buttonNext.addEventListener('click', function(){
    //       const galleryItem = document.querySelector('.gallery-item');
    //       galleryItem.style.marginLeft = '-100%';
    //       buttonPrevious.style.opacity = '1';
    //       this.style.opacity = '0';
    //   })
});


