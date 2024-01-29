  

function submit_menber_info(){

	var menber_info = {
		username :$("#userId").val(),
		password :$("#userPw").val(),
		name :$("#userName").val(),
		birthDay :$("#userDate").val(),
		phoneNumber : $("#userPhone").val()
    }

	console.log(menber_info)
	console.log(location.origin);

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

	
	if ($("#userName").val().trim().length == 0) {
        $(this).val("");
        alert("이름을 입력해주세요.");
        $("#userName").focus();
		return;
      }

	if ($("#userPhone").val().trim().length == 0) {
        $(this).val("");
        alert("이름을 입력해주세요.");
        $("#userPhone").focus();
		return;
      }


	  const regExp
	  = /^[0][0-9]{1,2}[0-9]{3,4}[0-9]{4}/;
	
	  if (!regExp.test($("#userPhone").val())) {
		alert("전화번호의 형식이 올바르지 않습니다");
		return false;
	  }

	$.ajax({
		"url":"https://apma2023.net/login",
		"type":"POST",
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(menber_info), 
		dataType:"json",
		crossDomain : true,
		withCredentials:true,
	}).done(function (resp) {
			// 결과가 정상이면 done 실행
			alert("회원가입이 완료되었습니다.");
			console.log(resp);
			location.href = "./login.html";
		}).fail(function (error) {
			// 실패하면 fail 실행
			alert("회원가입이 실패하였습니다.");
			alert(JSON.stringify(error));
		
		});

}



	
	




