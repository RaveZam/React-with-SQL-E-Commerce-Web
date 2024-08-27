<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers
$conn = mysqli_connect("localhost","root","","reactdatabase");

if (mysqli_connect_errno()) {
    echo mysqli_connect_error();
    exit();
}else{
    if(isset($_POST["loginbtn"])){
        $username = $_POST ["username"];
        $password = $_POST ["password"];
      if(empty($username) || empty($password)){
            echo json_encode(["status" => "empty"]);
        }else{
        $sqluser = "SELECT * FROM users WHERE username = '{$username}'";
        $userresult = mysqli_query($conn, $sqluser);
        if(mysqli_num_rows($userresult) > 0){
           $row = mysqli_fetch_assoc($userresult);
        if(password_verify($password, $row["password"])){
            echo json_encode(["status" => "loginsuccess"]);
        }else{
            echo json_encode(["status" => "incorrectpassword"]);
        }
    }else{
            echo json_encode(["status" => "usernotfound"]);
    }
  }
}
        else if(isset($_POST["registerbtn"])){
        $username = filter_input(INPUT_POST,"username",FILTER_VALIDATE_EMAIL);
        if (empty($username)){
            echo json_encode(["status"=> "invalidemail"]);
        }else{
        $sqlselectuser = "SELECT * FROM users WHERE username = '{$username}'";
        $sqlresult = mysqli_query($conn, $sqlselectuser);
        if(mysqli_num_rows($sqlresult) > 0){
            echo json_encode(["status" => "emailtaken"]);
}else{
    $password = $_POST["password"];
    $uppercase = preg_match('@[A-Z]@', $password);
    $lowercase = preg_match('@[a-z]@', $password);
    $number = preg_match('@[0-9]@', $password);
    if(!$uppercase || !$lowercase || !$number){
        echo json_encode(["status" => "weakpassword"]);
    }else{
        $hashedpassword = password_hash($password, PASSWORD_DEFAULT);
        $sqlinsert = "INSERT INTO users (username,password) VALUES('$username','$hashedpassword')";
        $result = mysqli_query($conn, $sqlinsert);
        if($result){
            echo json_encode(["status" => "registersuccess"]);
        }else{
            echo json_encode(["status" => "registerfailed"]);
        }
    }
}
}
}
}