<?php

include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];
$date = $data['date'];
$interest = $data['interest'];
$jewelry_amount = $data['jewelry_amount'];

$q = mysqli_query ($con, "INSERT INTO `payment` (`id`, `jewelry`, `date`, `interest`, `jewelry_amount`) VALUES (NULL, '$id', '$date', '$interest', '$jewelry_amount');");
if ($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con);