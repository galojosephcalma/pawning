<?php
include "config.php";
$data = array();
$q = mysqli_query($con, "SELECT J.jewelry_type as Jewelry, T.Loan_date as Loan_Date, U.lname as Lastname, U.fname as Firstname FROM transaction as T JOIN Jewelry as J ON t.Jewelry = j.id JOIN users as U ON U.user_id = t.Account_number ORDER BY T.Loan_date;"); 
while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);