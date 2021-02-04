//Use this function with the main file(used for creating database).

const updateDocument = async(__id)=>{
try{
const result = await Playlist.updateOne({__id},{
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

