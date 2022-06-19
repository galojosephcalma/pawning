<?php

include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];
$date = $data['date'];
$interest = $data['interest'];
$jewelry_amount = $data['jewelry_amount'];
$due_date = $data['due_date'];
$next_due = date('Y-m-d', strtotime('+1 month', strtotime($due_date)));

$q = mysqli_query ($con, "INSERT INTO `payment` (`id`, `jewelry`, `date`, `interest`, `jewelry_amount`) VALUES (NULL, '$id', '$date', '$interest', '$jewelry_amount');");
$q = mysqli_query($con, "UPDATE `transaction` SET `Due_date` = '$next_due'  WHERE `transaction`.`id` = $id;");
if ($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo json_encode($message);
echo mysqli_error($con);