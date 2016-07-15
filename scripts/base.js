$(document).ready(function() {
            $('a[href^="/#"]').click(function () {
                elementClick = $(this).attr("href");
                elementClick = elementClick.substr(1);
                destination = $(elementClick).offset().top - 53;
                if($.browser.safari){
                    $('body').animate( { scrollTop: destination }, 1100 );
                }else{
                    $('html').animate( { scrollTop: destination }, 1100 );
                }
            return false;
            });
        });