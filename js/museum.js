function action(){
    $('.box03').css('display','none');
    $('#box01>h3').on('click',function(e){
        $('#box01>img').css('position','absolute');
        $('#box01>img').animate({top:'-60vh'},500);
        $('#box01>h3').css('display','none');
        $('.box03').css('display','block');
    });  
}