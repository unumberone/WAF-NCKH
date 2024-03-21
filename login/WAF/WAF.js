const iframe = document.querySelector('iframe');
const list_iframe = document.querySelectorAll('li.iframe');

const first_iframe = document.querySelector('.first-iframe'); /// nội dung first_iframe tức là nội dung hiển thị đầu tiên của trang chủ overview
const first_tille_iframe = document.querySelector('.first-tille-iframe');

var element_active = first_tille_iframe;

list_iframe.forEach(function(element) {
    element.addEventListener('click', function () {
        element_active.classList.remove('active');
        first_iframe.style.display = "none";
        
        element.classList.add('active');
        var new_src = '/html/' + element.getElementsByTagName('span')[1].innerText + '.html';
        iframe.src = new_src;
        // iframe.classList.remove('hide');
        iframe.parentElement.style.display = "block";

        element_active = element;
    })    
});

first_tille_iframe.addEventListener('click', function() {
    first_tille_iframe.classList.add('active');
    first_iframe.style.display = "block";
    iframe.parentElement.style.display = "none";
    element_active.classList.remove('active');
    element_active = first_tille_iframe;
})