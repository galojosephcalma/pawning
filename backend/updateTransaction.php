<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$id = $_GET['id'];
$market_value = $data['market_value'];
$monthly_interest = $data['monthly_interest'];
$maximum_amount = $data['maximum_amount'];
$due_date = $data['due_date'];
$next_due = date('Y-m-d', strtotime('+1 month', strtotime($due_date)));

$q = mysqli_query($con, "UPDATE `transaction` SET `Market_value` = '$market_value', `Maximum_amount` = '$maximum_amount', `Monthly_interest` = '$monthly_interest', `Due_date` = '$next_due'  WHERE `transaction`.`id` = $id;");
if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo json_encode($message);
echo mysqli_error($con);