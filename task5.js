let array = ["1","2","2","4","3","5","8","5","7","5"]
let newarray = []
for(let i = 0; i < array.length; i++){
    let isnum = false
    for(let j = 0; j < newarray.length; j++) {
        if (newarray[j] === array[i]){
            isnum = true
        }
    }
    if(!isnum){
        newarray.push(array[i])
    }
}
console.log(newarray)