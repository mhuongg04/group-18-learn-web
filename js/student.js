// Get modal and buttons
const modal = document.getElementById("studentModal");
const createClassBtn = document.getElementById("createStudentBtn");
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

document.getElementById("saveStudentBtn").addEventListener("click", () => {
    const studentName = document.getElementById("studentName").value;
    const studentSBD = document.getElementById("studentSBD").value;
    const DoB = document.getElementById("DoB").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const sex = document.getElementById("sex").value;

    if (studentName && studentSBD && DoB && sex && phoneNumber) {
        alert(`Học sinh ${studentName} (${studentSBD}, giới tính ${sex}, ngày sinh ${DoB}, SĐT ${phoneNumber}) đã được tạo!`);
        modal.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});
