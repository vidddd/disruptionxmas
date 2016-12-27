<?php
if(isset($_FILES["imagen"]["type"]))
{
$validextensions = array("jpeg", "jpg","gif", "png");
$temporary = explode(".", $_FILES["imagen"]["name"]);
$file_extension = end($temporary);
if ((($_FILES["imagen"]["type"] == "image/png") || ($_FILES["imagen"]["type"] == "image/jpg") || ($_FILES["imagen"]["type"] == "image/gif") || ($_FILES["imagen"]["type"] == "image/jpeg")) && ($_FILES["imagen"]["size"] < 3000000)//Approx. 2000kb files can be uploaded.
&& in_array($file_extension, $validextensions)) {
if ($_FILES["imagen"]["error"] > 0)
{
    echo "Return Code: " . $_FILES["imagen"]["error"] . "<br/><br/>";
} else {
    if (file_exists("upload/" . $_FILES["imagen"]["name"])) {
    echo $_FILES["imagen"]["name"] . " <span id='invalid'><b>already exists.</b></span> ";
}
else
{
    /*
$sourcePath = $_FILES['imagen']['tmp_name']; // Storing source path of the file in a variable
$targetPath = "upload/".$_FILES['file']['name']; // Target path where file is to be stored
//move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
echo "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
echo "<br/><b>File Name:</b> " . $_FILES["imagen"]["name"] . "<br>";
echo "<b>Type:</b> " . $_FILES["imagen"]["type"] . "<br>";
echo "<b>Size:</b> " . ($_FILES["imagen"]["size"] / 1024) . " kB<br>";
echo "<b>Temp file:</b> " . $_FILES["imagen"]["tmp_name"] . "<br>";*/
    
}
}
}
else
{
echo "<span id='invalid'>*** Formato de imagen incorrecto o excede 3M ***<span>";
}
}
?>