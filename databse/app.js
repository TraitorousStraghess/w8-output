const button = document.querySelector('.button-submission');

button.addEventListener('click', function() {
    // ボタンが押されたときの処理
    event.preventDefault();
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    // 保存する
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
    
});

window.onload = function() {
    // ページ読み込み時の処理
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    // 取得した値を入力欄に入れる
    document.querySelector('#email').value = savedEmail;
    document.querySelector('#password').value = savedPassword;

};