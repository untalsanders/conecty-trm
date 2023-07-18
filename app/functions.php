<?php
declare(strict_types=1);

function queryTCRM() {
    $url = $_ENV['WEB_SERVICE_URL'];
    $headers = [
        "Content-Type: text/plain",
        "Accept: application/json"
    ];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);

    $payloadFile = file_get_contents(APP_ROOT . '/resources/payloads/soap-payload.xml', true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payloadFile);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo "Error: " . curl_errno($ch);
    }

    curl_close($ch);

    $dollarValue = json_encode($result, 1);
    $dollarRealValue = substr($dollarValue, 490, 6);

    return $dollarRealValue;
}
