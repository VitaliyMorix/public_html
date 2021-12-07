<?php
//admin
//$2y$10$bAxn3od8w1WxHsUsWga9HeOCZSiEJEa9v1KOdsZ2g9DAYv8juJFRy
function base_data($login, $pas)
{
    $hash = 0;
    if ($login == "admin") {
        if ($pas == 'admin') $hash = '1';
    } elseif ($login == "std01") {
        if ($pas == 'dssp5321') $hash = '1';
    }
    return $hash;
}
