<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$c_name = $data['client_name'];
$address = $data['address'];
$phone = $data['phone'];
$appearance = $data['appearance'];
$jewelry = $data['jewelry'];
$weight = $data['weight'];
$net_weight = $data['net_weight'];
$quantity = $data['quantity'];
$value_assesees = $data['value_assesees'];
$karatage = $data['karatage'];
$market_value = $data['market_value'];
$max_amount = $data['max_amount'];
$test = $data['test'];

$q = mysqli_query($con, "INSERT INTO `transaction` (`id`, `client_name`, `address`, `phone`, `Jewelry`, `Apperance`, `Weight`, `Net Weight`, `Qty`, `Value Assesees`, `Karatage`, `Market Value`, `Maximum Amount for Article`, `Test`) VALUES (NULL, '$c_name', '$address', '$phone', '$jewelry', '$appearance', '$weight', '$net_weight', '$quantity', '$value_assesees', '$karatage', '$market_value', '$max_amount', '$test');");

if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo mysqli_error($con);