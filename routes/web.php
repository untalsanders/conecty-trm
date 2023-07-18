<?php

use TCRM\Controllers\HomeController;

$app->get("/", HomeController::class . ':init')->setName('home');
