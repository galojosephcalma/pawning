<?php
include "config.php";
$data = array();
$username = $_GET['username'];
$q = mysqli_query($con, "SELECT * FROM `users` WHERE `username` = '$username' LIMIT 1"); 
while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);