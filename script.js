// 表单提交处理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢你的留言！我会尽快回复你。');
    this.reset();
});

// 简单的动画效果 - 滚动时显示部分
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始设置
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
});
// 视差滚动效果
let lastScroll = 0;
const parallaxIntensity = 15; // 控制滚动强度

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    const scrollDiff = currentScroll - lastScroll;
    
    // 计算背景位置
    const bgPosition = (scrollDiff * parallaxIntensity) + currentScroll;
    document.body.style.backgroundPositionY = bgPosition * 0.5 + 'px';
    
    // 保存当前滚动位置
    lastScroll = currentScroll;
    
    // 动态调整透明度
    const projectsSection = document.getElementById('projects');
    const opacity = 1 - (currentScroll * 0.002);
    projectsSection.style.opacity = Math.max(0.3, opacity);
});

// 初始化背景位置
document.body.style.backgroundPositionY = '0px';