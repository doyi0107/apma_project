
$('submit_menber_info').click(function() {

    var menber_info = {
        id :$("userId").val,
        pw :$("userPW").val,
        name :$("userName").val,
        date :$("userDate").val,
        phone : $("userPhone").val
    }


	$.ajax({
		"url": "localhost:8080/api/users/login",
		"type": "POST",
		"timeout": 0,
		"headers": {
			"Content-Type": "application/json"
		},
		"data": menber_info,
		success: function (data) {
			if (data == 'loginFail') {
				alert('로그인에 실패하였습니다.')
			} else {
				window.location.href = '../index.html';
			}
		},
		error: function (request, error) {
			alert("code:" + request.status + "\n" + "error:" + error);
		}
	})
})


