<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="preload" href="css/styles.css" as="style">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans:wght@700&family=Poppins:wght@700&display=swap" rel="stylesheet">
    <title>TRM del día</title>
</head>

<body>
    <header>
        <div class="contenedor">
            <div class="contenedor_nav">
                <img src="https://www.conecty.co/wp-content/uploads/2016/07/conecty-logo-2.png" width="320" height="110" alt="SIM CARD PREPAGO INTERNACIONAL" />
                <nav class="navegacion">
                    <a href="recomendar.html" class="navegacion__enlace" target="_blank">Recomendación de Plan</a>
                    <a href="https://empresa.conecty.co/forms/clientes.php" class="navegacion__enlace" target="_blank">Registro Cliente</a>
                    <a href="https://empresa.conecty.co" class="navegacion__enlace" target="_blank">Panel de Ventas</a>
                </nav>
            </div>
        </div>
    </header>
    <main class="control">
        <div class="trmycalculadora">
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
                <script type="text/javascript" src="https://dolar.wilkinsonpc.com.co/widgets/gratis/indicadores-economicos-min.js?ancho=170&alto=85&fondo=transparent&fsize=10&ffamily=sans-serif&fcolor=000000"></script><!-- DolarWeb IndMin End -->
                <div class="convertidor">
                    <h2 class="trm">Convertidor de
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script defer src="js/converter.js"></script>
</body>

</html>
