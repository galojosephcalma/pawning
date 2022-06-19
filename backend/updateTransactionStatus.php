<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$id = $_GET['id'];
$q = mysqli_query($con, "UPDATE `transaction` SET `status` = 'FULLY PAID' WHERE `transaction`.`id` = $id;");
if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo json_encode($message);
echo mysqli_error($con);