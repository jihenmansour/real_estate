<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "DbConnect.php";


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM housesdata";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = ? ";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $path[3]);
            $stmt->execute();
            $users = $stmt->get_result()->fetch_assoc();
            echo '<img src="data:image/png;charset=utf8;base64,'. base64_encode($users['image_sm']). '" />';
        } else {
            $result = $conn->query("SELECT * FROM housesdata"); 
            if($result->num_rows > 0){  
                while($users = $result->fetch_assoc()){  
                  echo '<img src="data:image/png;charset=utf8;base64,'. base64_encode($users['image_sm']). '" />';
                } }
        }
        break;


}