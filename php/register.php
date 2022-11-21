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
$val = array ();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
    $sql = "SELECT id FROM users WHERE email = ?";

    if($stmt = mysqli_prepare($conn, $sql)){
        // Bind variables to the prepared statement as parameters
        mysqli_stmt_bind_param($stmt, "s", $param_email);
        
        // Set parameters
        $param_email = (trim($data->email));
        
        // Attempt to execute the prepared statement
        if(mysqli_stmt_execute($stmt)){
            /* store result */
            mysqli_stmt_store_result($stmt);
            
            if(mysqli_stmt_num_rows($stmt) == 1){
                array_push($error, array('email' =>"This email is already taken."));
            } 
        }
    }
     // Validate password
     if(empty(trim($data->password))){
        array_push($error, array('password' =>"Please enter a password."));  
     } 
     elseif(strlen(trim($data->password)) < 6){
        array_push($error, array('password' =>"Password must have atleast 6 characters."));
     }
     // Validate name
     if(empty(trim($data->name))){
        array_push($error, array('name' =>"Please enter a name."));     
      }
     
       // Validate phone number

    if(empty(trim($data->phone_number))){
      array_push($error, array('phone' =>"Please enter a phone number."));     
    }
    elseif(preg_match('/^[0-9]{10}+$/', (trim($data->phone_number)))) {
      array_push($error, array('phoneValid' =>"Please enter a valid phone number."));     
    }
      // Validate email
     if(empty(trim($data->email))){
        array_push($error, array('email' =>"Please enter a email."));    
      } 
    if (empty($error)){
        $email = (trim($data->email));
        $password = (trim($data->password));
        $password_hash = password_hash($password, PASSWORD_DEFAULT);
        $name = (trim($data->name));
        $phone_number = (trim($data->phone_number));
        $type = (trim($data->type));
          // collect value of input field
       $sql = "INSERT INTO users (name, type, phone_number, email, password)
        VALUES ('$name',  '$type', '$phone_number', '$email', '$password_hash')";
        
       if ($conn->query($sql) === TRUE) {
      $sqlquery = "SELECT id FROM users WHERE email = '$email'";
      $result = mysqli_query($conn, $sqlquery);
      $row = mysqli_fetch_assoc($result);
       echo  ($row["id"]);
        
     }
    }
    else{

      echo json_encode($error);
        }
  
  $conn->close();
  }

?>