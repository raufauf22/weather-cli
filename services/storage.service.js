import { stat, readFile, writeFile } from 'fs'
import { resolve } from 'path' 
import { homedir } from 'os'


const pathFile = resolve(homedir(), 'weather.data.json')


const TOKEN_DESC = {
    token: 'token',
    city: 'city'
}

const saveKeyValue = (key, value) => {
    let dataJSON = {}

    return new Promise((resolve) => {
        stat(pathFile, (err, stats) => {
            if (err) {
                resolve(0)
            }
            else {
                resolve(1)
            }
        })
    })
    .then(data => {
        return new Promise((resolve, reject) => {
            if (data === 0) {
                dataJSON[key] = value
                
                writeFile(pathFile, JSON.stringify(dataJSON), () => {
                    resolve()
                })
            }
            else {
                readFile(pathFile, (err, data) => {
                    try {
                        dataJSON = JSON.parse(data)
                        dataJSON[key] = value

                        resolve(dataJSON)
                    }
                    catch(err) {
                        reject(err)
                    }
                })
            }
        })
    })
    .then(data => {
        if (data) {
            return new Promise((resolve) => {
                writeFile(pathFile, JSON.stringify(data), () => {
                    resolve()
                })
            })
        }
    })
}

const getKeyValue = (key) => {
    return new Promise((resolve, reject) => {
        stat(pathFile, (err, stats) => {
            if (stats) {
                resolve(1)
            }
            else {
                resolve(undefined)
            }
        })
    })
    .then((data) => {
        if (data) {
            return new Promise((resolve, reject) => {
                readFile(pathFile, (err, data) => {
                    try {
                        const dataObj = JSON.parse(data)
    
                        resolve(dataObj[key])
                    }
                    catch(err) {
                        reject(err)
                    }
                })    
            })
        }
    })
}


export { saveKeyValue, getKeyValue, TOKEN_DESC }
