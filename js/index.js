function getUserMe(){
	
		var settings = {
			"url": "http://localhost:8080/api/profile",
			"method": "GET",
			"timeout": 0,
			"headers": {
			  "Authorization": localStorage.getItem("accessToken")
			},
		  };
		  
		  $.ajax(settings).done(function (response) { //성공하면
			console.log(response);
			$('#side_menu>li:nth-child(1)').remove();
			$('#side_menu').prepend("<li><input type='submit'>LOGOUT</input></li>");
		  });
	}



function mypage(){
	let a = "1"
	if(a = "1"){
		alert("서비스는 로그인 후 사용하실 수 있습니다.");
		location.href="./pages/login.html"
	}else{
		location.href="./login.html"
	}
}

