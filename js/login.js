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
function mypage(){
	let a = "1"
	if(a = "1"){
		alert("서비스는 로그인 후 사용하실 수 있습니다.");
		location.href="./login.html"
	}else{
		location.href="./login.html"
	}
}




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


// 카카오 로그인

Kakao.init('여기에 자바 스크립트 키를 입력하세요');
console.log(Kakao.isInitialized());  // sdk초기화여부판단
//카카오로그인
function kakaoLogin() {
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					console.log(response)
				},
				fail: function (error) {
					console.log(error)
				},
			})
		},
		fail: function (error) {
			console.log(error)
		},
	})
}


//카카오로그아웃  

function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
        	console.log(response)
        },
        fail: function (error) {
          console.log(error)
        },
      })
      Kakao.Auth.setAccessToken(undefined)
    }
  }  