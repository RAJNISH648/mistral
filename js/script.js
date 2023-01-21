
// my_slider  
var swiper = new Swiper(".my_slider", {       
    slidesPerView: 3, 
    spaceBetween: 20,    
    slidesPerGroup: 1, 
    loop: true,
    loopFillGroupWithBlank: true, 
    
    navigation: {
      nextEl: ".swiper-button-next",      
      prevEl: ".swiper-button-prev",      
    },

    breakpoints: {
      200: {                                             
        slidesPerView: 1,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: { 
        slidesPerView: 2,
        spaceBetween: 20,             
      },
      1100: {                                  
        slidesPerView: 2, 
        spaceBetween: 20,
      },
      1150: {                 
        slidesPerView: 2, 
        spaceBetween: 20,
      },
      1199: {       
        slidesPerView: 2, 
        spaceBetween: 20,
      },
      1200: {       
        slidesPerView: 3,  
        spaceBetween: 20,
      },
     
    },
  });
  
  // products_slider
  
  var swiper = new Swiper(".products_slider",{        
    slidesPerView: 4, 
    spaceBetween: 20,    
    slidesPerGroup: 1, 
    loop: true,
    loopFillGroupWithBlank: true, 
    
    navigation: {
      nextEl: ".swiper-button-next",      
      prevEl: ".swiper-button-prev",      
    },

    breakpoints: {
      200: {                                             
        slidesPerView: 1,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: { 
        slidesPerView: 2, 
        spaceBetween: 20,             
      },
      1100: {                                  
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      1150: {                 
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      1199: {       
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      1200: {       
        slidesPerView: 4,  
        spaceBetween: 20,
      },
     
    }, 

  });

  // our_story_slider
  
  var swiper = new Swiper(".our_story_slider",{       
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },  
  });
  
  // event listener        
  
  let target = document.querySelector(".add")   
 

           target.addEventListener("click", ()=>{  

           console.log("changed") 

           let add = document.querySelector("#counter")
           

           let calculate = add.innerHTML


           add.innerHTML =  parseInt(calculate) + 1 

        })            



         let targetNew = document.querySelector(".sub")   
 

           targetNew.addEventListener("click", ()=>{  

           console.log("changed") 

           let add = document.querySelector("#counter")
           

           let calculate = add.innerHTML 


           add.innerHTML =  parseInt(calculate) - 1 

        })  






