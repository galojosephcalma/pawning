<?php
include "config.php";
$data = array();
$id = $_GET['id'];
$q = mysqli_query($con, "SELECT  T.id as id, T.Maximum_amount, T.Monthly_interest,T.Market_value, T.Due_date ,J.jewelry_type as Jewelry, T.Loan_date as Loan_Date, U.lname as Lastname, U.fname as Firstname FROM transaction as T JOIN Jewelry as J ON t.Jewelry = j.id JOIN users as U ON U.user_id = t.Account_number WHERE t.id = $id LIMIT 1"); 
while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);