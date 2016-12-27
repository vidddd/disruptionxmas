<?php
session_start();
opcache_reset(); 
error_reporting(E_ALL);
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../inc/config.php';
require_once __DIR__ . '/../classes/class.db.php';
require_once __DIR__ . '/../classes/mail.class.php';
$loader = new Twig_Loader_Filesystem('templates/');
$twig = new Twig_Environment($loader, array());
$db = new Database(); $imagen = '';
$storage = new \Upload\Storage\FileSystem('uploads'); 
if($_POST){
    if(!empty($_FILES['imagen']['name'])){
        $file = new \Upload\File('imagen', $storage);
        $new_filename = uniqid(); $file->setName($new_filename); 
            // MimeType List => http://www.iana.org/assignments/media-types/media-types.xhtml
            $file->addValidations(array(
                //You can also add multi mimetype validation
                new \Upload\Validation\Mimetype(array('image/png', 'image/gif', 'image/jpeg')),
                new \Upload\Validation\Size('3M')
            ));
            // Access data about the file that has been uploaded
            $data = array(
                'name'       => $file->getNameWithExtension(),
                'extension'  => $file->getExtension(),
                'mime'       => $file->getMimetype(),
                'size'       => $file->getSize(),
                'md5'        => $file->getMd5(),
                'dimensions' => $file->getDimensions()
            );
            try {
                $imagen = $new_filename.".".$file->getExtension();
                $file->upload();
            } catch (\Exception $e) {
                // Fail!
                $errors = $file->getErrors();
                print_r($errors); die;
            }
      } 
    if($_POST['personas2'] == 'otros'){
        $email = $_POST['suemail'];
        $nombre = $_POST['sunombre'];
    } else {
        $email = $_POST['email'];
        $nombre = $_POST['nombre'];
    }
    $suemail = $_POST['suemail'];
    $mensaje = $_POST['mensaje'];
    $fecha = date('Y-m-d');
    $cuando = $_POST['momentos'];
    $db->insertaFelicitacion($nombre,$email,$suemail,$mensaje,$fecha,$cuando,$imagen);
    $mail = new Mails; 
    $mail->setAddress($email,'');
    $mail->envioPerfecto();
    
        if($_POST['personas2'] == 'otros'){
              $mail->envioFelicitacion($nombre,$mensaje,$cuando);
        } else {
            
             $mail->envioUnomismo($nombre,$mensaje,$cuando);
        }

     
} else {
    echo $twig->render('index.html', array( "URLHOME" => URL_HOME ));
}
