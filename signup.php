<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['fullname'], $data['email'], $data['password'])) {
    echo json_encode(["success" => false, "message" => "Dữ liệu không hợp lệ"]);
    exit();
}

// Kết nối database (MySQL)
$conn = new mysqli("localhost", "root", "", "tourdi");

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Lỗi kết nối CSDL"]));
}

// Kiểm tra email đã tồn tại chưa
$email = $conn->real_escape_string($data['email']);
$result = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email đã tồn tại!"]);
} else {
    $fullname = $conn->real_escape_string($data['fullname']);
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    
    if ($conn->query("INSERT INTO users (fullname, email, password) VALUES ('$fullname', '$email', '$password')")) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Lỗi khi đăng ký!"]);
    }
}

$conn->close();
?>
