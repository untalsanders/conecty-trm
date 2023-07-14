<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>TRM del día</title>
</head>

<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="https://www.conecty.co/" title="Conecty - Sim card internacional para viajes al exterior" rel="home">
                    <img src="https://www.conecty.co/wp-content/uploads/2019/07/logo.png" class="" alt="Conecty">
                </a>
            </div>
            <nav class="navegation">
                <a href="recomendar.php">Recomendación de Plan</a>
                <a href="https://empresa.conecty.co/forms/clientes.php" target="_blank">Registro Cliente</a>
                <a href="https://empresa.conecty.co" target="_blank">Panel de Ventas</a>
            </nav>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="trm">
                <h2 class="title">
                    Valor del dólar e indicadores en <span>Colombia</span>
                </h2>
                <!-- DolarWeb IndMin Start -->
                <div id="IndicadoresMin">
                    <h2>
                        <a href="https://dolar.wilkinsonpc.com.co/"></a>
                    </h2>
                </div>
                <script src="https://dolar.wilkinsonpc.com.co/widgets/gratis/indicadores-economicos-min.js?ancho=170&alto=85&fondo=transparent&fsize=10&ffamily=sans-serif&fcolor=000000"></script>
                <!-- DolarWeb IndMin End -->
            </div>
            <div class="convertidor">
                <h2 class="title">
                    Convertidor de <span>Dólares a Pesos</span>
                </h2>
                <form class="form-convertidor">
                    <div class="mb-3">
                        <label for="dolar" class="form-label valdolares">Dólares</label>
                        <input type="number" class="form-control" id="dolar">
                    </div>
                    <div class="mb-3">
                        <label for="pesos" class="form-label valdolares">Pesos</label>
                        <input type="text" class="form-control" id="pesos" readonly>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary" id="convertir">Convertir</button>
                    </div>
                </form>
            </div>
            <div class="calc-viajes">
                <h2 class="title">Calculadora de días <span>de viaje </span></h2>
                <form class="form-viajes">
                    <div class="mb-3">
                        <label for="inicio" class="inicio">Fecha inicio de viaje</label>
                        <input type="date" class="form-control" id="inicio">
                    </div>
                    <div class="mb-3">
                        <label class="fin" for="inicio">Fecha de Regreso</label>
                        <input type="date" class="form-control" id="fin">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary" id="dias">Calcular Días</button>
                    </div>
                </form>
            </div>
            <div class="calc-tarifas">
                <h2 class="title">Calculadora de <span>Tarifas</span></h2>
                <form class="form-tarifas">
                    <div class="mb-3">
                        <label for="inicio" class="inicio">Ubicación</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Seleccione ubicación</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="kilometros" for="inicio">Kilómetros</label>
                        <input type="text" class="form-control" id="kilometros">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary" id="dias">Calcular Tarifa</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="hidden">
            <input type="hidden" id="dolar_value" class="hidden" value="<?php echo $dolarRealValue ?>">
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            Copyright &copy; 2023. Todos los derechos reservados.
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script defer src="js/app.js"></script>
    <script defer src="js/converter.js"></script>
</body>

</html>
