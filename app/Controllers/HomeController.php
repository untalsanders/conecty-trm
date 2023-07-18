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
}
