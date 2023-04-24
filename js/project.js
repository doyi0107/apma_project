function pj(){
  $('#box01>h4').on('click',function(){
    $('#box01 #pic').animate({top:'0px'},500);
    $('#box01 dl').animate({bottom:'0px'},500);  
    $('#box01>h4').css('display','none'); 
  });


}




function pj2(){
  $('#box02>h4').on('click',function(){
    $('#box02 #pic').animate({top:'0px'},500);
    $('#box02 dl').animate({bottom:'0px'},500);  
    $('#box02>h4').css('display','none'); 
  });
}

function pj3(){
  $('#box01 #pic').on('click',function(e){
    //$('body').css('background','red');
    $(this).animate({top:'-589px'},500);
    $('#box01 dl').animate({bottom:'-746px'},500);
    $('#box01>h4').css('display','block');
  });
  $('#box01 dl').on('click',function(e){
    //$('body').css('background','red');
    $('#box01 #pic').animate({top:'-589px'},500);
    $(this).animate({bottom:'-746px'},500);
    $('#box01>h4').css('display','block');
  });

  $('#box02 #pic').on('click',function(e){
    //$('body').css('background','red');
    $(this).animate({top:'-589px'},500);
    $('#box02 dl').animate({bottom:'-746px'},500);
    $('#box02>h4').css('display','block');
  });
  $('#box02 dl').on('click',function(e){
    //$('body').css('background','red');
    $('#box02 #pic').animate({top:'-589px'},500);
    $(this).animate({bottom:'-746px'},500);
    $('#box02>h4').css('display','block');
  });

  // $('#box01 #pic','#box01 dl').on('click',function(){
  //   $('#box01 #pic').animate({top:'-589px'},500);
  //   $('#box01 dl').animate({bottom:'-746px'},500);  
  //   $('#box01>h4').css('display','block'); 
  // });

}
