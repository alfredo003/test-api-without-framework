import {createServer, request} from "node:http";


const handler= async(resquest,response)=>{

  if(resquest.url ==="/movies" && resquest.method === 'GET'){
    response.writeHeader(200,{"Content-Type":"application/json"})
    response.end(JSON.stringify({message:"Data found"}))  
  }

  if(resquest.url ==='/movies/1' && resquest.method === 'GET'){
    response.writeHeader(404,{"Content-Type":"application/json"})
    response.end(JSON.stringify({message:"Data not found"}))  
  }
      
}

const app = createServer(handler)
.listen(3000,()=>console.log('listining at 3000'))

export {app}