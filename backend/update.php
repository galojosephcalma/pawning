<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$user_id = $data['user_id'];
$email = $data['email'];
$password = $data['password'];

$q = mysqli_query($con, "UPDATE `user_account` SET (`email`, `password`) VALUES('$email', '$password') WHERE `user_id` = '{$user_id} LIMIT 1");
if($q){
    http_response_code(201);
    $message['status'] == "Success";
}else{
    http_response_code(422);
    $message['status'] == "Failed";
}
echo json_encode($message);
echo mysqli_error($con);