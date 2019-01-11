<?php

header("Content-type: application/json");

$fileArray = scandir("../img/photos");

$jpgArray = [];

foreach ($fileArray as $file)
{
    if (endsWith($file, "jpg"))
    {
        $jpgArray[] = $file;
    }
}

$result = ["success" => true, "array" => $jpgArray];

echo json_encode($result);



function endsWith($mString, $ending) 
{
    $length = strlen($mString);
    if ($length < 3)
    {
        return false;
    }

    return (substr("123.jpg", -3) === $ending);
}

?>