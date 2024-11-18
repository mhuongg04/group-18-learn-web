function showTests(grade) {
    const testTitle = document.getElementById('testTitle');
    const testList = document.getElementById('testList');

    // Cập nhật tiêu đề hiển thị
    testTitle.innerText = grade === 'all' ? 'Tất cả các đề thi' : `Đề thi cho Khối ${grade}`;

    // Xóa nội dung cũ
    testList.innerHTML = '';

}

// Hiển thị tất cả đề thi khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    showTests('all');
});