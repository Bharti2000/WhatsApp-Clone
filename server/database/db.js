import mongoose from 'mongoose';

const Connection = async(username,password) =>{
    // const URL ='mongodb://user:67@iLikemaths@chatapp-shard-00-00.43idx.mongodb.net:27017,chatapp-shard-00-01.43idx.mongodb.net:27017,chatapp-shard-00-02.43idx.mongodb.net:27017/WhatsAppClone?ssl=true&replicaSet=atlas-vidzza-shard-0&authSource=admin&retryWrites=true&w=majority'
    // const URL= `mongodb://${username}:${password}@chatapp-shard-00-00.3x2rq.mongodb.net:27017,chatapp-shard-00-01.3x2rq.mongodb.net:27017,chatapp-shard-00-02.3x2rq.mongodb.net:27017/WhatsAppClone?ssl=true&replicaSet=atlas-l1coph-shard-0&authSource=admin&retryWrites=true&w=majority`
    const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.43idx.mongodb.net:27017,chatapp-shard-00-01.43idx.mongodb.net:27017,chatapp-shard-00-02.43idx.mongodb.net:27017/WhatsAppClone?ssl=true&replicaSet=atlas-vidzza-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true  });
        console.log('Database is connected successfully');
    }catch(error){
        console.log('Error while connecting to mongodb ',error);
    }
}
export default Connection;
