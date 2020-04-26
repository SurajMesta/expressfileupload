let storage;
const assert= require('assert')


module.exports={
    home:(req,res)=>{
        res.render('index')
    },

    upload:(req,res)=>{
        if(req.files){

            let data= req.files.myUpload
            console.log(data)
           

           for(var i=0;i< data.length;i++){
            storage="./uploads/"+ data[i].name
               data[i].mv(storage,function(err){
                   if(err){
                    assert.equal(null,err)
                   }
                   else{
                       console.log("File Upload was successful")
                   }
               })
           }

        }


        setTimeout(function(){
            res.redirect('/')
        },5000)
    }
}