// SETING SESUAIN AJA YANG UDAH DI KASIH KOMEN
const fs = require('fs')
const chalk = require('chalk')
const axios = require("axios");

global.owner = ['6288298793719'] // ganti nomor lu
global.packname = 'Zann Suntik' // ganti bebas
global.author = 'Smm Panel Zan' // ganti bebas



// 👇  Daftar di https://panel.lapaksosmed.com dan ambil api_id ama apikeynya ganti jangan hapus tanda " "
global.api_id = "api-id" // ganti api id yang ada web di atas daftar dulu
global.api_key = "api_key" // api key




// 👇 Daftar di https://famsosmed.com ambil apikey nya aja
global.keyUrl = "https://famsosmed.com/api/v1" // gausah diganti
global.keyApi = 'key_api' // ganti apikey


require("./sunTik")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
//BOT WHATSAPP BY ZANNMODS DENGAN FEATUR TERBARU YAITU SUNTIK FOLLOWERS//
//SUBSCRIBE YOUTUBE ZANNMODS UNTUK INFO LEBIH LANJUT//