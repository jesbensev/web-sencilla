<?php
$nombre_usuario=$_POST['nombre'];
$email_usuario=$_POST['correo'];
$consulta_usuario=$_POST['consulta'];
// Creo 3 variables que me toman lo que se envía por POST de cada valor

$destino="jesben2810@gmail.com";

$asunto="Consulta enviada desde www.jonathanlifschitz.com.ar";

$mensaje="Nombre: ".$nombre_usuario."\r\n";
$mensaje.="Email: ".$email_usuario."\r\n";
$mensaje.="Consulta: ".$consulta_usuario."\r\n";

$remitente="From: algo@jonylif.com.ar";

mail($destino, $asunto, $mensaje, $remitente);


header("Location:index.php?i=ok");
// SI EL FORMULARIO SE ENVIO CORRECTAMENTE, PONEME EN LA URL DESPUES DEL INDEX.PHP UN SIGNO DE PREGUNTA, UNA LETRA I, Y UN IGUAL OK
?>
