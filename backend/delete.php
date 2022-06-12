<?php
include "config.php";
$input = file_get_contents('php://input');
$message = array();
$user_id = $_GET['user_id'];
$q = mysqli_query($con, "DELETE FROM `user_account` WHERE `user_id` = $user_id LIMIT 1");
if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo json_encode($message);
echo mysqli_error($con);