function getLogin(){
    console.log('다시 재활');
    const form = document.forms['loginForm'];
    data = {
        name : form.name.value
    };
    const result = document.querySelector('.resultBox');
    console.log(data);
    $.ajax({
        url : '/get/login',
        type : 'GET',
        contentType : 'application/json',
        data : data,
        success : function(data){
            console.log(data);
            console.log(data.name);
            result.textContent = `로그인 했습니다. 적어주신 이름은 ${data}입니다`;
        }
    })
}