import chalk from 'chalk'
import dedent from 'dedent-js'


const printSuccess = (msg) => {
    console.log(
        `${chalk.bgGreen('SUCCESS')} ${msg}`
    )
}

const printError = (err) => {
    console.log(
        `${chalk.bgRed('ERROR')} ${err}`
    )
}

const printHelp = () => {
    console.log(
        dedent(
            `${chalk.bgCyan('HELP')} 
            без параметров - вывод погоды
            -h для вывода помощи
            -t [api_key] для сохранения токена
            -s [city] для установки города`
        )
    )
}

const printWeather = (data) => {
    if (data === undefined) {
        return
    }

    const icon = data.weather[0].icon.slice(0, -1)
    let emoji
    if (icon === '01') {
        emoji = '☀️'
    }
    else if (icon === '02') {
        emoji = '⛅️'
    }
    else if (icon === '02') {
        emoji = '⛅️'
    }
    else if (icon === '03') {
        emoji = '☁️'
    }
    else if (icon === '04') {
        emoji = '☁️'
    }
    else if (icon === '09') {
        emoji = '🌧️'
    }
    else if (icon === '10') {
        emoji = '🌦️'
    }
    else if (icon === '11') {
        emoji = '🌩️'
    }
    else if (icon === '13') {
        emoji = '❄️'
    }
    else if (icon === '50') {
        emoji = '🌫️'
    }

    console.log(
        dedent(
            `${emoji}  ${data.name}
            ${data.weather[0].main}
            temperature: ${data.main.temp} °C`
        )
    )
}


export { printSuccess, printError, printHelp, printWeather }
