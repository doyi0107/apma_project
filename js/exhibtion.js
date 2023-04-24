function color(){
      $('#eh1>img').on('mouseenter',function(e){
            $('#eh1>img').attr('src','./image/Head.jpg');
      });
      $('#eh1>img').on('mouseleave',function(e){
            $('#eh1>img').attr('src','./image/Head.black.jpg');
      });
}

function color2(){
      $('#eh2>img').on('mouseenter',function(e){
            $('#eh2>img').attr('src','./image/phychogeography.jpg');
      });
      $('#eh2>img').on('mouseleave',function(e){
            $('#eh2>img').attr('src','./image/phy.black.jpg');
      });
}

function color3(){
      $('#eh3>img').on('mouseenter',function(e){
            $('#eh3>img').attr('src','./image/window.jpg');
      });
      $('#eh3>img').on('mouseleave',function(e){
            $('#eh3>img').attr('src','./image/window.black.jpg');
      });
}

function color4(){
      $('#eh4>img').on('mouseenter',function(e){
            $('#eh4>img').attr('src','./image/Twinkle.jpg');
      });
      $('#eh4>img').on('mouseleave',function(e){
            $('#eh4>img').attr('src','./image/Twinkle.balck.jpg');
      });
}

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
