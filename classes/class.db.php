<?php
require_once __DIR__ . '/../inc/config.php';

class Database{
     
    private $db;

    public function __construct()
    { 
        $this->db = new MysqliDb (HOST,USER,PASSWORD,DATABASE);
    }
    public function insertaFelicitacion($nombre,$sunombre,$email,$suemail,$mensaje,$fecha,$cuando,$imagen) {
       $ok = false;

        $data = Array ("nombre" => $nombre,"sunombre" => $sunombre,
                "email" => $email,
                "suemail" => $suemail,
                "mensaje" => $mensaje,
                "fecha_envio" => $fecha,
                "cuando" => $cuando,
                "enviado" => 0,
                "imagen" => $imagen
                );
         
         $id = $this->db->insert ('felicitaciones', $data);
         if($id){
              $ok = true; 
         } else {
             echo 'insert failed: ' . $this->db->getLastError(); die;
         }
         return $ok;
     }
       
    /*
    public function getCines(){
        $this->db->where("active", 1);
        $ciudades = $this->db->get('ciudades');
        return $ciudades;
     }
  
    public function getTotalEntradas($cine) {
        $this->db->where ("id", $cine);
        $cius = $this->db->getOne("ciudades");
        return $cius['total_entradas']; 
    }

    public function getTotalEntradasCount($cine){
        $this->db->where ("ciudad_id", $cine);
        $co = $this->db->getOne ("entradas", "count(*) as cnt");
        return $co['cnt'];
    }
    
    public function participa($cine,$nombre,$apellidos,$fechan,$correo,$fb_name, $fb_id) {
       $ok = false;
       $total_ent = $this->getTotalEntradas($cine);
       $total_cont = $this->getTotalEntradasCount($cine);    
       // Si todavia no se han insertado todas las entradas del la sala
       if($total_cont < $total_ent) {
        $data = Array ("ciudad_id" => $cine,
                "nombre" => $nombre,
                "date" => date("Y-m-d"),
                "entrada" => mt_rand(11111111111,99999999999),
                "apellidos" => $apellidos,
                "fecha_nacimiento" => $fechan,
                "email" => $correo,
                "fb_id" => $fb_id,
                "fb_name" => $fb_name);
         
         $id = $this->db->insert ('entradas', $data);
         if($id){
              $ok = true; 
         } else {
             echo 'insert failed: ' . $this->db->getLastError(); die;
         }
       }
         // Si es la ultima ponemos a active=0 la sala de cine para que no se pueda participar mas
      // echo $total_cont."  3   ".$total_ent+1; die;
       if($total_cont+1 == $total_ent) {
                
                $data = Array (
                    'active' => 0
                );
                $this->db->where ('id', $cine);
                if ($this->db->update('ciudades', $data)) {
                    //echo $this->db->count . ' records were updated';
                    mail('david.alvarez@tbwa.com','Canta.promofb.es','El cine:'.$cine.' tiene agotadas todas sus entradas');
                } else {
                    echo 'update failed: ' . $db->getLastError(); 
                }
         }
         return $ok;
    }
    public function haParticiado($fbid){

        $ents = $this->db->rawQueryOne('select * from participantes where date=? and fb_id=?', Array(date('Y-m-d'),$fbid));
        if(!empty($ents)){
            return true;
        } else {
            return false;
        }
    }
    public function getTotalEntradasHoy($cine, $hoy) {
        $hod = "2016-12-".$hoy; 
       /* $this->db->where("ciudad_id", $cine);
        $this->db->where("date", $hod);
        $co = $this->db->getOne ("entradas", "count(*) as cnt");
        $co = $this->db->rawQueryOne('select count(*) as cnt from entradas where ciudad_id=?', Array($cine));
        
        return $co['cnt'];
    }
    public function guardaParticipa($fbid){
          $data = Array ("date" => date('Y-m-d'),
                "fb_id" => $fbid);
         $id = $this->db->insert ('participantes', $data);
         if($id){
             $ok = true;
         } else {
             echo 'insert failed: ' . $this->db->getLastError();
         }
    }
    
    public function queDiaEstamos(){
        
        //   0 (for Sunday) through 6 (for Saturday)
        //   6 viernes
        //   7 sabado 
        //   1 domingo
        //   2 lunes
        //   3 martes
        //   4 miercoles
        
        return date('w')+1;
                
    }
    private function sanitize($input) {

       return mysqli_real_escape_string ( $this->db->link , $input );

    }
     * 
     */
}