<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.superfinanciera.gov.co/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?wsdl');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" \nxmlns:act=\"http://action.trm.services.generic.action.superfinanciera.nexura.sc.com.co/\">\n<soapenv:Header/>\n<soapenv:Body>\n<act:queryTCRM>\n</act:queryTCRM>\n</soapenv:Body>\n</soapenv:Envelope>");

$headers = array();
$headers[] = 'Content-Type: text/xml';
$headers[] = 'Accept: text/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

$dolarValue = json_encode($result, true);
$dolarRealValue = substr($dolarValue, 490, 6);
?>
