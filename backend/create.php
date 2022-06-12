<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$email = $data['email'];
$password = $data['password'];
$q = mysqli_query($con, "INSERT INTO `user_account` (`user_id`, `email`, `password`) VALUES (NULL, '$email', '$password');");

if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo mysqli_error($con);