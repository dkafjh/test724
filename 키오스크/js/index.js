window.onload = function(){

    const selectBtns = document.querySelectorAll('.select-btn > button');
    const modalText = document.querySelector('#howeat'); // 모달 창의 텍스트 요소
    const modal = document.querySelector('#modal');
    const gnbBtn = document.querySelector('.gnb a')
    
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
        if(modalText.textContent === ''){
            alert('구매를 완료한 후에 눌러주세요!')
        } else {
            modal.style.display = 'block';
        }
    });

    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click' , ()=>{
        modal.style.display = 'none'
    })

    const gnbLinks = document.querySelectorAll('.gnb a');
    gnbLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // 여기에 메뉴 표시 및 숨김 로직 추가
            for (const menuId in menuSections) {
                if (menuSections.hasOwnProperty(menuId)) {
                    menuSections[menuId].style.visibility = 'hidden';
                }
            }
        
            // GNB 버튼 클릭 시 해당 메뉴 표시
            for (const btnId in gnbButtons) {
                if (gnbButtons.hasOwnProperty(btnId)) {
                    const button = document.getElementById(btnId);
                    button.addEventListener('click', event => {
                        event.preventDefault();
                        const menuId = gnbButtons[btnId];
                        for (const id in menuSections) {
                            if (menuSections.hasOwnProperty(id)) {
                                menuSections[id].style.visibility = (id === menuId) ? 'visible' : 'hidden';
                            }
                        }
                    });
                }
            }
        });
    });

    const menuSections = {
        'classicMenu': document.getElementById('classicMenu'),
        'specialMenu': document.getElementById('specialMenu'),
        'sideMenu': document.getElementById('sideMenu')
    };

    const gnbButtons = {
        'classicMenuBtn': 'classicMenu',
        'specialMenuBtn': 'specialMenu',
        'sideMenuBtn': 'sideMenu'
    };

    // 초기에 모든 메뉴 숨기기

}    
