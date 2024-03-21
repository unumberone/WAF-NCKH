const parentMenuList = document.querySelectorAll('.title-menu');

parentMenuList.forEach(parentMenu => {
    parentMenu?.addEventListener('click', () => {
        // Lấy phần tử ul ngay sau phần tử a đầu tiên
        const childMenu = parentMenu?.nextElementSibling;
        // Kiểm tra nếu childMenu tồn tại và không có lớp 'hide' thì thêm lớp 'hide', ngược lại, loại bỏ lớp 'hide'
        if (childMenu) {
            if (!childMenu.classList.contains('hide')) {
                childMenu.classList.add('hide');
            } else {
                childMenu.classList.remove('hide');
            }
        }
    });
});

