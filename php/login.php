<?php

error_reporting (E_ALL ^ E_NOTICE); 
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type'); 
header("Access-Control-Allow-Methods: *");
header('Access-Control-Allow-Credentials: true');

require_once "DbConnect.php";

$data = json_decode(file_get_contents("php://input"));
$error = array();
$email = (trim($data->email));
$password = (trim($data->password));

$sql = "SELECT id, email, password FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);


if ($_SERVER["REQUEST_METHOD"] == "POST") {


 if (!password_verify($password, $row["password"])){
    array_push($error, "Incorrect username or password.");
}

if (!empty($error)){

echo json_encode ($error);
}
else{

     // Store data in session variables
     setcookie("loggedin", true);
     setcookie("id", $row["id"]);
     echo json_encode($row["id"]);
}

}

?>