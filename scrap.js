const request=require("request");
const cheerio=require("cheerio");
// const puppeteer=require("puppeteer");
// let page;
// const browseropen=puppeteer.launch({headless: false});
// browseropen
//     .then(function(browser) {
//         let pagepro=browser.pages();
//         return pagepro;
//     })
//     .then(function (browserpages) {
//         page=browserpages[0];
//         let goto=page.goto("https://www.google.com/")
//         return goto; 
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("input[type='text']",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         let search=page.type("input[type='text']",'wikipedia');
//         return search;
//     })
//     .then(function () {
//         let enterpressed=page.keyboard.press("Enter");
//         return enterpressed;
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         page.click("h3.LC20lb.MBeuO.DKV0Md");
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("div.central-featured-lang.lang1",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         page.click("div.central-featured-lang.lang1");
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("a[title='Wikipedia:Contents/Portals']",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         page.click("a[title='Wikipedia:Contents/Portals']");
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("a[title='Wikipedia:Contents/A–Z index']",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         page.click("a[title='Wikipedia:Contents/A–Z index']");
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("a[title='Special:AllPages/R']",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         page.click("a[title='Special:AllPages/R']");
//     })
//     .then(function(){
//         let waitforele=page.waitForSelector("a[title='R']",{visible:true});
//         return waitforele;
//     })
//     .then(function() {
//         let final=page.click("a[title='R']");
//         return final;
//     })
//     .then(function () {
//         Scrap();
//     })
//     .catch(function(err){
//         console.log(err)
//     })

url="https://en.wikipedia.org/wiki/R";
request(url,result);

function result(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        Scrap(html);
    }
}

function Scrap(html)
{
    let $=cheerio.load(html);
    let ps=$("h2~p");
    let namestr="";
    for(let i=0 ; i<4; i=i+1){
        namestr+=$(ps[i]).text()
    }
    //.log(namestr);
    let h3s=$("h3>.mw-headline");
    ps=$("h3~p");
    let historystr="";
    historystr+=$(h3s[0]).text();
    historystr+="\n";
    for(let i=0; i<2; i++)
    {
        historystr+=$(ps[i]).text();
    }
    historystr+="\n";
    historystr+=$(h3s[1]).text();
    historystr+="\n";
    for(let i=2; i<6; i++)
    {
        historystr+=$(ps[i]).text();
    }
    //console.log(historystr);
    let laststr="";
    for(let i=7; i<9; i++)
    {
        laststr+=$(ps[i]).text();
    }
    laststr+="\nOther Systems\n"+$(ps[9]).text();
    console.log(namestr,historystr,laststr);
}