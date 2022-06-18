<?php
include "config.php";
$data = array();
$id = $_GET['id'];
$q = mysqli_query($con, "SELECT P.interest AS paid_interest, P.jewelry_amount AS paid_amount, P.date FROM `payment` AS P JOIN transaction as T ON t.id = P.jewelry WHERE t.id = '$id'"); 
while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);