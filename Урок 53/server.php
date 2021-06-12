<?php
$_POST = json_decode(file_get_contents('php://input', true)); //для взаимодействия с json, так как php это не умеет
echo var_dump($_POST);