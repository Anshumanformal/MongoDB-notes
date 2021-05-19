const deleteDocument = async (_id)=>{
   try{
    // const result = await new Playlist.deleteOne({_id : id});
    const result = await new Playlist.findByIdAndDelete(id);
    console.log(result);
   }catch(err){
       console.log(err);
   }
}

deleteDocument(<some ID>);
