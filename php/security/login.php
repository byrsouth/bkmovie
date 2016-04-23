<?php
/*
require("../db/db.php"); // #1
$userName = $_POST['user']; // #4
$pass = $_POST['password']; // #5
$stmt = $db->prepare("SELECT * FROM user where userName = '$userName' ");
$stmt->execute();

$data = $stmt->fetch(PDO::FETCH_ASSOC);
if($data){
    $result['data'] = $data;
    $result['success'] = true; //#17
    $result['msg'] = 'Connected successfully'; //#18
}else{
 $result['success'] = false; //#17
 $result['msg'] = 'WTF!!!'; //#18
}





$db = null;

*/
 $result['success'] = true;
echo json_encode($result);
?>