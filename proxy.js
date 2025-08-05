

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

// proxyUser.age = 40
// proxyUser.name = 'Elia'


console.log(proxyUser)