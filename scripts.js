document.querySelectorAll('.postit').forEach(element => {
    const hoverText1 = element.dataset.hover1; // 첫 번째 텍스트
    const hoverText2 = element.dataset.hover2; // 두 번째 텍스트

    // p 태그 생성
    const pElement1 = document.createElement('p');
    const pElement2 = document.createElement('p');
    pElement1.classList.add('hover-text1'); // 부정어 스타일
    pElement2.classList.add('hover-text2'); // 긍정어 스타일
    element.appendChild(pElement1);
    element.appendChild(pElement2);

    let isSquare = false; // 현재 상태 플래그

    // 상태 전환 함수
    const showText = () => {
        if (!isSquare) {
            element.classList.add('square-mode'); // 사각형 상태 추가
            pElement1.textContent = hoverText1; // 첫 번째 텍스트 설정
            pElement2.textContent = hoverText2; // 두 번째 텍스트 설정
        }
    };

    const hideText = () => {
        if (isSquare) {
            element.classList.remove('square-mode'); // 사각형 상태 제거
            pElement1.textContent = ''; // 텍스트 숨김
            pElement2.textContent = ''; // 텍스트 숨김
        }
    };

    // hover 시 동작
    element.addEventListener('mouseover', () => {
        if (!isSquare) {
            isSquare = true; // 플래그 설정
            element.addEventListener('transitionend', function onTransitionEnd(event) {
                if (event.propertyName === 'width' || event.propertyName === 'height') {
                    showText(); // 텍스트 표시
                    element.removeEventListener('transitionend', onTransitionEnd); // 이벤트 제거
                }
            });
        }
    });

    // 마우스가 벗어날 때 동작
    element.addEventListener('mouseout', () => {
        if (isSquare) {
            isSquare = false; // 플래그 초기화
            hideText(); // 텍스트 숨김
        }
    });
});
