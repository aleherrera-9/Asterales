let flag=true;
const ProductPromise = (time,task)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag){
                resolve(task);
            }else{
                reject("Error in ProductPromise")
            }
        },time);
    })
}

export default ProductPromise;