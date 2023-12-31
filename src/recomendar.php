<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/recomendarstyles.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
        <title>Recomendaci&oacute;n</title>
    </head>

    <body>
        <header class="header">
            <div class="contenedor">
                <div class="contenedor_nav">
                    <img src="//www.conecty.co/wp-content/uploads/2016/07/conecty-logo-2.png" width="320" height="110"
                        alt="SIM CARD PREPAGO INTERNACIONAL" />
                    <nav class="navegacion">
                        <a href="https://trm.conecty.co" class="navegacion__enlace" target="_blank">TRM</a>
                        <a href="https://empresa.conecty.co/forms/clientes.php" class="navegacion__enlace"
                            target="_blank">Registro Cliente</a>
                        <a href="https://empresa.conecty.co" class="navegacion__enlace" target="_blank">Panel de
                            Ventas</a>
                    </nav>
                </div>
            </div>
        </header>
        <main class="contenido">
            <h2 class="titulo_recomendacion">Recomendaci&oacute;n <span class="titulo_planes">de planes</span></h2>
            <p class="mejor">Queremos brindarle a nuestros clientes lo mejor, ingresa los datos para validar el mejor
                plan.</p>
            <form class="formulario">
                <div class="planes">
                    <div class="primero">
                        <label for="plan">
                            <h3>País de Viaje</h3>
                        </label>
                        <div class="select_pais">
                            <select name="plan" id="plan" class="plan" name="plan" required>
                                <option value="0">Seleccione...</option>
                                <option value="1">EEUU</option>
                                <option value="2">M&eacute;xico</option>
                                <option value="3">Global Sim</option>
                                <option value="4">Panamá</option>
                                <option value="5">Ecuador</option>
                                <option value="6">República Dominicana</option>
                                <option value="7">Colombia</option>
                                <option value="8">Curazao</option>
                                <option value="9">Argentina</option>
                                <option value="10">Eurodata</option>
                                <option value="11">Eurotravel</option>
                                <option value="12">Turquía por GB</option>
                                <option value="13">Turquía por días</option>
                                <option value="14">Emiratos Arabes Unidos (DUBAI, ABU DHABI) por Días </option>
                                <option value="15">Emiratos Arabes Unidos (DUBAI, ABU DHABI) por GB </option>
                                <option value="16">China, Hong Kong (HK), MACAO </option>
                            </select>
                        </div>
                    </div>
                    <div class="primero">
                        <label for="buu">
                            <h3>Días de viaje</h3>
                        </label>
                        <div class="btn_dias">
                            <input class="viaje" type="number" id="buu">
                        </div>
                    </div>
                    <div class="campo">
                        <h3 class="tipo_uso"> Tipo de Uso </h3>
                        <div class="datos_llamadas">
                            <li><label for="date" class="datos_uso">Datos</label>
                                <input type="checkbox" id="date" name="date">
                            </li>
                            <li><label for="ambos" class="llamadas_uso">Llamadas y Datos</label>
                                <input type="checkbox" id="ambos" name="ambos">
                            </li>
                        </div>
                    </div>
                    <div class="campo">
                        <label for="apps">
                            <h3 class="uso_frecuente">Aplicaciones de uso frecuente</h3>
                            <div class="opciones_app">
                                <select class="apps" name="apps" id="apps">
                                    <option value="0">Seleccione</option>
                                    <option value="bajo">Bajo</option>
                                    <option value="medio">Medio</option>
                                    <option value="alto">Alto</option>
                                    <option value="muyalto">Muy Alto</option>
                                </select>
                            </div>
                        </label>
                        <div class="resultado"></div>
                    </div>
                </div>
                <div class="enviar_datos">
                    <input type="submit" value="Consultar Plan" class="boton boton--primario" id="envio_recomendar">
                </div>
            </form>
        </main>
    </body>
    <script src="js/planes.js"></script>

</html>
