

document.addEventListener('scroll', function() {
    const blocks = document.querySelectorAll('.container');
    blocks.forEach(container => {
        const blockPosition = container.getBoundingClientRect().top - 700;
        if (blockPosition <= 0) {
            container.classList.add('el-scroll-hidden');
            container.classList.remove('container');
        }
    })
});

