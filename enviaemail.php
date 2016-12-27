<?php

opcache_reset();
error_reporting(E_ALL ^ E_NOTICE);
require_once __DIR__ . '/vendor/autoload.php';

require_once 'classes/mail.class.php';

$mail = new Mails; 

$mail->setAddress('ignacio.hernandez@tbwa.com');
$mail->setAddress('davidalvarezcalvo@gmail.com');
$mail->setAddress('diana.benito@tbwa.com');

$mail->envioPerfecto(); 

$mail->envioDescubrimiento();

$mail->envioFelicitacion();

/*
    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    // Set email format to HTML
*/

