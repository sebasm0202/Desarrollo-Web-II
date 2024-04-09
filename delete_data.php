<?php
session_start();
require_once('master.php');
$master = new Master();
$id = isset($_GET['id']) ? $_GET['id'] : '';
if(empty($id)){
    $_SESSION['msg_error'] = "Deletion Faile! No Member ID Given";
}else{
    $delete = $master->delete_data($id);
    if(isset($delete['status'])){
        if($delete['status'] == 'success'){
            $_SESSION['msg_success'] = 'Member Details has been deleted from JSON File Successfully';
        }elseif($delete['error']){
            $_SESSION['msg_error'] = 'Deletion Failed due to some Error. Error: '. $delete['error'];
        }
    }else{
        $_SESSION['msg_error'] = 'Details has failed to save due to some error.';
    }
}
header('location: ./');
