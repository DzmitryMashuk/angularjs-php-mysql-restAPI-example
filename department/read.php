<?php

// required headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

// include database and object files
include dirname(__FILE__).'/../config/Db.php';
include '../object/Department.php';

// instantiate database and department object
$database = new Db();
$db       = $database->getConnection();

$department = new Department($db);

// query department
$stmt = $department->read();
$num  = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {
    // department array
    $department_arr            = [];
    $department_arr['records'] = [];

    // retrieve table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        extract($row);
        $department_item = [
            'id'   => $row['dept_id'],
            'name' => $row['dept_name']
        ];
        array_push($department_arr['records'], $department_item);
    }
    echo json_encode($department_arr);
} else {
    echo json_encode(['message' => 'No products found.']);
}
