 const logger= pram=> state=> next=> action => {
    console.log(pram);
    next(action);
}

export default logger;