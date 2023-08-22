function loginStatus(){
	
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
			alert('로그인 유지 성공');
			$('#side_menu>li:nth-child(1)').remove();
			$('#side_menu').prepend("<li><input type='submit'>LOGOUT</input></li>");
		  });
	}



function mypage(){

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
		alert('로그인 유지 성공');
		location.href = "./pages/my_page.html"
	  },fail(function (response) {
			console.log(response);
			alert("서비스는 로그인 후 사용하실 수 있습니다.");
			location.href="./pages/login.html"
	  }));
	  

	// let a = "1"
	// if(a = "1"){
	// 	alert("서비스는 로그인 후 사용하실 수 있습니다.");
	// 	location.href="./pages/login.html"
	// }else{
	// 	location.href="./login.html"
	// }
}

