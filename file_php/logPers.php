<?php
require_once('bd.php');
$login = $_POST['login'];
$pass = $_POST['pass'];

$hash = base_data($login, $pass);

if ($hash == 1) {
    echo ("Добро пожаловать, $login! <br><a href='../index.html'>Назад</a>");
} else if ($hash == 0) {
    echo ("Что-то пошло не так! <br><a href='post.html'>Назад</a>");
}
