<?php

if (PHP_SAPI !== 'cli-server') {
    $url = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

/**
 * Directory Separator
 */
if (!defined('DS')) {
    define('DS', DIRECTORY_SEPARATOR);
}

/**
 * Root directory of application
 */
if (!defined('APP_ROOT')) {
    define('APP_ROOT', dirname($_SERVER['DOCUMENT_ROOT'], 1));
}

/**
 * Bootstrap Application
 */
$app = require APP_ROOT . '/bootstrap/app.php';

$app->run();
