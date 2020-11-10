jQuery(document).ready(function($) {
    let amount = $(".cart__items").length +1
    $(".count").html('( '+amount+' )')
    
    // Cart Toggle Function
    $( "div.cart-label" ).on("click",function () {  
        if( !$(".cart").has("li").length ) {
            $( ".cart" ).removeClass('active');
        }
        else {
            $( ".cart" ).toggleClass("active" )
        }
    })

    $('.main').on("click",function(){
        $( ".cart" ).removeClass('active');
    })

   // cart funtionality
   $(".submit-button").on("click",function(e){ 
       // add to cart
        let optionSize = $("input[name='size']:checked").val();
        $(".cart__items").append('<li class="cart__item"><i class="fas fa-times remove"></i><span class="item-image"><img src="/assets/images/classic-tee.jpg" alt="Classic Tee"></span><span class="item-details"><p class="item-line">Classic Tee</p><p class="item-line">1x $75.00</p><p class="item-line size">Size: '+optionSize+' </p></span></li>');

        // remove from cart
        $(".remove").on("click",function(){
            $(this).parent().remove();
            if( !$(".cart__items").has("li").length ) {
                $( ".cart" ).removeClass('active');
            }
            let amount = $(".cart__items").length
            $(".count").html('( '+amount+' )')
        })

        e.preventDefault();
    });
    $(".remove").on("click",function(){
        $(this).parent().remove();
        if( !$(".cart__items").has("li").length ) {
            $( ".cart" ).removeClass('active');
        }
        let amount = $(".cart__items").has("li").length
        $(".count").html('( '+amount+' )')
    })


    // update cart count
    $(".cart__items").change(function(){
        console.log(amount)   
    })


    
})