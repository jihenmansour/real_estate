<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "DbConnect.php";

session_start();
$path = explode('/', $_SERVER['REQUEST_URI']);
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
  case "PUT":  
    $_SESSION['house'][]=array(); 
    $data = json_decode( file_get_contents('php://input'),true );
    $house = $data['id'];
    array_push($_SESSION['house'],$path[4]);
    foreach($_SESSION['house'] as $key=>$value){
        if($value==[])
        unset($_SESSION['house'][$key]);

    }
    $arr = array_values(array_unique($_SESSION['house']));
    $myJSON = json_encode($arr); 
    $sql = "UPDATE users SET liked_houses = '$myJSON' WHERE id =$path[3]";
            $stmt = $conn->prepare($sql);   
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }  
    echo $myJSON;
    break;
    case "GET":
        $sql = "SELECT liked_houses FROM users
        ";
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= "WHERE id = ? ";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $path[3]);
            $stmt->execute();
            $houses = stripslashes(json_encode (array_values($stmt->get_result()->fetch_assoc())));
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $houses = stripslashes(json_encode (array_values($stmt->get_result()->fetch_all(MYSQLI_ASSOC))));
        }

        echo ($houses);
break;
}
?>