<?php
declare(strict_types=1);

namespace TCRM\Controllers;

use TCRM\Core\Classes\AbstractController;

class HomeController extends AbstractController
{
    public function init($request, $response, array $args)
    {
        return $this->render($response, "home.twig", [
            "pageTitle" => 'Inicio'
        ]);
    }

    public function queryTCRM($request, $response, array $args)
    {
        $url = $this->config()['WEB_SERVICE_URL'];
        $headers = [
            "Content-Type: application/xml",
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
        $data = ["dollarRealValue" => $dollarRealValue];
        $payload = json_encode($data);
        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json');
    }
}
