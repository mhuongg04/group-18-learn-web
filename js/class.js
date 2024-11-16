// Get modal and buttons
const modal = document.getElementById("classModal");
const createClassBtn = document.getElementById("createClassBtn");
const closeModal = document.getElementById("closeModal");

createClassBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("saveClassBtn").addEventListener("click", () => {
    const className = document.getElementById("className").value;
    const academicYear = document.getElementById("academicYear").value;
    const grade = document.getElementById("grade").value;

    if (className && academicYear && grade) {
        alert(`Lớp ${className} (${academicYear}, Khối ${grade}) đã được tạo!`);
        modal.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});
