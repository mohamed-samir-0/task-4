    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "task-4"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

        //////////////////////////////////////////////////////////////

         db.collection('users').insertOne({
            name : 'Mohamed',
             age : 22
         },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
             console.log(data.insertedId)
         })
          db.collection('users').insertOne({
            name : 'Ahmed',
             age : 29
         },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
             console.log(data.insertedId)
         })
        

        //////////////////////////////////////////////////////////////
        db.collection ('users').insertMany(
           [ {
                name: 'kaka',
                age: 33
            },
            {
                name: 'zidan',
                age: 32
            },
            {
                name: 'salah',
                age: 31
            },
            {
                name: 'hany',
                age: 30
            },
            {
                name: 'zaki',
                age: 27
            },
            {
                name: 'shika',
                age: 27
            },
            {
                name: 'mahmoud',
                age: 27
            },
            {
                name: 'layan',
                age: 27
            },
            {
                name: 'habiba',
                age: 27
            },{


            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
            } 
        )
      
      
       db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
      ///////////////

      db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
         if (error) {
            return console.log('error has occured')
        }
       console.log(users)
     })
     /////////////////
     db.collection('users')
  .find({})
  .limit(4)
  .toArray()
  .then(docs => {
    const ids = docs.map(doc => doc._id); 

    return db.collection('users').updateMany(
      { _id: { $in: ids } },
      { $set: { name: 'ronaldo' } } 
    );
  })
  .then(result => {
    console.log(`${result.modifiedCount} documents updated`);
  })
  .catch(error => {
    console.log(error);
  });
  //////////////////////////////
  db.collection('users')
  .find({})
  .limit(4)
  .toArray()
  .then(docs => {
    const ids = docs.map(doc => doc._id);

    return db.collection('users').updateMany(
      { _id: { $in: ids } }, 
      { $inc: { age: 1 } }   
    );
  })
  .then(result => {
    console.log(`${result.modifiedCount} documents updated`);
  })
  .catch(error => {
    console.log(error);
  });
  ////////////////////////////////////
     db.collection('users').updateMany({},{
        $inc: {age: 10}
     }).
      then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
     ///////////////////
      db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})
//////////////////////
})

     


