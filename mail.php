<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('jeremylanoue@jerlandew.fr', 'Envoi depuis la page Contact', $_POST['message'], 'From : $mail');
    ?>
</body>
</html>