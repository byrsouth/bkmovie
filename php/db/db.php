<?php 
$servername = "localhost";
$username = "root";
$password = "P@$$word";
try{
    $db = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'P@$$word');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



}catch(PDOException $e){
 printf( "Connection failed: " . $e->getMessage());
 }




?>