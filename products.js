// 文件上传显示文件名
const fileUpload = document.getElementById('fileUpload');
if (fileUpload) {
    fileUpload.addEventListener('change', function() {
        const fileName = this.files[0] ? this.files[0].name : '未选择文件';
        document.querySelector('.file-name').textContent = fileName;
    });
}

// 报价表单提交
const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = quoteForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '提交中...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = '提交成功！';
            submitButton.style.background = '#43e97b';
            
            setTimeout(() => {
                quoteForm.reset();
                document.querySelector('.file-name').textContent = '未选择文件';
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// 产品卡片点击
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('product-link')) {
            console.log('查看产品详情');
        }
    });
});
