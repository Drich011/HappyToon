$(document).ready(function(){
    console.log("dsadsa")
    $('.openSignUp').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-other-works').click(function(){
        $('.modal-wrapper').show()
    })
    $('.open-list-episode').click(function(){
        $('.modal-wrapper').show()
    })
    $('.modal-close').click(function(){
        $('.modal-wrapper').hide()
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
    $('.btn-day').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.day').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.day').addClass('a')
    })
    $('.btn-month').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.month').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.month').addClass('a')
    })
    $('.btn-fury').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.fury').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.fury').addClass('a')
    })
    $('.btn-number').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.number').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.number').addClass('a')
    })
    $('.btn-neck').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.neck').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.neck').addClass('a')
    })
    $('.btn-gold').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.gold').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.gold').addClass('a')
    })
    $('.btn-saturday').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.saturday').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.saturday').addClass('a')
    })
    $('.btn-ten-days').click(function(){
        $('.sort-choices .sort-choices-item').removeClass('a')
        $('.sort-choices .sort-choices-item.ten-days').addClass('a')
        $('.button-choices .sort-choices-item').removeClass('a')
        $('.button-choices .sort-choices-item.ten-days').addClass('a')
    })

})