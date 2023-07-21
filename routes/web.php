<?php

use TCRM\Controllers\HomeController;

$app->get("/", HomeController::class . ':init')->setName('home');
$app->get("/queryTCRM", HomeController::class . ':queryTCRM')->setName('queryTCRM');
