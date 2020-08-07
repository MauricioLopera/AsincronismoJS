const doSomethigAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Haciendo algo asincrono'),4000)
            : reject(new Error('Error'))
    });
}

const doSomethig = async () => {
    const something = await doSomethigAsync();
    console.log(something);
}

doSomethig();