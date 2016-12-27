<?php
opcache_reset();
require_once __DIR__ . '/../vendor/autoload.php';
require_once 'class.db.php';

class Mails extends PHPMailer {
    
    var $desktop3 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_desktop_3meses.jpg';
    var $mobile3 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_mobile_3meses.jpg';
    var $desktop6 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_desktop_6meses.jpg';
    var $mobile6 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_mobile_6meses.jpg';
    var $desktop9 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_desktop_9meses.jpg';
    var $mobile9 = 'http://tbwadisruptionxmas.com/newsletter/img/img3_fel_mobile_9meses.jpg';
    
    var $desktop3uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_desktop_3meses.jpg';
    var $mobile3uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_mobile_3meses.jpg';
    var $desktop6uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_desktop_6meses.jpg';
    var $mobile6uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_mobile_6meses.jpg';
    var $desktop9uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_desktop_9meses.jpg';
    var $mobile9uno = 'http://tbwadisruptionxmas.com/newsletter/img/img3_uno_desktop_9meses.jpg';
        
    
    public function __construct() 
    {
        $this->SMTPDebug = 0;                               // Enable verbose debug output

        $this->isSMTP();                                      // Set mailer to use SMTP
        $this->Host = 'tbwadisruptionxmas.com';  // Specify main and backup SMTP servers
        $this->SMTPAuth = true;                               // Enable SMTP authentication
        $this->Username = 'no-reply@tbwadisruptionxmas.com';                 // SMTP username
        $this->Password = 'J266uIRPZT';                           // SMTP password
        $this->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $this->Port = 587;                                    // TCP port to connect to

        $this->setFrom('no-reply@tbwadisruptionxmas.com', 'Tbwa Disruption xmas');
        $this->twig = new Twig_Environment(new Twig_Loader_Filesystem(__DIR__ .'/../templates/'), array());

    } 
    public function setAddress($email, $name) {
          $this->addAddress($email, $name);     // Add a recipient
    }
    
    public function envio1(){
        $this->isHTML(true);  
        $this->Subject = 'Feliz Navidad Disruptiva';
        $this->Body    = 'This is the HTML message body <b>in bold!</b>';
        $this->AltBody = 'This is the body in plain text for non-HTML mail clients';

            if(!$this->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $this->ErrorInfo;
            } else {
                //echo 'Message has been sent';
            }
    }
    public function envioPerfecto(){
        $this->isHTML(true);  
        $this->Subject = 'Feliz Navidad Disruptiva';
        $this->Body    = $this->twig->render('email-perfecto.html', array());

            if(!$this->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $this->ErrorInfo;
            } else {
              //  echo 'Message has been sent';
            }
    }
    
    public function envioDescubrimiento(){
        $this->isHTML(true);  
        $this->Subject = 'Disruption Xmas';
        $this->Body    = $this->twig->render('email-descubrimiento.html', array());
            if(!$this->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $this->ErrorInfo;
            } else {
              //  echo 'Message has been sent';
            }
    }
   public function envioFelicitacion($nombre, $mensaje, $momento){
        $this->isHTML(true);  
        $this->Subject = 'Feliz Navidad Disruptiva';

        switch($momento){
            case 2:
            $imgdesktop = $this->desktop3;$imgmobile = $this->mobile3; break;
            case 3:
            $imgdesktop = $this->desktop6;$imgmobile = $this->mobile6; break;
            case 4:
            $imgdesktop = $this->desktop9;$imgmobile = $this->mobile9; break;
            case 1:
            $imgdesktop = $this->desktop3;$imgmobile = $this->mobile3; break;
        }
        
        
        
        $this->Body    = $this->twig->render('email-felicitacion.html', array('NOMBRE' => $nombre,'IMAGENDESKTOP' => $imgdesktop,'IMAGENMOBILE' => $imgmobile, 'MENSAJE' => htmlentities($mensaje)));
            if(!$this->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $this->ErrorInfo;
            } else {
              //  echo 'Message has been sent';
            }
    }
    
     public function envioUnomismo($nombre, $mensaje, $momento){
        $this->isHTML(true);  
        $this->Subject = 'Feliz Navidad Disruptiva';

        switch($momento){
            case 2:
            $imgdesktop = $this->desktop3uno;$imgmobile = $this->mobile3uno; break;
            case 3:
            $imgdesktop = $this->desktop6uno;$imgmobile = $this->mobile6uno; break;
            case 4:
            $imgdesktop = $this->desktop9uno;$imgmobile = $this->mobile9uno; break;
            case 1:
            $imgdesktop = $this->desktop3uno; $imgmobile = $this->mobile3uno; break;
        }
        
        
        
        $this->Body    = $this->twig->render('email-uno-mismo.html', array('NOMBRE' => $nombre,'IMAGENDESKTOP' => $imgdesktop,'IMAGENMOBILE' => $imgmobile, 'MENSAJE' => htmlentities($mensaje)));
            if(!$this->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $this->ErrorInfo;
            } else {
              //  echo 'Message has been sent';
            }
    }
}