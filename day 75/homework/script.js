const executoirn = () => {
    return new Promise((sucsess) => {
        setTimeout(( ) => {sucsess("sucsessfull")}, 5000)
    })
}

const prom = executoirn();

const executoirn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {resolve("rejected")}, 5000)
    })
}

const prom2 = executoirn();