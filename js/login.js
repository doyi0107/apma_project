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
		location.href="./my_page.html"
	}
}




function login() {

	let id_give = $("#userId").val();
    let pw_give = $("#userPw").val();

     console.log(id_give);

	if (id_give == "") {
		alert('아이디를 입력해주세요');
        $("#userId").focus()
        return;
    } else {

    }

    if (pw_give == "") {
		alert('비밀번호를 입력해주세요');
        $("#userPw").focus()
        return;
    } else {

    }

	$.ajax({
		// "url": "localhost:8080/api/users/login",
		"type": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"data":   {   
			username_give:id_give ,
            password_give:pw_give
		},
			
		"datatype" : JSON,
		success: function (response) {
				if(response['result'] == 'success'){

					$.cookie('mytoken', response['token']);
					alert('로그인완료');
					window.location.href = '../index.html'
					$('#side_menu>li:nth-child(1)').remove();
					$('#side_menu').prepend("<li><input type='submit'>LOGOUT</input></li>");

				}else{
					alert(response['msg'])
				}
		},
		error: function (request, error) {
			alert("code:" + request.status + "\n" + "error:" + error);
		}
	})
}


// // 카카오 로그인

// Kakao.init('여기에 자바 스크립트 키를 입력하세요');
// console.log(Kakao.isInitialized());  // sdk초기화여부판단
// //카카오로그인
// function kakaoLogin() {
// 	Kakao.Auth.login({
// 		success: function (response) {
// 			Kakao.API.request({
// 				url: '/v2/user/me',
// 				success: function (response) {
// 					console.log(response)
// 				},
// 				fail: function (error) {
// 					console.log(error)
// 				},
// 			})
// 		},
// 		fail: function (error) {
// 			console.log(error)
// 		},
// 	})
// }


// //카카오로그아웃  

// function kakaoLogout() {
//     if (Kakao.Auth.getAccessToken()) {
//       Kakao.API.request({
//         url: '/v1/user/unlink',
//         success: function (response) {
//         	console.log(response)
//         },
//         fail: function (error) {
//           console.log(error)
//         },
//       })
//       Kakao.Auth.setAccessToken(undefined)
//     }
//   }  