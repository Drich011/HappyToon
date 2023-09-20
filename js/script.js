$(document).ready(function(){
    
    if (localStorage.getItem('isDarkMode') === 'true') {
        $('.body-dark').removeClass('dark-mode')
    }else{
        $('.body-dark').addClass('dark-mode')
    } 
    
    $('.dark-mode-btn').click(function(){
        console.log("asd")
        localStorage.setItem('isDarkMode', true);
        $('.body-dark').removeClass('dark-mode')
    })
    $('.light-mode-btn').click(function(){
        console.log("asd")
        localStorage.setItem('isDarkMode', false);
        $('.body-dark').addClass('dark-mode')
        
    })

    $('.serial').click(function(){
        $('.serial').addClass('active')
        $('.complete').removeClass('active')
        $('.sort-choices').addClass('active')
        $('.button-choices2').addClass('active')
        $('.sort-choices-complete').removeClass('active')
        $('.search-section2').removeClass('active')
    })
    $('.complete').click(function(){
        $('.search-section2').addClass('active')
        $('.sort-choices').removeClass('active')
        $('.button-choices2').removeClass('active')
        $('.sort-choices-complete').addClass('active')
        $('.sort-choices-item').removeClass('a')
    })

    $('.openSignUp').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-other-works').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-similar-works').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-list-episode').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-message-author').click(function(){
        $('.modal-message').show()
    })
    $('.open-change-info').click(function(){
        $('.modal-wrapper').show()
    })
    $('.modal-close').click(function(){
        $('.modal-wrapper').hide()
        $('.modal-message').hide()
    })
    $('.up-page').click(function(){
        window.scrollTo(0,window.scrollY-=500,{
            behavior: 'smooth'
        })          
    })
    $('.down-page').click(function(){
        window.scrollTo(0,window.scrollY+=500,{
            behavior: 'smooth'
        })
    })
    $('.sort-choices-item button').click(function(){
        let elData = $(this).data().date
        $('.sort-choices-item').removeClass('a')
        $(this).parent('.sort-choices-item').addClass('a')
        $('.sort-choices .sort-choices-item').removeClass('a')
        $(`.sort-choices .sort-choices-item.${elData}`).addClass('a')
    })
    $('.nav-toggle').click(function(){
        $('header .container .nav-bar nav').toggleClass('active')
    })
    $('.comic-controller-toggle-button').click(function(){
        $('.comic-controller').toggleClass('active')
    })
   
    let wrapper = document.querySelector( ".comic-body-details" );
    let options = {
        height:150
    };
    new Dotdotdot( wrapper, options );
})