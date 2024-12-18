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

    let isHovered = false; // 상태를 추

    // 텍스트 표시
    const showText = () => {
        pElement1.textContent = hoverText1;
        pElement2.textContent = hoverText2;
        pElement1.style.opacity = '1';
        pElement2.style.opacity = '1';
    };


    const hideText = () => {
        pElement1.style.opacity = '0';
        pElement2.style.opacity = '0';
        setTimeout(() => {
            if (!isHovered) {
                pElement1.textContent = '';
                pElement2.textContent = '';
            }
        }, 500); // 애니메이션 시간 동기화
    };

    // hover 시 동작
    element.addEventListener('mouseover', () => {
        if (isHovered) return; // 이미 hover 상태면 실행하지 않음
        isHovered = true;

        element.classList.add('square-mode');
        setTimeout(() => {
            if (isHovered) showText(); // 텍스트 표시
        }, 500); // 도형 변화 애니메이션과 동기화
    });

    // 마우스가 벗어날 때 동작
    element.addEventListener('mouseout', () => {
        if (!isHovered) return; // 이미 원 상태면 실행하지 않음
        isHovered = false;

        element.classList.remove('square-mode');
        hideText(); // 텍스트 숨기기
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const lastShape = document.getElementById('lastShape');

    // 클릭 시 동그라미에서 직사각형으로 변환
    lastShape.addEventListener('click', () => {
        lastShape.classList.toggle('rectangle');
    });
});
