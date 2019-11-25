<?php

// required headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// include database and object files
include_once '../config/Db.php';
include_once '../object/Department.php';

$database   = new Db();
$db         = $database->getConnection();
$department = new Department($db);

$data = json_decode(file_get_contents('php://input', true));

$department->id   = $data->id;
$department->name = $data->name;

echo '{';
echo $department->update() ? '"message": "Department was updated."' : '"message": "Unable to update department."';
echo '}';