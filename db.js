const { MongoClient } = require('mongodb');

module.exports = {
    selectedDb : {},
    async connect(){
        try {
            const client = await MongoClient.connect("mongodb+srv://kukila:kukila18@cluster0.ncxf1tj.mongodb.net/")
            this.selectedDb=client.db('assignment')
            console.log("Db connection")
        } catch (error) {
            console.log(err)
            
        }
    }
}