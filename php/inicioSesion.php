<?php
// Conexión a la base de datos (ya configurada previamente)
include 'conexion.php';

// Simula los datos ingresados por el usuario
$numero_cuenta = $_POST['numero-cuenta'];
$contrasena = $_POST['contrasena'];

// Consulta para obtener al usuario por su número de cuenta
$validar_login = mysqli_query($conexion, "SELECT * FROM asistente WHERE numero_cuenta = '$numero_cuenta'");

// Verifica si el usuario existe
if ($usuario = mysqli_fetch_assoc($validar_login)) {
    // Verifica la contraseña usando password_verify
    if (password_verify($contrasena, $usuario['contrasena'])) {
        header("Location: ../panelAdmon.html");
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}

// Cierra la conexión
mysqli_close($conexion);
?>
