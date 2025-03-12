document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typed-text");
    const mainContent = document.getElementById("mainContent");
    const aboutUsLink = document.getElementById("aboutUsLink");
    const blogLink = document.getElementById("blogLink");

    if (!typedText || !mainContent || !aboutUsLink || !blogLink) {
        console.error("Một trong các phần tử không tồn tại. Kiểm tra lại HTML.");
        return;
    }

    // Thêm hình ảnh chuyển tiếp trên trang bìa
    const homeSliderContent = `
    <div id="homeCarousel" class="carousel slide fade-in show" data-bs-ride="carousel" style="opacity: 0; transition: opacity 0.5s ease-in-out;">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/toudi.PNG" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt=" Tourdi">
            </div>
            <div class="carousel-item">
                <img src="images/da-nang.PNG" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt="Bà Nà Hill">
            </div>
            <div class="carousel-item">
                <img src="images/sapa.PNG" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt="Sapa">
            </div>
            <div class="carousel-item">
                <img src="images/vinhhalong.PNG" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt="Vịnh Hạ Long">
            </div>
            <div class="carousel-item">
                <img src="images/da-lat.PNG" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt="Đà Lạt">
            </div>
            <div class="carousel-item">
                <img src="images/cantho.jpg" class="d-block w-100 img-fluid rounded shadow" style="max-height: 650px; object-fit: cover;" alt="Cần Thơ">
            </div>
        </div>
        <!-- Nút điều hướng -->
        <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>`;

    // Hiển thị slider ngay khi vào web
    mainContent.innerHTML = homeSliderContent;

    setTimeout(() => {
        let homeCarouselElement = document.getElementById("homeCarousel");
        let fadeInElement = document.querySelector(".fade-in");

        if (fadeInElement) {
            fadeInElement.style.opacity = "1";
        }

        if (homeCarouselElement && typeof bootstrap !== "undefined") {
            new bootstrap.Carousel(homeCarouselElement, { interval: 3000 });
        }
    }, 200);

    // Nội dung của "About Us"
    const aboutUsContent = `
    <div class="container mt-4 fade-in" style="opacity: 0; transition: opacity 0.5s ease-in-out;">
        <div class="row">
            <!-- Hiệu ứng trình chiếu ảnh -->
            <div class="col-md-6 d-flex justify-content-center">
                <div id="vietnamCarousel" class="carousel slide me-3" data-bs-ride="carousel" style="width: 100%;">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/vn.jpg" class="d-block w-100 rounded shadow" alt="Ảnh Việt Nam 1">
                        </div>
                        <div class="carousel-item">
                            <img src="images/vn2.jpg" class="d-block w-75 mx-auto rounded shadow" alt="Ảnh Việt Nam 2">
                        </div>
                        <div class="carousel-item">
                            <img src="images/vn4.jpg" class="d-block w-75 mx-auto rounded shadow" alt="Ảnh Việt Nam 2">
                        </div>
                    </div>
                    <!-- Nút điều hướng -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#vietnamCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#vietnamCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>

            <!-- Nội dung văn bản -->
            <div class="col-md-6 d-flex align-items-center">
                <div>
                    <h2 class="text-primary">Du lịch thông minh</h2>
                    <p>Về bản chất, để một thứ gì đó trở nên “thông minh”, cần phải có khả năng tích hợp các công nghệ phức tạp để cho phép khai thác một loạt thông tin sau đó được sử dụng để thông báo cho hoạt động và phát triển sản phẩm.</p>
                </div>
            </div>
        </div>

        <!-- Phần thứ hai -->
        <div class="row align-items-center mt-4">
            <div class="col-md-8">
                <h2 class="text-primary">Hỗ trợ xây dựng lộ trình cá nhân hóa</h2>
                <p>TourDi giúp du khách tự tạo lộ trình phù hợp với sở thích, ngân sách và thời gian của mình.</p>
            </div>
            <div class="col-md-4 text-center">
                <img src="images/camera.png" alt="Máy ảnh du lịch" class="img-fluid rounded shadow animate-image" style="transform: scale(1); transition: transform 0.5s ease-in-out;">
            </div>
        </div>
    </div>`;

    // Nội dung của "Blog"
    const blogContent = `
    <div class="container mt-4 fade-in" style="opacity: 0; transition: opacity 0.5s ease-in-out;">
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow border-primary">
                    <img src="images/dalat.jpg" class="card-img-top" alt="Săn mây Đà Lạt">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Tất tần tật về săn mây Đà Lạt</h5>
                        <p class="card-text">Trang Nguyễn</p>
                        <a href="#" class="text-primary">Xem thêm ...</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow border-primary">
                    <img src="images/travel_packing.jpg" class="card-img-top" alt="Chuẩn bị hành lý">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Bỏ túi những món cần chuẩn...</h5>
                        <p class="card-text">Hà Anh</p>
                        <a href="#" class="text-primary">Xem thêm ...</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow border-primary">
                    <img src="images/cho_dem_nha_trang.jpg" class="card-img-top" alt="Chợ nổi Cái Răng">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Chợ nổi Cái Răng: Nên thử 1 lần</h5>
                        <p class="card-text">David Evo</p>
                        <a href="#" class="text-primary">Xem thêm ...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    // Hiệu ứng gõ chữ
    const text = "HOLA! WELCOME TO TOURDI'S WEBSITE";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Xử lý sự kiện click vào "About Us"
    aboutUsLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainContent.innerHTML = aboutUsContent;

        setTimeout(() => {
            let vietnamCarouselElement = document.getElementById("vietnamCarousel");
            if (vietnamCarouselElement) {
                new bootstrap.Carousel(vietnamCarouselElement);
            }

            let fadeInElement = document.querySelector(".fade-in");
            let animateImage = document.querySelector(".animate-image");

            if (fadeInElement) {
                fadeInElement.style.opacity = "1";
            }
            if (animateImage) {
                animateImage.style.transform = "scale(1.1)";
            }
        }, 200);
    });

    // Xử lý sự kiện click vào "Blog"
    blogLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainContent.innerHTML = blogContent;

        setTimeout(() => {
            let fadeInElement = document.querySelector(".fade-in");
            if (fadeInElement) {
                fadeInElement.style.opacity = "1";
            }
        }, 200);
    });
});

// Reload = home
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("homeButton");

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.reload();
        });
    } else {
        console.error("Không tìm thấy nút Home. Kiểm tra lại ID.");
    }
});

//tạo nút đăng kí
document.getElementById("signupForm").addEventListener("submit", function (e) { 
    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    let userId = "@" + Math.random().toString(36).substring(2, 8); // Tạo ID ngẫu nhiên

    // Lưu user vào localStorage
    let user = { fullname, email, userId };
    localStorage.setItem("user", JSON.stringify(user));

    // Cập nhật UI
    updateUserUI(user);

    // Đóng modal sau khi đăng ký thành công
    let signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    signupModal.hide();
});

function updateUserUI(user) {
    document.getElementById("usernameDisplay").textContent = user.fullname;
    document.getElementById("userIdDisplay").textContent = "ID: " + user.userId;
    document.getElementById("navUsername").textContent = user.fullname;

    // Ẩn nút đăng ký, hiển thị dropdown user
    document.getElementById("signupNav").classList.add("d-none");
    document.getElementById("accountNav").classList.remove("d-none");
}

// Kiểm tra nếu user đã đăng ký trước đó
window.onload = function () {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        updateUserUI(user);
    }
};

// Xử lý đăng xuất
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("user");
    location.reload();
});