<?php
error_reporting (E_ALL ^ E_NOTICE); 
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type'); 
header("Access-Control-Allow-Methods: *");
header('Access-Control-Allow-Credentials: true');

require_once "DbConnect.php";

$method = $_SERVER['REQUEST_METHOD'];
$path = explode('/', $_SERVER['REQUEST_URI']);
switch($method) {
    case "GET":
        $sql = "SELECT housesdata.id, housesdata.type_house, housesdata.name, housesdata.description, 
        housesdata.country, housesdata.address,
        housesdata.bedrooms, housesdata.bathrooms, housesdata.surface, housesdata.year, housesdata.price, 
        housesdata.agent_id, users.phone_number, users.email, TO_BASE64(housesdata.image) AS image_sm FROM housesdata
        INNER JOIN users
        ON housesdata.agent_id = users.id
        ";
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE housesdata.id = ? ";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $path[3]);
            $stmt->execute();
            $houses = $stmt->get_result()->fetch_assoc();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $houses = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        }

        echo json_encode($houses);
        break;
        case "POST":
            $image = file_get_contents($_FILES['file']['tmp_name']);


            $typeHouse  = $_POST['type'];
            $nameHouse  = $_POST['name'];
            $descriptionHouse  = $_POST['description'];
            $countryHouse  = $_POST['country'];
            $addressHouse  = $_POST['address'];
            $bedroomHouse  = $_POST['bedrooms'];
            $bathroomHouse  = $_POST['bathrooms'];
            $surfaceHouse  = $_POST['surface'];
            $yearHouse  = $_POST['year'];
            $priceHouse  = $_POST['price'];
            $idAgent  = $_POST['id_agent'];
            $sql = "INSERT INTO housesdata( type_house, name, description, country, address, bedrooms, bathrooms, surface, 
            year, price, agent_id, image) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('sssssiisiiis', $typeHouse, $nameHouse, $descriptionHouse, $countryHouse, 
            $addressHouse, $bedroomHouse, $bathroomHouse, $surfaceHouse, $yearHouse, $priceHouse, $idAgent, $image );
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record added successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to add record.'];
            }
            echo json_encode($response);
            break;


}