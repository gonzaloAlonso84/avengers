const redis = require('redis')
const client = redis.createClient()

client.on('error', (error)=>{ console.log(error) })

client.set('variableentorno', Date.now(), redis.print)
// client.get('variableentorno', redis.print)
client.expire('variableentorno', 15)

client.quit(()=>{})
