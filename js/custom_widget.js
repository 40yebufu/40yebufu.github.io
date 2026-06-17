// 更多推荐广告轮播
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.ad-todayCard .carousel-container');
    if (!container) {
        console.log('未找到轮播容器');
        return;
    }
    var slides = container.querySelectorAll('.carousel-slide');
    var total = slides.length;
    if (total === 0) {
        console.log('没有轮播项');
        return;
    }
    var currentIndex = 0;

    function showSlide(index) {
        if (index >= total) { currentIndex = 0; }
        else if (index < 0) { currentIndex = total - 1; }
        else { currentIndex = index; }
        container.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 3000);
});