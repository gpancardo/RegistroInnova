<?php

    include 'conexion.php';

    print_r($_POST);

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $numero_cuenta = $_POST['numero-cuenta'];
    $carrera = $_POST['carrera'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $contrasena = password_hash($contrasena, PASSWORD_DEFAULT);
    $boletin_mensual = ($_POST['boletin-mensual'] ?? '') === 'on' ? 1 : 0;

    $query = "INSERT INTO asistente (nombre, apellidos, numero_cuenta, carrera, correo, contrasena, boletin_mensual)
              VALUES ('$nombre','$apellidos','$numero_cuenta','$carrera','$correo','$contrasena','$boletin_mensual')";

    $ejecutar = mysqli_query($conexion,$query);

    mysqli_close($conexion);
    header("Location: ../inicioSesion.html");
    exit;

?>