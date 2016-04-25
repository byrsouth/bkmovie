<?php

session_start(); // #1

$_SESSION = array(); // #2

session_destroy(); // #3

$result = array(); // #4

$result['success'] = true;
$result['msg'] = 'logout';

echo json_encode($result);
?>