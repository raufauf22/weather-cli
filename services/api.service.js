import https from 'https'
import { getKeyValue, TOKEN_DESC } from './storage.service.js'


const getWeather = (city) => {
    return new Promise(async (resolve, reject) => {
        let token
        token = await getKeyValue(TOKEN_DESC.token)
        if (token === undefined) {
            throw new Error('API key not transferred, pls enter -t [api_key]')
        }
    
    
        const url = new URL('https://api.openweathermap.org/data/2.5/weather?')
        url.searchParams.append('q', city)
        url.searchParams.append('appid', token)
        url.searchParams.append('units', 'metric')


        https.get(url, (res) => {
            let data
            
            if (res.statusCode === 401) {
                reject('Incorrect token')
            }
            else if (res.statusCode === 404) {
                reject('Incorrect city')
            }
    
            res.addListener('data', (chunk) => {
                data = JSON.parse(chunk.toString())
            })
            res.addListener('end', () => {
                resolve(data)
            })
        })
    })
}


export { getWeather }
