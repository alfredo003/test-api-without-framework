import {describe,before,after,it} from "node:test";
import {deepStrictEqual} from "node:assert";

describe('API WORKFLOW',()=>{
  let _server = {};
  before(async()=>{
    _server = (await import('./api.js')).app
    //await new Promise(resolve => _server.once('listining',resolve))
  })
  after(done => _server.close(done))

  it("Found all movies",async()=>{
    const resquest = await fetch("http://localhost:3000/movies")

    deepStrictEqual(resquest.status,200)
  })

  it("found one movies",async()=>{
    const resquest = await fetch("http://localhost:3000/movies/1")
    deepStrictEqual(resquest.status,404)
  })
})