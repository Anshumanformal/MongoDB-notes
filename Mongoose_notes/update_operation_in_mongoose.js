//Use this function with the main file(used for creating database).

const updateDocument = async(_id)=>{
try{
const result = await Playlist.updateOne({_id},{
      $set : {
            name : "JavaScript"  
             }
        });
        console.log(result);
        
}catch(err){
console.log(err);
}
}

updateDocument(<some ID>);

