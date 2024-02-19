function getLogin(){
    console.log('다시 재활');
    const form = document.forms['loginForm'];
    const data = {
        name : form.name.value,
        password : form.password.value
    };
    const result = document.querySelector('.resultBox');
    console.dir(data);
    $.ajax({
        url : `/post/login`,
        type : 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success : function(data){
            console.log(data);
            console.log(data.name);
            console.log(data.password);
            result.textContent = `로그인 했습니다. 적어주신 이름은 ${data.name},${data.password}입니다`;
        }
    })
}