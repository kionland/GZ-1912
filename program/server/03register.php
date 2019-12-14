<?php
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

// echo $username;
// echo $password;
$db=mysqli_connect("127.0.0.1","root","","mogujie");
// print_r($db) ;

$sql1="SELECT * FROM `user` WHERE username='$username'";
$result=mysqli_query($db,$sql1);
// print_r(mysqli_num_rows($result));
$obj = array("status"=>"", "data"=>array("msg"=>""));

if(mysqli_num_rows($result) == 1)
{
   $obj["status"] = "error";
   $obj["data"]["msg"] = "注册失败，该用户名已经被使用！！！";
}else
{
  $sql = "INSERT INTO `user`(`id`, `username`, `password`) VALUES (NULL,'$username','$password')";
  # 执行SQL语句
  $res = mysqli_query($db, $sql);
  // echo($sql);
  $obj["status"] = "success!!!";
  $obj["data"]["msg"] = "恭喜您，注册成功！！！";
}

echo json_encode($obj,true);
?>