'use strict'

// Recomendacion planes

const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const pais = document.querySelector('#plan').value
    var dias = document.getElementById('buu').value
    const ambos_datos = document.querySelector('#ambos').checked
    const date = document.querySelector('#date').checked
    const frecuente = document.querySelector('#apps').value

    if (pais == 0 && dias == '' && date == false && ambos_datos == false) {
        mostrarAlerta('Selecciona las opciones', true)
        return
    } else if (date == '' && ambos_datos == '') {
        mostrarAlerta('Selecciona almenos una opción Tipo de Uso', true)
        return
    } else if (date == true && ambos_datos == true) {
        mostrarAlerta('Error: debes seleccionar solo un tipo de uso', true)
        return
    } else if (dias == '' || dias < 0 || dias == 0) {
        mostrarAlerta('Error: Ingrese un número válido', true)
        return
    } else if (pais == 0) {
        mostrarAlerta('Error: Ingrese el país de viaje', true)
        return
    }

    console.log('soy pais' + pais)
    switch (parseInt(pais)) {
        case 1: //Estados unidos se toma con la vigencia del plan e ilimitado no importan redes
            if (date != false) {
                //por datos
                if (dias >= 1 && dias <= 5) {
                    mostrarAlerta('El plan recomendado: EEUU - 2 GB Diarias - $25')
                } else if (parseInt(dias) > 5 && parseInt(dias) <= 7) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 07 días - $35 + Llamadas a EEUU')
                } else if (parseInt(dias) > 7 && parseInt(dias) <= 12) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 12 días - $40+ Llamadas a EEUU')
                } else if (parseInt(dias) > 12 && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 15 días - $45 + Llamadas a EEUU')
                } else if (parseInt(dias) > 15 && parseInt(dias) <= 20) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 20 días - $50 + Llamadas a EEUU')
                } else if (parseInt(dias) > 20 && parseInt(dias) <= 30) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 30 días - $55 + Llamadas a EEUU')
                } else if (parseInt(dias) > 30) {
                    mostrarAlerta('El plan recomendado: EEUU TM - Ilimitado LOCAL 30 días - $55 + llamadas a EEUU')
                }
            } else if (ambos_datos != false) {
                //llamadas y datos
                if (parseInt(dias) >= 1 && parseInt(dias) <= 5) {
                    mostrarAlerta('El plan recomendado: EEUU - 2 GB Diarias - $25', true)
                } else if (parseInt(dias) > 5 && parseInt(dias) <= 8) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 8 días - $40 + llamadas a EEUU y llamadas a Colombia',
                    )
                } else if (parseInt(dias) > 8 && parseInt(dias) <= 12) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 12 días - $45 + llamadas a EEUU y llamadas a Colombia',
                    )
                } else if (parseInt(dias) > 12 && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 15 días - $50 + llamadas a EEUU y llamadas a Colombia',
                    )
                } else if (parseInt(dias) > 15 && parseInt(dias) <= 20) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 20 días - $55 + llamadas a EEUU y llamadas a Colombia',
                    )
                } else if (parseInt(dias) > 20 && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 30 días - $60 + llamadas a EEUU y llamadas a Colombia',
                    )
                } else if (parseInt(dias) >= 30) {
                    mostrarAlerta(
                        'El plan recomendado: EEUU TM - Ilimitado INTL 30 días - $60 + llamadas a EEUU y llamadas a Colombia',
                    )
                }
            }
            break
        case 2: //México
            if (date != false) {
                if (frecuente == 'bajo' && parseInt(dias) <= 8) {
                    mostrarAlerta(
                        'El plan recomendado: México - 2.5 GB SOLO DATOS - $25 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (frecuente == 'bajo' && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: México - 3.5 GB SOLO DATOS - $30 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (frecuente == 'bajo' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 5 GB SOLO DATOS - $35 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (frecuente == 'medio' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 8 GB - $45 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (frecuente == 'alto' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 12 GB - $60 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 14 GB - $75 + Redes Sociales que no consumen de tus datos',
                    )
                } else if (
                    frecuente == 'bajo' ||
                    frecuente == 'medio' ||
                    frecuente == 'alto' ||
                    (frecuente == 'muyalto' && parseInt(dias) > 30)
                ) {
                    mostrarAlerta(
                        'El plan recomendado: México - 14 GB - $75 + Redes Sociales que no consumen de tus datos',
                    )
                }
            }
            if (ambos_datos != false) {
                if (frecuente == 'bajo' && parseInt(dias) <= 5) {
                    mostrarAlerta(
                        'El plan recomendado: México - 3 GB SOLO DATOS - $25 Vigencia 5 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'bajo' && parseInt(dias) <= 10) {
                    mostrarAlerta(
                        'El plan recomendado: México - 6 GB SOLO DATOS - $30 Vigencia 10 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'bajo' && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'bajo' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos, La vigencia de estos planes son de 5, 10 y 15 días',
                    )
                } else if (frecuente == 'medio' && parseInt(dias) <= 5) {
                    mostrarAlerta(
                        'El plan recomendado: México - 3 GB SOLO DATOS - $25 Vigencia 5 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'medio' && parseInt(dias) <= 10) {
                    mostrarAlerta(
                        'El plan recomendado: México - 6 GB SOLO DATOS - $30 Vigencia 10 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'medio' && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'medio' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos, La vigencia de estos planes son de 5, 10 y 15 días',
                    )
                } else if (frecuente == 'alto' && parseInt(dias) <= 5) {
                    mostrarAlerta(
                        'El plan recomendado: México - 6 GB SOLO DATOS - $30 Vigencia 10 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'alto' && parseInt(dias) <= 10) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'alto' && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'alto' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos, La vigencia de estos planes son de 5, 10 y 15 días',
                    )
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 15) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos ',
                    )
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 30) {
                    mostrarAlerta(
                        'El plan recomendado: México - 10 GB SOLO DATOS - $35 Vigencia 15 días + 1700 minutos + Redes Sociales que no consumen de tus datos, La vigencia de estos planes son de 5, 10 y 15 días',
                    )
                }
            }
            break
        case 3: //Global Sim
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (date != false && frecuente == 'bajo' && dias <= 30) {
                mostrarAlerta('El plan recomendado: Global Sim - 6 GB - $30')
            } else if (date != false && frecuente == 'medio' && dias <= 30) {
                mostrarAlerta('El plan recomendado: Global Sim - 6 GB - $30')
            } else if (date != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta('El plan recomendado: Global Sim - 12 GB - $40')
            } else if (date != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta('El plan recomendado: Global Sim - 12 GB - $40')
            }
            if (ambos_datos != false) {
                mostrarAlerta('Error: Global Sim solo es un plan de datos, Selecciona opción datos.', true)
            }
            break
        case 4: //Panamá
            if (date != false) {
                mostrarAlerta(
                    'Error: Panamá no cuenta con planes de datos, por favor selecciona la opción llamada y datos',
                    true,
                )
            } else if (ambos_datos != false) {
                if (dias >= 1 && dias <= 7) {
                    mostrarAlerta(
                        'El plan recomendado: Panamá - Ilimitado 07 días - $25 Vigencia 7 días + 25 minutos locales o a Colombia',
                    )
                } else {
                    mostrarAlerta('Error: Recuerda que el plan tiene vigencia 7 días', true)
                }
            }
            break
        case 5: //Ecuador
            if (date != false) {
                mostrarAlerta('Error: Ecuador no cuenta con plan de datos, Selecciona la opción llamadas y datos', true)
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Ecuador - 10 GB - $30 Vigencia 30 días + 100 minutos locales o a Colombia',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Ecuador - 10 GB - $30 Vigencia 30 días + 100 minutos locales o a Colombia',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Ecuador - 15 GB - $35 Vigencia 30 días + 400 minutos locales o a Colombia',
                )
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Ecuador - 15 GB - $35 Vigencia 30 días + 400 minutos locales o a Colombia',
                )
            }
            break
        case 6: //República Dominicana
            if (ambos_datos != false) {
                mostrarAlerta(
                    'Error: República Dominicana no cuenta con plan de llamadas, Selecciona la opción Datos.',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (date != false && frecuente == 'bajo' && dias <= 5) {
                mostrarAlerta('El plan recomendado: República Dominica - 5 GB - $30 Vigencia 5 días')
            } else if (date != false && frecuente == 'medio' && dias <= 5) {
                mostrarAlerta('El plan recomendado: República Dominica - 5 GB - $30 Vigencia 5 días')
            } else if (date != false && frecuente == 'alto' && dias <= 10) {
                mostrarAlerta('El plan recomendado: República Dominica - 10 GB - $35 Vigencia 10 días')
            } else if (date != false && frecuente == 'alto' && dias > 10) {
                mostrarAlerta('El plan recomendado: República Dominica - 10 GB - $35 Vigencia 10 días')
            } else if (date != false && frecuente == 'muyalto' && dias <= 10) {
                mostrarAlerta('El plan recomendado: República Dominica - 10 GB - $35 Vigencia 10 días')
            } else if (date != false && frecuente == 'muyalto' && dias > 10) {
                mostrarAlerta('El plan recomendado: República Dominica - 10 GB - $35 Vigencia 10 días')
            }
            break
        case 7: //Colombia
            if (date != false) {
                mostrarAlerta(
                    'Error: Colombia no cuenta con plan de datos, Selecciona la opción llamadas y datos',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 15) {
                mostrarAlerta(
                    'El plan recomendado: Conecty Colombia - 14 GB - $30 Vigencia 30 días + minutos ilimitados + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 22) {
                mostrarAlerta(
                    'El plan recomendado: Conecty Colombia - 22 GB - $35 Vigencia 30 días + minutos ilimitados + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Conecty Colombia - 32 GB - $40 Vigencia 30 días + minutos ilimitados + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Conecty Colombia - 50 GB - $45 Vigencia 30 días + minutos ilimitados + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Conecty Colombia - Ilimitado - $50 Vigencia 30 días + minutos ilimitados + WhatsApp ilimitado',
                )
            }

            break
        case 8: //Aruba, Bonaire, Curazao
            if (ambos_datos != false) {
                mostrarAlerta(
                    'Error: Aruba, Bonaire y Curazao no cuenta con plan de llamadas, Selecciona la opción Datos.',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (date != false && frecuente == 'bajo' && dias <= 3) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 2 GB - $25 Vigencia 3 días')
            } else if (date != false && frecuente == 'medio' && dias <= 3) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 2 GB - $25 Vigencia 3 días')
            } else if (date != false && frecuente == 'alto' && dias <= 7) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 5 GB - $40 Vigencia 7 días')
            } else if (date != false && frecuente == 'alto' && dias > 7) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 5 GB - $40 Vigencia 7 días')
            } else if (date != false && frecuente == 'muyalto' && dias <= 7) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 5 GB - $40 Vigencia 7 días')
            } else if (date != false && frecuente == 'muyalto' && dias > 7) {
                mostrarAlerta('El plan recomendado: Aruba, Bonaire y Curazao - 5 GB - $40 Vigencia 7 días')
            }
            break
        case 9: //Argentina
            if (date != false) {
                mostrarAlerta(
                    'Error: Argentina no cuenta con plan de datos, Selecciona la opción llamadas y datos',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 6 GB - $35 Vigencia 30 días + 1000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'bajo' && dias > 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 6 GB - $35 Vigencia 30 días + 1000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 6 GB - $35 Vigencia 30 días + 1000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias > 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 6 GB - $35 Vigencia 30 días + 1000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 12 GB - $40 Vigencia 30 días + 2000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias > 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 12 GB - $40 Vigencia 30 días + 2000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 12 GB - $40 Vigencia 30 días + 2000 minutos locales + WhatsApp ilimitado',
                )
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias > 30) {
                mostrarAlerta(
                    'El plan recomendado: Argentina - 12 GB - $40 Vigencia 30 días + 2000 minutos locales + WhatsApp ilimitado',
                )
            }
            break
        case 10: //Eurodata
            if (date != false) {
                mostrarAlerta(
                    'Error: Eurodata no cuenta con plan de datos, Selecciona la opción llamadas y datos',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 28) {
                mostrarAlerta('El plan recomendado: Eurodata - 30 GB - $30 Vigencia 28 días + minutos ilimitados')
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 28) {
                mostrarAlerta('El plan recomendado: Eurodata - 50 GB - $35 Vigencia 28 días + minutos ilimitados')
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 28) {
                mostrarAlerta('El plan recomendado: Eurodata - 95 GB - $40 Vigencia 28 días + minutos ilimitados')
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias <= 28) {
                mostrarAlerta('El plan recomendado: Eurodata - 95 GB - $40 Vigencia 28 días + minutos ilimitados')
            }
            break
        case 11: //Eurotravel
            if (date != false) {
                mostrarAlerta(
                    'Error: Eurotravel no cuenta con plan de datos, Selecciona la opción llamadas y datos',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 7) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - S 7 GB - $25 Vigencia 28 días + 300 minutos + Bono España 18 GB',
                )
            } else if (ambos_datos != false && frecuente == 'bajo' && dias <= 10) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - M 10 GB - $30 Vigencia 28 días + 800 minutos + Bono España 40 GB',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 13) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - L 13 GB - $35 Vigencia 28 días + minutos ilimitados + Bono España 87 GB',
                )
            } else if (ambos_datos != false && frecuente == 'medio' && dias <= 20) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - XL 20 GB - $40 Vigencia 28 días + minutos ilimitados + Bono España 100 GB',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 20) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - XL 20 GB - $40 Vigencia 28 días + minutos ilimitados + Bono España 100 GB',
                )
            } else if (ambos_datos != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - XXL 30 GB - $50 Vigencia 28 días + minutos ilimitados + Bono España 120 GB',
                )
            } else if (ambos_datos != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta(
                    'El plan recomendado: Eurotravel - XXL 30 GB - $50 Vigencia 28 días + minutos ilimitados + Bono España 120 GB',
                )
            }
            break
        case 12: //Turquia por GB
            console.log('ingrese a turquia')
            if (date != false) {
                if (frecuente == 'bajo' && parseInt(dias) <= 5) {
                    mostrarAlerta('El plan recomendado: Turquía - 3 GB  $25 Vigencia 30 días')
                } else if (frecuente == 'bajo' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 5 GB - $35 Vigencia 30 días')
                } else if (frecuente == 'medio' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 5 GB  $35 Vigencia 30 días')
                } else if (frecuente == 'medio' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Turquía - 10 GB  $50 Vigencia 30 días')
                } else if (frecuente == 'medio' && parseInt(dias) <= 30) {
                    mostrarAlerta('El plan recomendado: Turquía - 20 GB  $50 Vigencia 30 días')
                } else if (frecuente == 'alto' && parseInt(dias) <= 30) {
                    mostrarAlerta('El plan recomendado: Turquía - 20 GB  $50 Vigencia 30 días')
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 30) {
                    mostrarAlerta('El plan recomendado: Turquía - 20 GB  $50 Vigencia 30 días')
                }
            }
            if (ambos_datos != false) {
                mostrarAlerta('Error: Turquía solo es un plan de datos,  Selecciona opción Tipo de Uso - Datos', true)
            }
            break
        case 13: //Turquia por dias
            if (date != false) {
                if (frecuente == 'bajo' && parseInt(dias) <= 5) {
                    mostrarAlerta('El plan recomendado: Turquía - 300 MB  $4 por día')
                } else if (frecuente == 'bajo' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 500 MB  $5 por día')
                } else if (frecuente == 'bajo' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Turquía - 1 GB  $6 por día')
                }
                if (frecuente == 'medio' && parseInt(dias) <= 5) {
                    mostrarAlerta('El plan recomendado: Turquía - 300 MB  $4 por día')
                } else if (frecuente == 'medio' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 500 MB  $5 por día')
                } else if (frecuente == 'medio' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Turquía - 1 GB  $6 por día')
                }
                if (frecuente == 'alto' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 500 MB  $5 por día')
                } else if (frecuente == 'alto' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Turquía - 1 GB  $6 por día')
                }
                if (frecuente == 'muyalto' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Turquía - 500 MB  $5 por día')
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Turquía - 1 GB  $6 por día')
                }
            }
            if (ambos_datos != false) {
                mostrarAlerta('Error: Turquía solo es un plan de datos,  Selecciona opción Tipo de Uso - Datos', true)
            }
            break
        case 14: //Emiratos Arabes Dias
            if (date != false) {
                if (frecuente == 'bajo') {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 200 MB - $6 por día')
                } else if (frecuente == 'medio') {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 300 MB - $7 por día')
                } else if (frecuente == 'alto') {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 500 MB - $10 por día')
                } else if (frecuente == 'muyalto') {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 1 GB - $16 por día')
                }
            }
            if (ambos_datos != false) {
                mostrarAlerta(
                    'Error: Emiratos Arabes solo es un plan de datos, Selecciona opción Tipo de Uso Datos',
                    true,
                )
            }

            break
        case 15: //Emiratos Arabes GB
            if (date != false) {
                if (frecuente == 'bajo' && parseInt(dias) <= 5) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 2 GB - $35 Vigencia 5 días')
                } else if (frecuente == 'bajo' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 3 GB - $45 Vigencia 10 días')
                } else if (frecuente == 'medio' && parseInt(dias) <= 10) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 5 GB - $65 Vigencia 10 días')
                } else if (frecuente == 'medio' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 8 GB - $85 Vigencia 15 días')
                } else if (frecuente == 'alto' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 8 GB - $85 Vigencia 15 días')
                } else if (frecuente == 'muyalto' && parseInt(dias) <= 15) {
                    mostrarAlerta('El plan recomendado: Emiratos Arabes - 10 GB - $105 Vigencia 15 días')
                }
            }
            if (ambos_datos != false) {
                mostrarAlerta(
                    'Error: Emiratos Arabes solo es un plan de datos, Selecciona opción Tipo de Uso Datos',
                    true,
                )
            }

            break
        case 16: //China
            if (ambos_datos != false) {
                mostrarAlerta(
                    'Error: China, Hong Kong (HK) Y MACAO no cuenta con plan de llamadas, Selecciona la opción Datos.',
                    true,
                )
            }
            if (frecuente == '0') {
                mostrarAlerta('Error: Seleccione una opción de aplicaciones de uso frecuente', true)
            } else if (date != false && frecuente == 'bajo' && dias <= 15) {
                mostrarAlerta('El plan recomendado: China - 8 GB - $40 Vigencia 15 días')
            } else if (date != false && frecuente == 'bajo' && dias <= 30) {
                mostrarAlerta('El plan recomendado: China - 10 GB - $45 Vigencia 30 días')
            } else if (date != false && frecuente == 'medio' && dias <= 15) {
                mostrarAlerta('El plan recomendado: China - 8 GB - $40 Vigencia 15 días')
            } else if (date != false && frecuente == 'medio' && dias <= 30) {
                mostrarAlerta('El plan recomendado: China - 10 GB - $45 Vigencia 30 días')
            } else if (date != false && frecuente == 'alto' && dias <= 15) {
                mostrarAlerta('El plan recomendado: China - 8 GB - $40 Vigencia 15 días')
            } else if (date != false && frecuente == 'alto' && dias <= 30) {
                mostrarAlerta('El plan recomendado: China - 10 GB - $45 Vigencia 30 días')
            } else if (date != false && frecuente == 'muyalto' && dias <= 15) {
                mostrarAlerta('El plan recomendado: China - 8 GB - $40 Vigencia 15 días')
            } else if (date != false && frecuente == 'muyalto' && dias <= 30) {
                mostrarAlerta('El plan recomendado: China - 10 GB - $45 Vigencia 30 días')
            }

            break

        default:
            mostrarAlerta('Ingresa los datos por favor', true)
            break
    }

    formulario.reset()
})

// Alertas
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('exitoso')
    }
    formulario.appendChild(alerta)
    setTimeout(() => {
        alerta.remove()
    }, 9000)
}

// Aplicacion de uso frecuente
const selectElement = document.querySelector('.apps')
selectElement.addEventListener('change', event => {
    const resultado = document.querySelector('.resultado')
    resultado.textContent = `${event.target.value}`
    if (resultado.textContent == 'bajo') {
        resultado.textContent = `Whatsapp, Messenger, Tripadvisor, expedia`
    } else if (resultado.textContent == 'medio') {
        resultado.textContent = `Waze, Google Maps, Correo, Navegador, Gmail, Hotmail,. Outlook, Google, Yahoo`
    } else if (resultado.textContent == 'alto') {
        resultado.textContent = `Facebook, Twitter, Instagram, TikTok, Snapchat`
    } else {
        resultado.textContent = `Youtube, Netflix, Streaming de video`
    }
    setTimeout(() => {
        resultado.remove()
    }, 6000)
})
