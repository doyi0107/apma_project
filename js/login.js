
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

    	if ($("#userId").val().trim().length == 0) {
        $(this).val("");
        alert("아이디를 입력해주세요.");
        $("#userId").focus();
        return;
      }

      if ($("#userPw").val().trim().length == 0) {
        $(this).val("");
        alert("비밀번호를 입력해주세요.");
        $("#userPw").focus();
        return;
      }


	var login_info = {
		username :$("#userId").val(),
		password :$("#userPw").val(),
    }

     console.log(login_info);

	$.ajax({
		"url": "https://apma2023.net/APMA/join/member",
		"type": "POST",
		data: JSON.stringify(login_info), 
        contentType: 'application/json; charset=utf-8',
		dataType:"json",
		crossDomain : true,
		withCredentials:true
	}).done(function (response,status,xhr) {
        alert('로그인 완료') 
        window.location.href = '../index.html'
        $('#side_menu>li:nth-child(1)').remove();
        $('#side_menu').prepend("<li><input type='submit'>LOGOUT</input></li>");
        console.log(response);    //로그인 성공하면 
        console.log(xhr.getREsponseHeader('Authorization'))// 헤더에 있는 토큰을 받아와서
        localStorage.setItem('accessToken', xhr.getREsponseHeader('Authorization')) // 로컬스토리지 = 디비 , 에다가 셋 에 응답 받은 토큰을 그대로 넣는다
        //로그인 성공시 새로고침 
    
      }).fail(function(response){
          console.log(response.responseJSON);
          if(response.responseJSON.statusCode === 404){
              alert('아이디와 비밀번호를 확인하여 주세요');
          } else{
              alert('서버에 문제가 발생하였습니다.');
          }
        });

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


// "url": "https://apma2023.net/APMA/join/member",
// "type": "POST",
// "headers": {
//     "Content-Type": "application/json"
// },
// "data":   {   
//     username:id_give ,
//     password:pw_give
// },
    
// "datatype" : JSON





    
