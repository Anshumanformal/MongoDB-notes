const deleteDocument = async (_id)=>{
   try{
    // const result = new Playlist.deleteOne(_id);
    const result = new Playlist.findByIdAndDelete(_id);
    console.log(result);
   }catch(err){
       console.log(err);
   }
}

deleteDocument(<some ID>);
