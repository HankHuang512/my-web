window.onload = function() {
    let index = 0; // 初始化圖片索引
    const images = document.querySelectorAll(".mainimg .rotate img"); // 取得所有圖片
    const totalImages = images.length; // 圖片總數

    setInterval(function() {
        // 隱藏當前顯示的圖片
        images[index].style.display = 'none';

        // 更新圖片索引
        index = (index + 1) % totalImages; // 使索引循環

        // 顯示下一張圖片
        images[index].style.display = 'block';
    }, 5000); // 每5秒更新一次圖片
};


