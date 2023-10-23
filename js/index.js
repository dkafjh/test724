const ClassicData = {
    "치즈피자": {
        "name": "치즈피자",
        "price": 8900
    },
    "페페로니피자": {
        "name": "페페로니피자",
        "price": 9900
    },
    "콤비네이션피자": {
        "name": "콤비네이션피자",
        "price": 10900
    },
    "포테이토피자": {
        "name": "포테이토피자",
        "price": 11900
    },
    "불고기피자": {
        "name": "불고기피자",
        "price": 11900
    }
};

const SpecialData = {
    "불닭고구마피자": {
        "name": "불닭고구마피자",
        "price": 13900
    },
    "핫치킨피자": {
        "name": "핫치킨피자",
        "price": 10900
    },
    "비프퀘사디아피자": {
        "name": "비프퀘사디아피자",
        "price": 13900
    },
    "트러플머쉬룸피자": {
        "name": "트러플머쉬룸피자",
        "price": 13900
    },
    "고구마피자": {
        "name": "고구마피자",
        "price": 10900
    }
};

window.onload = function() {
    const selectBtns = document.querySelectorAll('.select-btn > button');
    const modalText = document.querySelector('#howeat'); // 모달 창의 텍스트 요소
    const modal = document.querySelector('#modal');
    const calculateButton = document.querySelector('#total button');
    
    selectBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
            this.parentNode.classList.add('none');
            modalText.innerHTML = `<h3> ${buttonText} </h3>`;
        });
    });
    
    calculateButton.addEventListener('click', function() {
        if (modalText.textContent === '') {
            alert('구매를 완료한 후에 눌러주세요!');
        } else {
            modal.style.display = 'block';
        }
    });
    
    const closeBtn = document.querySelectorAll('.close-btn');
    closeBtn.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
    
    const gnbLinks = document.querySelectorAll('.gnb a');
    const menuSections = {
        'classicMenu': document.getElementById('classicMenu'),
        'specialMenu': document.getElementById('specialMenu'),
        'sideMenu': document.getElementById('sideMenu')
    };
    
    gnbLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // 모든 메뉴 숨김
            for (const menuId in menuSections) {
                if (menuSections.hasOwnProperty(menuId)) {
                    menuSections[menuId].style.display = 'none';
                }
            }

            // GNB 버튼 클릭 시 해당 메뉴 표시
            const menuId = gnbButtons[link.id];
            menuSections[menuId].style.display = 'block';
        });
    });
    
    const gnbButtons = {
        'classicMenuBtn': 'classicMenu',
        'specialMenuBtn': 'specialMenu',
        'sideMenuBtn': 'sideMenu'
    };
    
    const $classicMenu = document.querySelectorAll('#classicMenu .flex-box > div');
    const $specialMenu = document.querySelectorAll('#specialMenu .flex-box > div');
    const $addtopping = document.getElementById('addTopping');
    
    $classicMenu.forEach(function(item) {
        item.addEventListener('click', function() {
            if (!confirm('주문 목록에 담으시겠습니까?')) {
                // 사용자가 주문 목록에 담지 않을 경우
            } else {
                if (confirm('토핑을 추가하시겠습니까?')) {
                    // 토핑을 추가할 경우
                    $addtopping.style.display = 'block';
                } else {
                    // 토핑을 추가하지 않을 경우
                }
            }
        });
    });

    $specialMenu.forEach(function(item) {
        item.addEventListener('click', function() {
            if (!confirm('주문 목록에 담으시겠습니까?')) {
                // 사용자가 주문 목록에 담지 않을 경우
            } else {
                if (confirm('토핑을 추가하시겠습니까?')) {
                    // 토핑을 추가할 경우
                    $addtopping.style.display = 'block';
                } else {
                    // 토핑을 추가하지 않을 경우
                }
            }
        });
    });
}



