const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)

const wait = () => {
    console.log('Mostar')
}

setTimeout(wait, 500)