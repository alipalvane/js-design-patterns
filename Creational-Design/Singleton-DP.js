// Singleton Pattern / Strict Pattern - Creational Design
const Database = (function(){
    let instance

    function createDatabaseInstance(){
        return new Object('Database Instance Create.')
    }

    function getDatabaseInstance(){
        if(!instance){
            instance = createDatabaseInstance()
        }
        return instance
    }

    return {getDatabaseInstance}
})()

const databaseIns1 = Database.getDatabaseInstance()
const databaseIns2 = Database.getDatabaseInstance()

console.log(Database)
console.log(databaseIns1)
console.log(databaseIns2)

console.log(databaseIns1 === databaseIns2)
