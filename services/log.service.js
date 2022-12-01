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
            npm run
                help - for getting help
                token [api_key] - for save token in centralized storage
                save [city] - for save city in centralized storage
                start - for getting weather`
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
