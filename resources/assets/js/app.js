'use strict'

const form = document.querySelector('#formulario-tarifas')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const output = document.querySelector('#output')
    const ubicacion = form.querySelector('input[type=radio]:checked')
    switch (ubicacion.value) {
        case 'valle-aburra':
            const responseQueryTCRM = await fetch('/queryTCRM')
            const dataQueryTCRM = await responseQueryTCRM.json()
            const { dollarRealValue } = dataQueryTCRM
            const km = form.querySelector('#kilometros')
            const tarifa = parseFloat(km.value) * parseFloat(dollarRealValue)
            output.value = `Tarifa: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(
                Math.ceil(parseFloat(tarifa)),
            )}`
            break
        case 'ceja-rionegro-retiro':
            output.value = `Tarifa: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(
                parseInt(54000),
            )}`
    }
})
