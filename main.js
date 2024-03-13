document.addEventListener('DOMContentLoaded', function () {
    const login = document.getElementById('login');

    login.addEventListener('click', function () {

        var account = document.getElementById('account').value;
        var password = document.getElementById('password').value;
        var remember = document.getElementById('remember').checked;

        // Kiểm tra xem tài khoản và mật khẩu có đúng không
        if (account === 'admin' && password === 'admin') {
            var ok = true;
            if (ok) {
                // Chuyển hướng sang trang test.html
               window.location.href='login/WAF/loginWAFest.html'
            }
            alert('Login successful!');

        } else {
            alert('Invalid account or password. Please try again.');
        }
        

    })
});