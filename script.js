$(document).ready(function() {

    $('footer').hide();

    /************************************************
    ***************** A C C U E I L *****************
    ************************************************/

    const imgAccueil = ['img/accueil/Infirmiere.jpg', 'img/accueil/Exterieur.jpg', 'img/accueil/Ehpad.jpg', 'img/accueil/Maison.jpg'];

    var i = 0;
    // $('#imgAccueil').attr('src', imgAccueil[i++]);
    setInterval(function(){ 
        $('#imgAccueil').attr('src', imgAccueil[i++]);
        if (i == 4){
            i = 0;
        }
    }, 2000);



    /************************************************
    **************** A   P R O P O S ****************
    ************************************************/

    $('#Carousel').carousel({
        interval: 4000
    })

    var timer = 4000;
    var i = 0;
    var max = $('#carouselBottom > li').length;

    $("#carouselBottom > li").eq(i).addClass('active').css('left','0');
    $("#carouselBottom > li").eq(i + 1).addClass('active').css('left','16.66%');
    $("#carouselBottom > li").eq(i + 2).addClass('active').css('left','33.33%');
    $("#carouselBottom > li").eq(i + 3).addClass('active').css('left','50%');
    $("#carouselBottom > li").eq(i + 4).addClass('active').css('left','66.66%');
    $("#carouselBottom > li").eq(i + 5).addClass('active').css('left','83.33%');

    setInterval(function(){ 
        $("#carouselBottom > li").removeClass('active');

        $("#carouselBottom > li").eq(i).css('transition-delay','0.16s');
        $("#carouselBottom > li").eq(i + 1).css('transition-delay','0.33s');
        $("#carouselBottom > li").eq(i + 2).css('transition-delay','0.50s');
        $("#carouselBottom > li").eq(i + 3).css('transition-delay','0.66s');
        $("#carouselBottom > li").eq(i + 4).css('transition-delay','0.83s');
        $("#carouselBottom > li").eq(i + 5).css('transition-delay','1s');

        if (i < max-6) {
            i = i+6; 
        } else { 
            i = 0; 
        }  

        $("#carouselBottom > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.16s');
        $("#carouselBottom > li").eq(i + 1).css('left','16%').addClass('active').css('transition-delay','1.33s');
        $("#carouselBottom > li").eq(i + 2).css('left','33%').addClass('active').css('transition-delay','1.50s');
        $("#carouselBottom > li").eq(i + 3).css('left','50%').addClass('active').css('transition-delay','1.66s');
        $("#carouselBottom > li").eq(i + 4).css('left','66%').addClass('active').css('transition-delay','1.83s');
        $("#carouselBottom > li").eq(i + 5).css('left','83%').addClass('active').css('transition-delay','2s');

    }, timer);

    /************************************************
    *************** S T R A T E G I E ***************
    ************************************************/

    $('#strategie .title').click(function(){
        $('.title').removeClass('active');
        $(this).addClass('active');

        $('#strategie .details').addClass('d-none');
        $('#strategie #' + $(this).data('titre')).removeClass('d-none');
    });

});
