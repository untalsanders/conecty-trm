<?php

declare(strict_types=1);

use DI\Container;
use Dotenv\Dotenv;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require APP_ROOT . '/vendor/autoload.php';

$container = new Container();
AppFactory::setContainer($container);
$app = AppFactory::create();

/* Display Errors */
$app->addErrorMiddleware(true, true, true);

$container->set('config', function () {
    return Dotenv::createImmutable(APP_ROOT)->load();
});

$container->set('view', function () {
    return Twig::create(APP_ROOT . '/resources/views', ['cache' => false]);
});

require APP_ROOT . '/routes/web.php';

return $app;
