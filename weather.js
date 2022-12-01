import { getArgs } from './helpers/args.helper.js'
import { getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js'
import { saveKeyValue, getKeyValue, TOKEN_DESC } from './services/storage.service.js'


const saveToken = async (token) => {
    if (token === true) {
        printError('Token not transferred')
        return
    }

    try {
        await saveKeyValue(TOKEN_DESC.token, token)
        printSuccess('Token loaded')
    }
    catch(err) {
        printError(err.message)
    }
}

const saveCity = async (city) => {
    if (city === true) {
        printError('City not transferred')
        return
    }

    try {
        await saveKeyValue(TOKEN_DESC.city, city)
        printSuccess('city loaded')
    }
    catch(err) {
        printError(err.message)
    }
}

const showWeather = async () => {
    try {
        const city = await getKeyValue(TOKEN_DESC.city) || 'hongkong'
        const data = await getWeather(city)

        return data
    }
    catch(err) {
        printError(err)
    }
}


const main = async () => {
    const args = getArgs(process.argv)

    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return await saveCity(args.s)
    }
    if (args.t) {
        return await saveToken(args.t)
    }

    const data = await showWeather()
    return printWeather(data)
}


main()
