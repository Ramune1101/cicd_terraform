 document.addEventListener('DOMContentLoaded', function() {
    // 현재 시간을 표시
    const deployTime = new Date().toLocaleString();
    document.getElementById('deployTime').textContent = deployTime;
}); 
