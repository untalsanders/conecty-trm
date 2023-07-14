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
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans:wght@700&family=Poppins:wght@700&display=swap" rel="stylesheet">
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
            <div class="control_trm">
                <h2 class="trm">
                    Valor del dólar e indicadores en <span class="trm_colombia">Colombia</span>
                </h2>
                <!-- DolarWeb IndMin Start -->
                <div id="IndicadoresMin">
                    <h2>
                        <a href="https://dolar.wilkinsonpc.com.co/"></a>
                    </h2>
                </div>
                <script src="https://dolar.wilkinsonpc.com.co/widgets/gratis/indicadores-economicos-min.js?ancho=170&alto=85&fondo=transparent&fsize=10&ffamily=sans-serif&fcolor=000000"></script>
                <!-- DolarWeb IndMin End -->
                <div class="convertidor">
                    <h2 class="trm">
                        Convertidor de
                        <span class="trm_colombia">Dólares a Pesos</span>
                    </h2>
                    <div class="grid_convertidor">
                        <label class="valdolares">Dólares</label>
                        <input class="dolares" id="dolar" type="number">
                        <Label class="valdolares">Pesos</Label>
                        <input type="text" class="pesos" readonly>
                    </div>
                    <div class="btn_convert">
                        <input class="btn boton--primario calc-convert" type="submit" id="convertir" value="Convertir">
                    </div>
                </div>
            </div>
            <div class="control_calculadora">
                <h2 class="calculadora">Calculadora de días <span class="calculadora_viaje">de viaje </span></h2>
                <div class="campo">
                    <label class="inicio" for="inicio">
                        <h3>Fecha inicio de viaje</h3>
                    </label>
                    <label class="fin" for="inicio">
                        <h3>Fecha de Regreso</h3>
                    </label>
                    <input class="inicio_date" type="date" id="inicio_date">
                    <input class="fin_date" type="date" id="fin_date">
                </div>
                <div class="btncal">
                    <input class="boton boton--primario calc-days" id="dias" type="submit" value="Calcular Días">
                </div>
                <div class="resultado">
                    <input class="resultado_dias" type="text" id="calculo_dias" placeholder="Días de viaje" readonly>
                </div>
            </div>
        </div>
    </main>
    <div class="hidden">
        <input type="hidden" id="dolar_value" class="hidden" value="<?php echo $dolarRealValue ?>">
    </div>

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
