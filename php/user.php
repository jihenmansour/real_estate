<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "DbConnect.php";

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = ? ";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $path[3]);
            $stmt->execute();
            $users = $stmt->get_result()->fetch_assoc();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        }

        echo json_encode($users);
        break;
        case "PUT":
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE users SET name=?, phone_number=?, email=?, password=? WHERE id =$path[3]";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('siss', $user->name, $user->phone_number, $user->email, password_hash($user->password, PASSWORD_DEFAULT));
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

}