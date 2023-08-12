// $(document).ready(function(){
// 	var adminID = "qwe";
// 	var adminPW = "1234";
// 	$("#btnLogin").click(function(){
// 		var uID = $("#userId").val();
// 		var uPW = $("#userPw").val();
// 		if (!uID || !uPW) {
// 			alert("회원 정보를 모두 입력하세요.");
// 		} else {
// 			if (uID == adminID) {
// 				if (uPW == adminPW) {
// 					alert("로그인 성공");
// 					let link = '../index.html';
// 					location.href = link;
// 				} else {
// 					console.log("비밀번호 불일치");
// 					alert("회원정보 불일치");
// 				}
// 			} else {
// 				console.log("아이디 불일치");
// 				alert("회원정보 불일치");
// 			}
// 		}
// 	})
// })


function signIn() {

	$.ajax({
		"url": "localhost:8080/api/users/login",
		"type": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"data":   {   
			id_give :$("userId").val(),
            pw_give :$("userPW").val() },
		"datatype" : JSON,
		success: function (response) {
				if(response['result'] == 'success'){

					$.cookie('mytoken', response['token']);
					alert('로그인완료');
					window.location.href = '../index.html'

				}else{
					alert(response['msg'])
				}
		},
		error: function (request, error) {
			alert("code:" + request.status + "\n" + "error:" + error);
		}
	})
}

// var settings = {
// 	"url": "http://127.0.0.1:5500/index.html",
// 	"method": "POST",
// 	"timeout": 0,
// 	"headers": {
// 	  "Content-Type": "application/json"
// 	},
// 	"data": JSON.stringify({
// 	  "id_give": $('#userId').val(),
// 	  "pw_give": $('#userPw').val()
// 	})
//   };
  
// 	  $.ajax(settings).done(function (response) {
// 	  console.log(response);
// 	  console.log(xhr.getREsponseHeader('Authorization'))// 헤더에 있는 토큰을 받아와서
// 	  localStorage.setItem('accessToken', xhr.getREsponseHeader('Authorization')) // 로컬스토리지 = 디비 , 에다가 셋 에 응답 받은 토큰을 그대로 넣는다
// 	  alert('로그인 완료')
// 	  window.location = '../index.html' //로그인 성공시 새로고침 
// 	  }).fail(function(response){
// 		  console.log(response.responseJSON);
// 		  if(response.responseJSON.statusCode === 404){
// 			  alert('아이디와 비밀번호를 확인하여 주세요');
// 		  } else{
// 			  alert('서버에 문제가 발생하였습니다.');
// 		  }
// 	  });