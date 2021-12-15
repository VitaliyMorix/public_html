<?php
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
