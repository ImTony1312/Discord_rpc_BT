var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "[details]",
assets : {
large_image : "[img1]",
large_text : "[txtimg1]",
small_image : "[img2]",
small_text : "[txtimg2]"
},
buttons : [{label: "[web1]", url: "[url1]"}, {label: "[web2]", url: "[url2]"}]
}
})
})
client.login({ clientId : "[CLIENTID]" }).catch(console.error);