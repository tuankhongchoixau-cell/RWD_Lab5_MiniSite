
/* =====================================
   1. DỮ LIỆU SẢN PHẨM
===================================== */

const products = [
    {
        id: "banh-mi",
        name: "Bánh mì đặc biệt",
        category: "Đồ ăn nhanh",
        categoryId: "do-an-nhanh",
        price: "25.000đ",
        image: "2",
        description: "Bánh mì giòn cùng nhân thịt, pate và rau tươi.",
        detail: "Bánh mì đặc biệt có lớp vỏ giòn, nhân thịt, pate, dưa leo, rau thơm và nước sốt hấp dẫn. Phù hợp cho bữa sáng hoặc bữa ăn nhanh.",
        restaurant: "Góc Phố Food",
        time: "15 phút"
    },
    {
        id: "com-ga",
        name: "Cơm gà thơm ngon",
        category: "Món cơm",
        categoryId: "mon-com",
        price: "45.000đ",
        image: "3",
        description: "Cơm dẻo ăn kèm thịt gà và nước sốt đặc trưng.",
        detail: "Cơm gà kết hợp cơm nấu thơm, thịt gà mềm và nước sốt đậm đà. Món ăn phù hợp cho bữa trưa và bữa tối.",
        restaurant: "Bếp Nhà Mình",
        time: "20 phút"
    },
    {
        id: "bun-bo",
        name: "Bún bò đặc biệt",
        category: "Món nước",
        categoryId: "mon-nuoc",
        price: "50.000đ",
        image: "4",
        description: "Nước dùng đậm đà cùng bún, thịt bò và rau.",
        detail: "Bún bò có nước dùng thơm, kết hợp bún, thịt bò, rau sống và các loại gia vị. Đây là món ăn được nhiều người yêu thích.",
        restaurant: "Bún Việt",
        time: "20 phút"
    },
    {
        id: "pho-bo",
        name: "Phở bò truyền thống",
        category: "Món nước",
        categoryId: "mon-nuoc",
        price: "55.000đ",
        image: "5",
        description: "Phở nóng với nước dùng thơm và thịt bò mềm.",
        detail: "Phở bò truyền thống có bánh phở mềm, nước dùng thơm và thịt bò. Món ăn thường được dùng kèm rau thơm và gia vị.",
        restaurant: "Bún Việt",
        time: "20 phút"
    },

    /* 4 SẢN PHẨM MỚI */
    {
        id: "com-tam",
        name: "Cơm tấm sườn",
        category: "Món cơm",
        categoryId: "mon-com",
        price: "45.000đ",
        image: "2.1",
        description: "Cơm tấm ăn cùng sườn nướng và nước mắm.",
        detail: "Cơm tấm sườn gồm cơm tấm, sườn nướng, đồ chua và nước mắm pha. Đây là món ăn quen thuộc trong ẩm thực miền Nam.",
        restaurant: "Bếp Nhà Mình",
        time: "20 phút"
    },
    {
        id: "goi-cuon",
        name: "Gỏi cuốn tôm thịt",
        category: "Món khai vị",
        categoryId: "mon-khai-vi",
        price: "30.000đ",
        image: "2.2",
        description: "Gỏi cuốn tươi với tôm, thịt và rau sống.",
        detail: "Gỏi cuốn được cuốn bằng bánh tráng với tôm, thịt, bún và rau sống. Món ăn được dùng cùng nước chấm.",
        restaurant: "Góc Phố Food",
        time: "10 phút"
    },
    {
        id: "hu-tieu",
        name: "Hủ tiếu Nam Vang",
        category: "Món nước",
        categoryId: "mon-nuoc",
        price: "45.000đ",
        image: "2.3",
        description: "Hủ tiếu với tôm, thịt và nước dùng thơm.",
        detail: "Hủ tiếu Nam Vang có sợi hủ tiếu, tôm, thịt và các loại topping. Nước dùng mang hương vị đặc trưng.",
        restaurant: "Bún Việt",
        time: "20 phút"
    },
    {
        id: "mi-xao",
        name: "Mì xào thập cẩm",
        category: "Đồ ăn nhanh",
        categoryId: "do-an-nhanh",
        price: "40.000đ",
        image: "2.4",
        description: "Mì xào cùng rau củ và nhiều loại topping.",
        detail: "Mì xào thập cẩm kết hợp mì, rau củ và các loại topping. Món ăn có hương vị đậm đà và dễ thưởng thức.",
        restaurant: "Góc Phố Food",
        time: "15 phút"
    }
];


/* =====================================
   2. DỮ LIỆU QUÁN ĂN
===================================== */

const restaurants = [
    {
        id: "bep-nha-minh",
        name: "Bếp Nhà Mình",
        category: "Ẩm thực gia đình",
        image: "6",
        address: "12 Đường Ẩm Thực, TP. Hồ Chí Minh",
        phone: "0900 000 001",
        hours: "08:00 - 21:00",
        specialties: ["Cơm gà", "Cơm tấm", "Món gia đình"],
        description: "Bếp Nhà Mình giới thiệu các món cơm, món xào và những món ăn quen thuộc trong không gian ấm cúng."
    },
    {
        id: "goc-pho-food",
        name: "Góc Phố Food",
        category: "Ẩm thực đường phố",
        image: "7",
        address: "25 Phố Ẩm Thực, TP. Hồ Chí Minh",
        phone: "0900 000 002",
        hours: "09:00 - 22:00",
        specialties: ["Bánh mì", "Gỏi cuốn", "Mì xào"],
        description: "Góc Phố Food giới thiệu các món ăn nhanh và đồ ăn đường phố, phù hợp cho những buổi ăn nhẹ hoặc gặp gỡ bạn bè."
    },
    {
        id: "bun-viet",
        name: "Bún Việt",
        category: "Ẩm thực Việt Nam",
        image: "8",
        address: "36 Đường Món Ngon, TP. Hồ Chí Minh",
        phone: "0900 000 003",
        hours: "06:00 - 20:00",
        specialties: ["Bún bò", "Phở bò", "Hủ tiếu"],
        description: "Bún Việt chuyên giới thiệu các món nước quen thuộc trong ẩm thực Việt Nam."
    },

    /* QUÁN ĂN MỚI */
    {
        id: "nha-hang-huong-viet",
        name: "Nhà Hàng Hương Việt",
        category: "Nhà hàng Việt Nam",
        image: "2.5",
        address: "48 Đường Ẩm Thực, TP. Hồ Chí Minh",
        phone: "0900 000 004",
        hours: "10:00 - 22:00",
        specialties: ["Món Việt", "Món nướng", "Món gia đình"],
        description: "Nhà Hàng Hương Việt giới thiệu các món ăn mang phong cách Việt Nam, phù hợp cho những bữa ăn gia đình và các buổi gặp mặt."
    }
];


/* =====================================
   3. ĐƯỜNG DẪN ẢNH
===================================== */

// Ảnh cũ giữ nguyên toàn bộ tên ban đầu.
// Ảnh mới sử dụng tiền tố 2.

const imageFiles = {
    "1": {
        original: "1.jpg",
        webp: "1.webp"
    },
    "2": {
        original: "2.jpg",
        webp: "2.webp"
    },
    "3": {
        original: "3.jpg",
        webp: "3.webp"
    },
    "4": {
        original: "4.jpeg",
        webp: "4.webp"
    },
    "5": {
        original: "5.jfif",
        webp: "5.webp"
    },
    "6": {
        original: "6.jfif",
        webp: "6.webp"
    },
    "7": {
        original: "7.jpg",
        webp: "7.webp"
    },
    "8": {
        original: "8.jfif",
        webp: "8.webp"
    },
    "9": {
        original: "9.jpg",
        webp: "9.webp"
    },
    "10": {
        original: "10.jpg",
        webp: "10.webp"
    },

    /* ẢNH MỚI */
    "2.1": {
        original: "2.1.jfif",
        webp: "2.1.webp"
    },
    "2.2": {
        original: "2.2.jpg",
        webp: "2.2.webp"
    },
    "2.3": {
        original: "2.3.jpg",
        webp: "2.3.webp"
    },
    "2.4": {
        original: "2.4.jfif",
        webp: "2.4.webp"
    },
    "2.5": {
        original: "2.5.jfif",
        webp: "2.5.webp"
    }
};

const isPagesFolder =
    window.location.pathname.includes("/pages/");

const assetRoot = isPagesFolder
    ? "../assets/"
    : "assets/";

const pageRoot = isPagesFolder
    ? ""
    : "pages/";


/* =====================================
   4. HÀM LẤY ẢNH
===================================== */

function getImageHtml(image, alt) {

    const files = imageFiles[image];

    // Nếu chưa khai báo ảnh thì báo lỗi rõ ràng
    if (!files) {
        console.error("Chưa khai báo ảnh:", image);

        return `
            <div class="empty-result">
                <p>Chưa có ảnh cho nội dung này.</p>
            </div>
        `;
    }

    return `
        <picture>
            <source
                srcset="${assetRoot}img/optimized/${files.webp}"
                type="image/webp">

            <img
                src="${assetRoot}img/original/${files.original}"
                alt="${alt}"
                loading="lazy">
        </picture>
    `;
}


/* =====================================
   5. CARD SẢN PHẨM
===================================== */

function renderProductCard(product) {

    const detailUrl =
        `${pageRoot}product-detail.html?id=${encodeURIComponent(product.id)}`;

    const orderUrl =
        `${pageRoot}order.html?product=${encodeURIComponent(product.id)}`;

    return `
        <article class="product-card">

            <a href="${detailUrl}" class="product-image-link">
                ${getImageHtml(product.image, product.name)}
            </a>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <a href="${detailUrl}" class="product-title">
                    ${product.name}
                </a>

                <p>${product.description}</p>

                <div class="product-bottom">
                    <strong>${product.price}</strong>

                    <a href="${orderUrl}" class="btn btn-small">
                        Đặt món
                    </a>
                </div>

            </div>
        </article>
    `;
}


/* =====================================
   6. CARD QUÁN ĂN
===================================== */

function renderRestaurantCard(restaurant) {

    const detailUrl =
        `${pageRoot}restaurant-detail.html?id=${encodeURIComponent(restaurant.id)}`;

    return `
        <article class="restaurant-card">

            <a href="${detailUrl}" class="restaurant-image-link">
                ${getImageHtml(restaurant.image, restaurant.name)}
            </a>

            <div class="restaurant-info">

                <span class="restaurant-type">
                    ${restaurant.category}
                </span>

                <a href="${detailUrl}" class="restaurant-title">
                    ${restaurant.name}
                </a>

                <p>${restaurant.description}</p>

                <p class="restaurant-address">
                    📍 ${restaurant.address}
                </p>

                <a href="${detailUrl}" class="restaurant-link">
                    Xem thông tin chi tiết →
                </a>

            </div>
        </article>
    `;
}


/* =====================================
   7. DANH SÁCH VÀ HIỂN THỊ SẢN PHẨM
===================================== */

const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const categoryFilter = document.getElementById("categoryFilter");
const productCount = document.getElementById("productCount");

function displayProducts(list) {

    if (!productGrid) return;

    if (list.length === 0) {

        productGrid.innerHTML = `
            <div class="empty-result">
                <h3>Không tìm thấy món ăn</h3>
                <p>Vui lòng thử từ khóa hoặc danh mục khác.</p>
            </div>
        `;

    } else {

        productGrid.innerHTML = list
            .map(product => renderProductCard(product))
            .join("");

    }

    if (productCount) {
        productCount.textContent =
            `Hiển thị ${list.length} / ${products.length} món ăn`;
    }
}


/* =====================================
   8. TÌM KIẾM VÀ LỌC
===================================== */

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}

function filterProducts() {

    if (!productGrid) return;

    const keyword = productSearch
        ? normalizeText(productSearch.value.trim())
        : "";

    const category = categoryFilter
        ? categoryFilter.value
        : "all";

    const filtered = products.filter(function (product) {

        const searchableText = normalizeText(
            product.name + " " +
            product.category + " " +
            product.description + " " +
            product.restaurant
        );

        const matchesKeyword =
            searchableText.includes(keyword);

        const matchesCategory =
            category === "all" ||
            product.categoryId === category;

        return matchesKeyword && matchesCategory;
    });

    displayProducts(filtered);
}

if (productGrid) {

    displayProducts(products);

    if (productSearch) {
        productSearch.addEventListener("input", filterProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterProducts);
    }
}


/* =====================================
   9. HIỂN THỊ QUÁN ĂN
===================================== */

const restaurantGrid =
    document.getElementById("restaurantGrid");

if (restaurantGrid) {

    const restaurantList = isPagesFolder
        ? restaurants
        : restaurants.slice(0, 3);

    restaurantGrid.innerHTML = restaurantList
        .map(restaurant => renderRestaurantCard(restaurant))
        .join("");
}


/* =====================================
   10. CHI TIẾT SẢN PHẨM
===================================== */

const productDetail =
    document.getElementById("productDetail");

const relatedProducts =
    document.getElementById("relatedProducts");

if (productDetail) {

    const params =
        new URLSearchParams(window.location.search);

    const productId = params.get("id");

    const currentProduct = products.find(function (product) {
        return product.id === productId;
    });

    if (!currentProduct) {

        productDetail.innerHTML = `
            <div class="not-found">
                <h2>Không tìm thấy sản phẩm</h2>
                <p>Sản phẩm bạn đang tìm kiếm không tồn tại.</p>
                <br>
                <a href="products.html" class="btn btn-primary">
                    Quay lại thực đơn
                </a>
            </div>
        `;

    } else {

        document.title =
            currentProduct.name + " - Foodie Việt";

        productDetail.innerHTML = `
            <div class="detail-layout">

                <div class="detail-image">
                    ${getImageHtml(
                        currentProduct.image,
                        currentProduct.name
                    )}
                </div>

                <div class="detail-info">

                    <span class="section-label">
                        ${currentProduct.category}
                    </span>

                    <h2>${currentProduct.name}</h2>

                    <p class="detail-description">
                        ${currentProduct.detail}
                    </p>

                    <span class="detail-price">
                        ${currentProduct.price}
                    </span>

                    <ul class="detail-meta">
                        <li>🍽 Danh mục: ${currentProduct.category}</li>
                        <li>🏠 Quán giới thiệu: ${currentProduct.restaurant}</li>
                        <li>⏱ Thời gian chuẩn bị: ${currentProduct.time}</li>
                        <li>📌 Mã sản phẩm: ${currentProduct.id}</li>
                    </ul>

                    <div class="detail-buttons">

                        <a href="order.html?product=${encodeURIComponent(currentProduct.id)}"
                           class="btn btn-primary">
                            Đặt món ngay
                        </a>

                        <a href="products.html"
                           class="btn btn-outline-dark">
                            Quay lại thực đơn
                        </a>

                    </div>

                </div>
            </div>
        `;

        // Loại bỏ chính sản phẩm đang xem
        const otherProducts = products.filter(function (product) {
            return product.id !== currentProduct.id;
        });

        if (relatedProducts) {

            relatedProducts.innerHTML = otherProducts
                .slice(0, 4)
                .map(product => renderProductCard(product))
                .join("");
        }
    }
}


/* =====================================
   11. CHI TIẾT QUÁN ĂN
===================================== */

const restaurantDetail =
    document.getElementById("restaurantDetail");

const relatedRestaurants =
    document.getElementById("relatedRestaurants");

if (restaurantDetail) {

    const params =
        new URLSearchParams(window.location.search);

    const restaurantId = params.get("id");

    const currentRestaurant = restaurants.find(function (restaurant) {
        return restaurant.id === restaurantId;
    });

    if (!currentRestaurant) {

        restaurantDetail.innerHTML = `
            <div class="not-found">
                <h2>Không tìm thấy quán ăn</h2>
                <p>Thông tin quán ăn không tồn tại.</p>
                <br>
                <a href="about.html" class="btn btn-primary">
                    Quay lại danh sách quán
                </a>
            </div>
        `;

    } else {

        document.title =
            currentRestaurant.name + " - Foodie Việt";

        const specialtyHtml =
            currentRestaurant.specialties
                .map(item =>
                    `<span class="specialty-tag">${item}</span>`
                )
                .join("");

        restaurantDetail.innerHTML = `
            <div class="detail-layout">

                <div class="detail-image">
                    ${getImageHtml(
                        currentRestaurant.image,
                        currentRestaurant.name
                    )}
                </div>

                <div class="detail-info">

                    <span class="section-label">
                        ${currentRestaurant.category}
                    </span>

                    <h2>${currentRestaurant.name}</h2>

                    <p class="detail-description">
                        ${currentRestaurant.description}
                    </p>

                    <ul class="detail-meta">
                        <li>📍 Địa chỉ: ${currentRestaurant.address}</li>
                        <li>☎ Điện thoại: ${currentRestaurant.phone}</li>
                        <li>🕒 Giờ mở cửa: ${currentRestaurant.hours}</li>
                    </ul>

                    <h3>Các món nổi bật</h3>

                    <div class="restaurant-specialties">
                        ${specialtyHtml}
                    </div>

                    <div class="detail-buttons">

                        <a href="products.html"
                           class="btn btn-primary">
                            Xem thực đơn
                        </a>

                        <a href="contact.html"
                           class="btn btn-outline-dark">
                            Liên hệ
                        </a>

                    </div>

                </div>
            </div>
        `;

        // Loại bỏ chính quán đang xem
        const otherRestaurants = restaurants.filter(function (restaurant) {
            return restaurant.id !== currentRestaurant.id;
        });

        if (relatedRestaurants) {

            relatedRestaurants.innerHTML = otherRestaurants
                .map(restaurant => renderRestaurantCard(restaurant))
                .join("");
        }
    }
}


/* =====================================
   12. FORM ĐẶT MÓN
===================================== */

const orderDish = document.getElementById("orderDish");

if (orderDish) {

    products.forEach(function (product) {

        const option = document.createElement("option");

        option.value = product.id;

        option.textContent =
            `${product.name} - ${product.price}`;

        orderDish.appendChild(option);
    });

    const params =
        new URLSearchParams(window.location.search);

    const selectedProduct = params.get("product");

    if (selectedProduct) {
        orderDish.value = selectedProduct;
    }
}

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("orderName").value.trim();

        const phone =
            document.getElementById("orderPhone").value.trim();

        const dish = orderDish.value;

        const quantity =
            Number(document.getElementById("orderQuantity").value);

        const address =
            document.getElementById("orderAddress").value.trim();

        if (!name || !phone || !dish ||
            quantity < 1 || !address) {

            alert("Vui lòng điền đầy đủ thông tin đặt món!");

            return;
        }

        const selectedProduct = products.find(function (product) {
            return product.id === dish;
        });

        alert(
            "Cảm ơn " + name + "!\n\n" +
            "Món ăn: " + selectedProduct.name + "\n" +
            "Giá: " + selectedProduct.price + "\n" +
            "Số lượng: " + quantity + "\n" +
            "Địa chỉ: " + address + "\n\n" +
            "Đây là website minh họa. Đơn hàng chưa được gửi đến máy chủ."
        );

        orderForm.reset();

        document.getElementById("orderQuantity").value = 1;

    });
}

const contactMessageForm =
    document.getElementById("contactMessageForm");

if (contactMessageForm) {

    const nameInput =
        document.getElementById("contactName");

    const emailInput =
        document.getElementById("contactEmail");

    const messageInput =
        document.getElementById("contactMessage");

    const successMessage =
        document.getElementById("contactSuccess");


    // XÓA THÔNG BÁO CŨ KHI NGƯỜI DÙNG NHẬP LẠI
    [nameInput, emailInput, messageInput].forEach(function (input) {

        input.addEventListener("input", function () {

            input.setCustomValidity("");

            successMessage.textContent = "";

            successMessage.className = "form-status";

        });

    });


    // XỬ LÝ KHI BẤM GỬI
    contactMessageForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const message = messageInput.value.trim();


        // XÓA LỖI VALIDATION CŨ
        nameInput.setCustomValidity("");

        emailInput.setCustomValidity("");

        messageInput.setCustomValidity("");


        // KIỂM TRA HỌ TÊN
        if (name.length === 0) {

            nameInput.setCustomValidity(
                "Vui lòng nhập họ và tên."
            );

        }


        // KIỂM TRA EMAIL
        if (email.length === 0) {

            emailInput.setCustomValidity(
                "Vui lòng nhập email."
            );

        } else if (!emailInput.validity.valid) {

            emailInput.setCustomValidity(
                "Vui lòng nhập địa chỉ email hợp lệ."
            );

        }


        // KIỂM TRA NỘI DUNG TỐI THIỂU 20 KÝ TỰ
        if (message.length < 20) {

            messageInput.setCustomValidity(
                "Nội dung phải có ít nhất 20 ký tự. Hiện tại: " +
                message.length + " ký tự."
            );

        }


        // HIỂN THỊ LỖI NẾU DỮ LIỆU KHÔNG HỢP LỆ
        if (!contactMessageForm.checkValidity()) {

            contactMessageForm.reportValidity();

            return;

        }


        // TẠO DỮ LIỆU LIÊN HỆ
        const newMessage = {

            name: name,

            email: email,

            content: message,

            submittedAt: new Date().toISOString()

        };


        // LƯU VÀO LOCAL STORAGE
        try {

            const savedData =
                localStorage.getItem("contactMessages");

            let contactMessages = [];

            if (savedData) {

                const parsedData = JSON.parse(savedData);

                if (Array.isArray(parsedData)) {
                    contactMessages = parsedData;
                }

            }

            // Thêm tin nhắn mới vào đầu danh sách
            contactMessages.unshift(newMessage);

            localStorage.setItem(
                "contactMessages",
                JSON.stringify(contactMessages)
            );


            // THÔNG BÁO THÀNH CÔNG
            successMessage.textContent =
                "✓ Gửi thành công! Cảm ơn " +
                name +
                ". Thông tin liên hệ của bạn đã được lưu.";

            successMessage.className =
                "form-status success";


            // XÓA FORM SAU KHI GỬI THÀNH CÔNG
            contactMessageForm.reset();

            nameInput.setCustomValidity("");

            emailInput.setCustomValidity("");

            messageInput.setCustomValidity("");

        } catch (error) {

            console.error(
                "Lỗi lưu dữ liệu liên hệ:",
                error
            );

            successMessage.textContent =
                "Không thể lưu dữ liệu. Vui lòng kiểm tra trình duyệt và thử lại.";

            successMessage.className =
                "form-status error";

        }

    });

}

/* =====================================
   14. DARK MODE
===================================== */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("foodie-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeButton() {

    if (!themeToggle) return;

    themeToggle.textContent =
        document.body.classList.contains("dark")
            ? "☀️ Chế độ sáng"
            : "🌙 Chế độ tối";
}

updateThemeButton();

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "foodie-theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();

    });
}


/* =====================================
   15. HAMBURGER MENU
===================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("is-open");

        const isOpen =
            navLinks.classList.contains("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent =
            isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";
        });
    });

    window.addEventListener("resize", function () {

        if (window.innerWidth > 767) {

            navLinks.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";
        }
    });
}


/* =====================================
   16. BACK TO TOP
===================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (backToTop) {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 300
        );
    }

}, { passive: true });

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================
   17. FOOTER YEAR
===================================== */

document.querySelectorAll(".current-year")
    .forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });
