//librerie
const puppeteer = require('puppeteer')
const Discord = require('discord.js')
const { GatewayIntentBits } = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
})

client.login(process.env.API_KEY)


//scraping
async function run(){
    let url1 = 'https://www.refurbed.it/p/iphone-xs/2263b/'
    let url2 = 'https://www.certideal.it/iphone-xs-ricondizionato/iphone-xs-64-gb-grigio-siderale-4921'
    var canale = client.channels.cache.get("1042541542365220916")
    const browser = await puppeteer.launch()
    const page1 = await browser.newPage()
    await page1.goto(url1)
    const [el] = await page1.$x('//*[@id="wrapper"]/div[2]/section[1]/div/div/div/div[2]/div/div[1]/div/div[2]/div/div[1]/div[1]/p[1]')
    const testo = await el.getProperty('textContent')
    const xsRefurbed = await testo.jsonValue()
    console.log({xsRefurbed})


    const page2 = await browser.newPage()
    await page2.goto(url2)
    const [el2] = await await page2.$x('//*[@id="product-details-content-body"]/div[1]/div/div/div/div[2]/div[2]/span[1]')
    const testo2 = await el2.getProperty('textContent')
    const xsCertideal = await testo2.jsonValue()
    console.log({xsCertideal})

    await browser.close()

    canale.send("L'iphone xs su refurbed è a: " + xsRefurbed + url1)
    canale.send("L'iphone xs su certideal è a: " + xsCertideal + url2)
}


function oraAttuale(){

    var hour = new Date().getHours()
    var minutes = new Date().getMinutes()

    if (hour == 00 && minutes == 00){
        run()
    }
    if (hour == 01 && minutes == 00){
        run()
    }
    if (hour == 02 && minutes == 00){
        run()
    }
    if (hour == 03 && minutes == 00){
        run()
    }
    if (hour == 04 && minutes == 00){
        run()
    }
    if (hour == 05 && minutes == 00){
        run()
    }
    if (hour == 06 && minutes == 00){
        run()
    }
    if (hour == 07 && minutes == 00){
        run()
    }
    if (hour == 08 && minutes == 00){
        run()
    }
    if (hour == 09 && minutes == 00){
        run()
    }
    if (hour == 10 && minutes == 00){
        run()
    }
    if (hour == 11 && minutes == 00){
        run()
    }
    if (hour == 12 && minutes == 00){
        run()
    }
    if (hour == 13 && minutes == 00){
        run()
    }
    if (hour == 14 && minutes == 00){
        run()
    }
    if (hour == 15 && minutes == 00){
        run()
    }
    if (hour == 16 && minutes == 00){
        run()
    }
    if (hour == 17 && minutes == 00){
        run()
    }
    if (hour == 18 && minutes == 00){
        run()
    }
    if (hour == 19 && minutes == 00){
        run()
    }
    if (hour == 20 && minutes == 00){
        run()
    }
    if (hour == 21 && minutes == 00){
        run()
    }
    if (hour == 22 && minutes == 00){
        run()
    }
    if (hour == 23 && minutes == 00){
        run()
    }

}

setInterval(oraAttuale, 1000*60)

