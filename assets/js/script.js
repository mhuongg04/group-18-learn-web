// Hiển thị hoặc ẩn các tùy chọn thêm
function toggleAddOptions() {
    const options = document.getElementById("addOptions");
    options.style.display = options.style.display === "block" ? "none" : "block";
}

// Hiển thị popup thêm giáo viên hoặc nhóm giáo viên
function showPopup(type) {
    if (type === "teacher") {
        document.getElementById("teacherPopup").style.display = "flex";
    } else if (type === "teacherGroup") {
        document.getElementById("groupPopup").style.display = "flex";
    }
    toggleAddOptions();
}

// Đóng popup
function closePopup() {
    document.getElementById("teacherPopup").style.display = "none";
    document.getElementById("groupPopup").style.display = "none";
}

// Cập nhật thông báo khi danh sách trống
function updateEmptyMessage() {
    const teacherList = document.getElementById("teacherList");
    const emptyMessage = document.getElementById("emptyMessage");

    if (teacherList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Lưu giáo viên và hiển thị tên
function saveTeacher() {
    const name = document.getElementById("teacherName").value;
    const contact = document.getElementById("teacherContact").value;

    if (name && (contact.includes("@") || /^\d+$/.test(contact))) {
        addListItem(`${name} - ${contact}`);
        document.getElementById("teacherName").value = "";
        document.getElementById("teacherContact").value = "";
        closePopup();
    } else {
        alert("Vui lòng nhập tên và số điện thoại hoặc email hợp lệ.");
    }
}

// Lưu nhóm giáo viên và hiển thị tên nhóm
function saveGroup() {
    const groupName = document.getElementById("groupName").value;
    if (groupName) {
        addListItem(groupName);
        document.getElementById("groupName").value = "";
        closePopup();
    } else {
        alert("Vui lòng nhập tên nhóm giáo viên.");
    }
}


// Thêm mục vào danh sách và cập nhật thông báo
function addListItem(text) {
    const teacherList = document.getElementById("teacherList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${text} <span class="three-dots" onclick="showOptions(this)">⋮</span>`;

    const optionsMenu = document.createElement("div");
    optionsMenu.className = "options-menu";
    optionsMenu.innerHTML = `
        <div onclick="editItem(this)">Sửa</div>
        <div onclick="deleteItem(this)">Xóa</div>
    `;
    listItem.appendChild(optionsMenu);
    teacherList.appendChild(listItem);

    console.log(teacherList.innerHTML);
    // Hiển thị nút Lưu khi có ít nhất một mục trong danh sách
    document.getElementById("saveButtonContainer").style.display = "block";

    updateEmptyMessage();
}

// Cập nhật danh sách khi lưu và thông báo thành công
function saveAll() {
    // Giả sử bạn sẽ lưu dữ liệu vào cơ sở dữ liệu hoặc localStorage
    // Hiển thị thông báo cập nhật thông tin thành công
    alert("Cập nhật thông tin thành công!");

    // Ẩn nút Lưu sau khi lưu thành công
    document.getElementById("saveButtonContainer").style.display = "none";
}

// Hiển thị menu tùy chọn (Sửa/Xóa)
function showOptions(element) {
    const optionsMenu = element.nextElementSibling;
    optionsMenu.style.display = optionsMenu.style.display === "block" ? "none" : "block";
}

// Xóa mục và cập nhật thông báo
function deleteItem(element) {
    const listItem = element.parentElement.parentElement;
    listItem.remove();
    updateEmptyMessage();
}

// Kiểm tra trạng thái ban đầu
document.addEventListener("DOMContentLoaded", updateEmptyMessage);

// Tìm kiếm trong danh sách
function searchList() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const listItems = document.getElementById("teacherList").getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }
}

// Lắng nghe sự kiện gõ phím trong ô tìm kiếm
document.getElementById("searchInput").addEventListener("input", searchList);
