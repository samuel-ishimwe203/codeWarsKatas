
/* proxy is an object that allows you to intercept and customize operation performed 
 to another object (the called target) using traps inside a hander object  */


const user = {
    name :'samuel',
    age : 30
}

const validators = {
    set(target , property , value){
        if(property === 'age' && typeof value !=='number'){
            throw new Error('Age must be a number')
        }

        target[property]=value
        return true
    }
}

const proxyUser = new   Proxy(user , validators)

proxyUser.age = 40
proxyUser.name = 'Elia'


console.log(proxyUser)


// second example

const propOne ={
    prop1 : 'hello',
    prop2 : 'GoodBy'
}

const hander = {
    default: 'No property',
    get: function(target, prop,reciever){
        if(prop in target){
            return target[prop].toUpperCase()
        }
        return this.default
    }
}

const newPro = new Proxy(propOne, hander)
newPro.prop1 = 'Kigali'
newPro.prop2 = 'Rwanda'
console.log(newPro.prop1 )
