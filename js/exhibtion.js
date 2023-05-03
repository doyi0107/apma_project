
// eh1

function eh1(){
      $('#eh1>img').on('click',function(){
            $('#eh1>#modal1').css('display','block');
      });

      $('#mClose1').on('click',function(){
            $('#modal1').css('display','none');
      });
      
      $('#modal1 ul>li>img').on('click',function(){
            let str = $(this).attr('src');
            $('#modal1 figure>img').attr('src',str);
      });
}

// eh2

function eh2(){
      $('#eh2>img').on('click',function(){
            $('#eh2>#modal2').css('display','block');
      });

      $('#mClose2').on('click',function(){
            $('#modal2').css('display','none');
      });
      
      $('#modal2 ul>li>img').on('click',function(){
            let str = $(this).attr('src');
            $('#modal2 figure>img').attr('src',str);
      });
}

function eh3(){
      $('#eh3>img').on('click',function(){
            $('#eh3>#modal3').css('display','block');
      });

      $('#mClose3').on('click',function(){
            $('#modal3').css('display','none');
      });

      $('#modal3 ul>li>img').on('click',function(){
            let str = $(this).attr('src');
            $('#modal3 figure>img').attr('src',str);
      });
}
function eh4(){
      $('#eh4>img').on('click',function(){
            $('#eh4>#modal4').css('display','block');
      });

      $('#mClose4').on('click',function(){
            $('#modal4').css('display','none');
      });

      $('#modal4 ul>li>img').on('click',function(){
            let str = $(this).attr('src');
            $('#modal4 figure>img').attr('src',str);
      });
}

function eh5(){
      $('#eh5>img').on('click',function(){
            $('#eh5>#modal5').css('display','block');
      });

      $('#mClose5').on('click',function(){
            $('#modal5').css('display','none');
      });

      $('#modal5 ul>li>img').on('click',function(){
            let str = $(this).attr('src');
            $('#modal5 figure>img').attr('src',str);
      });
}
