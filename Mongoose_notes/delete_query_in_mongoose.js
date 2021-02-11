const deleteDocument = async (_id)=>{
   try{
    // const result = await new Playlist.deleteOne(_id);
    const result = await new Playlist.findByIdAndDelete(_id);
    console.log(result);
   }catch(err){
       console.log(err);
   }
}

deleteDocument(<some ID>);
