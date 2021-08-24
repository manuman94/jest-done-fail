

export function promiseTimeout(timeout = 5000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
}