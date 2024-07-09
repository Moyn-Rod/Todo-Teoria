let arr=[1,2,3];

function Lista(){                       // Creo una fn constructora.
    this.count=0;
    this.total=0;
};

Lista.prototype.add=function(arr){ 
    arr.forEach(function (ele){
        ++this.count
        this.total+=ele
    },this)  
}
const ver =new Lista();
ver.add(arr)

console.log(ver)




