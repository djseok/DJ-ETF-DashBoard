// GAS에서 배포한 웹 앱 URL을 여기에 붙여넣으세요
const GAS_URL = "https://script.google.com/macros/s/AKfycbx6aAKwNbImfH1K5VpYDskfMpgRWNqMWxDegERWj2Stv82BBYQVBVCOa0hhDNrTrQ--/exec"; 

async function updateDashboard() {
    try {
        const response = await fetch(GAS_URL);
        const data = await response.json();

        // 예시: HTML 파일의 <span id="price-005930"></span> 태그에 삼성전자 가격 넣기
        if(document.getElementById("price-005930")) {
            document.getElementById("price-005930").innerText = data.price;
        }
        
        console.log("데이터 동기화 성공:", data.updated);
    } catch (error) {
        console.error("데이터 불러오기 실패:", error);
    }
}

// 페이지가 로드되면 바로 실행하고, 이후 60초마다 자동 업데이트
updateDashboard();
setInterval(updateDashboard, 60000);
