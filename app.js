import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')
await client.connect()
const db = client.db()
const collection = db.collection("users")

// By default { upsert value is false } if condition not match then retrun null value

// const data = await collection.updateMany({name: "messi"}, {$set: {age: 32}})
// console.log(data);


// Here condition is not match but it create and set the value. Because of { upsert value is true }

const data = await collection.updateMany({name: "kumar shubham"}, {$set: {age: 32}}, {upsert: true})
console.log(data);

client.close()