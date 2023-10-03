window.onload = function(){

    const selectBtns = document.querySelectorAll('.select-btn > button');
    const modalText = document.querySelector('#howeat'); // 모달 창의 텍스트 요소
    const modal = document.querySelector('#modal');
    
    selectBtns.forEach(function(button) {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            console.log(buttonText)
            this.parentNode.classList.add('none');
            modalText.textContent = buttonText
        });
    });
    
    const calculateButton = document.querySelector('#total button');
    calculateButton.addEventListener('click', function () {
        if(modalText.textContent===''){
            alert('구매를 완료한 후에 눌러주세요!')
        } else {
            modal.style.display = 'block';
        }
    });

    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click' , ()=>{
        modal.style.display = 'none'
    })
}
