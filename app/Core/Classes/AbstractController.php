<?php

namespace TCRM\Core\Classes;

use Psr\Container\ContainerInterface;

abstract class AbstractController
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function render($response, string $template, array $args = []) {
        return $this->container->get('view')->render($response, $template, $args);
    }

    public function config()
    {
        return $this->container->get('config');
    }
}
