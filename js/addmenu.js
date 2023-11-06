const calculateButton = document.querySelector('#total button');
const modal = document.querySelector('#modal');

calculateButton.addEventListener('click', function() {
    if (modalText.textContent === '') {
        alert('구매를 완료한 후에 눌러주세요!');
    } else {
        const orderList = document.querySelector('#eat-list');
        orderList.after($orderMenu)
        modal.style.display = 'block';
    }
});