/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: UI Solutions
Version: 1.0.0
-------------------------------------------------------------------*/
(function($){
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function($){
        var $this = $(window);

        // Menu toggle
        $('.mcs_menu_icon').on('click',function () {
            $('.mcs_menu>ul').toggleClass('clicked');
        });
        
        // Fixed Header
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 200) {
                $('.mcs_header_wrap').addClass('fixed');
            }
            else {
                $('.mcs_header_wrap').removeClass('fixed');
            }
        });

        
        // AOS Animation
        AOS.init({
            duration: 1200,
        })


    });
})();

// tabs
$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );
  
  
  $(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itembox').show('1000');
        }
        else {
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
          }
    })
    });
    // add active class on selected item
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
  