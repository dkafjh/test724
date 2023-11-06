window.onload = function() {
    const selectBtns = document.querySelectorAll('.select-btn > button');
    const modalText = document.querySelector('#howeat'); // 모달 창의 텍스트 요소
    const modal = document.querySelector('#modal');
    const calculateButton = document.querySelector('#total button');
    const $main = document.querySelector('main'); 
    
    selectBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
            this.parentNode.classList.add('none');
            $main.style.overflow = 'auto'
            modalText.innerHTML = `<h3> ${buttonText} </h3>`;
        });
    });
    
    calculateButton.addEventListener('click', function() {
        if (modalText.textContent === '') {
            alert('구매를 완료한 후에 눌러주세요!');
        } else {
            const eatList = document.querySelector('#eat-list')
            eatList.after($orderMenu)
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
    
    const pizzaMenu = document.querySelectorAll('.menu .flex-box div');
    const $addtopping = document.getElementById('addTopping');
    const sideMenu = document.querySelectorAll('.sidemenu .flex-box div')

    sideMenu.forEach(function(item) {
        item.addEventListener('click', function() {
            const menu = item.querySelector('span').textContent;
            const price = parseFloat(item.getAttribute('data-price'));
            
            const addToOrder = confirm(`주문 목록에 ${menu}를 담으시겠습니까?`);
            if (addToOrder) {
                const existingInput = document.querySelector(`input[name="${menu}`);
                const quantityInput = existingInput ? existingInput.nextElementSibling : null;
    
                if (quantityInput) {
                    quantityInput.value = parseInt(quantityInput.value) + 1;
                } else {
                    const orderItem = document.createElement('input');
                    const quantityItem = document.createElement('input');
    
                    orderItem.type = quantityItem.type = 'text';
                    orderItem.name = quantityItem.name = menu;
                    orderItem.value = `${menu}`;
                    quantityItem.value = 1;
                    quantityItem.min = 1;
    
                    orderItem.readOnly = quantityItem.readOnly = true;
    
                    $orderMenu.appendChild(orderItem);
                    $orderMenu.appendChild(quantityItem);
                }
            }
        });
    });

    pizzaMenu.forEach(function(item) {
        item.addEventListener('click', function() {
            const menu = item.querySelector('span').textContent;
            const price = Number(item.getAttribute('data-price'));
            
            const addToOrder = confirm(`주문 목록에 ${menu}를 담으시겠습니까?`);
            const addToTopping = confirm('토핑을 추가하시겠습니까?')
            
            if (addToOrder) {
                if(addToTopping) {
                    $addtopping.style.display = 'block'
                } else{
                    const existingInput = document.querySelector(`input[name="${menu}`);
                    const priceInput = document.querySelector(`input[name="${price}`);
                    const quantityInput = existingInput ? existingInput.nextElementSibling : null;
                    if (quantityInput) {
                        quantityInput.value = parseInt(quantityInput.value) + 1;
                        priceInput.value = parseInt(price) + price;
                        
                    } else {
                        const orderItem = document.createElement('input');
                        const quantityItem = document.createElement('input');
                        const pirceItem = document.createElement('input');
        
                        orderItem.type = quantityItem.type = pirceItem.type = 'text';
                        orderItem.name = quantityItem.name = pirceItem.type = menu;
                        orderItem.value = `${menu}`;
                        quantityItem.value = 1;
                        quantityItem.min = 1;
                        pirceItem.value = price;
        
                        orderItem.readOnly = quantityItem.readOnly = true;
        
                        $orderMenu.appendChild(orderItem);
                        $orderMenu.appendChild(quantityItem);
                    }
                }
            } else {
                return false;
            }
        });
    });

    const $orderMenu = document.getElementById('orderMenu')
}



