const getArgs = (args) => {
    const outputArgs = {}
    const sliceArgs = args.slice(2)

    sliceArgs.forEach((arg, i, arr) => {
        if (arg[0] === '-') {
            if (i === arr.length - 1) {
                outputArgs[arg.slice(1)] = true
            }
            else if (arr[i + 1][0] !== '-') {
                outputArgs[arg.slice(1)] = arr[i + 1]
            }
            else {
                outputArgs[arg.slice(1)] = true
            }
        }
    })

    return outputArgs
}


export { getArgs }
