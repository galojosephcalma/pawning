<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$account_number = $data['account_number'];
$load_date = date('Y-m-d');
$due_date = date('Y-m-d', strtotime('+1 month'));
$appearance = $data['appearance'];
$jewelry = $data['jewelry'];
$weight = $data['weight'];
$test = $data['test'];
$karatage = $data['karatage'];
$market_value = $data['market_value'];
$max_amount = $data['max_amount'];
$monthly_interest = $data['monthly_interest'];

$q = mysqli_query($con, "INSERT INTO `transaction` (`id`, `Account_number`, `Loan_date`, `Due_date`, `Jewelry`, `Apperance`, `Weight`, `Test`, `Karatage`, `Market_value`, `Maximum_amount`, `Monthly_interest`) VALUES (NULL, '$account_number', '$load_date', '$due_date', '$jewelry', '$appearance', '$weight', '$test', '$karatage', '$market_value ', '$max_amount', '$monthly_interest');");

if($q){
    http_response_code(201);
}else{
    http_response_code(422);
}
echo mysqli_error($con);