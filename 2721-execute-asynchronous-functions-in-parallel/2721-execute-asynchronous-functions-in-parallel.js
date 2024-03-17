/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        functions.forEach(fn => {
            fn()
            .then(val => results.push(val))
            .catch(reason => reject(reason));
        });
        resolve(results);
    })};/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve,reject)=>{
        if(functions.length === 0) {
            resolve([]);
            return;
        }
        const arr=new Array(functions.length);
        arr.fill(null);
        let count=0
        functions.forEach(async(fn,i)=>{
            try{
                arr[i]=await fn()
                count++
            
                if(count===functions.length){
                    resolve(arr);
                }
            }
            catch(e){
                reject(e);
            }
        
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
/*
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */