/*
Crypto Project , Projeto de Cryptografia / JS PART
Version: Beta0.1
*/
const Rd_PtBr = (a) => {
    // console.log(a)
    let AK = []
    for (let z = 0; z != a.length; z++) {
        AK.push(a[z].charCodeAt(0))
        //console.log(AK)
    }
    return AK
}
const Rd_BinComplainment = (cuttedString) => {
    //console.log(cuttedString)
    let AKPNumber = 0 , yOpost = 0
    for (let y = cuttedString.length - 1; y >= 0; y--) {
        switch (cuttedString[yOpost]) {
            case '0': AKPNumber = AKPNumber
                break;
            case '1': AKPNumber = AKPNumber + (2 ** y)
                break;
        }
        yOpost = yOpost + 1
       // console.log(AKPNumber)
    }
    return AKPNumber
}
const Rd_Bin = (a) => {
    //base to read == "1000001_" formula for read === CuttedString.length - 1 <-- Model for Loop
    let AKP, AK = [], positionToStart = 0
    let ReferenceBase = 0
    for (let z = 1; z <= a.length; z++) {
        if (ReferenceBase == 15) {
            AKP = a.slice(positionToStart, z)
            AKP = Rd_BinComplainment(AKP)
            positionToStart = z
            AK.push(AKP)
            ReferenceBase = -1
        }
        ++ReferenceBase
    }
    return AK
}
const Rd_HexComplainment = (cuttedString) => {
    let AKPNumber = 0 , yOpost = 0
    for (let y = cuttedString.length - 1; y >= 0; y--) {
        switch (cuttedString[yOpost]) {
            case '0':AKPNumber = AKPNumber + (0 * 16 ** y)
                break;
            case '1':AKPNumber = AKPNumber + (1 * 16 ** y)
                break;
            case '2':AKPNumber = AKPNumber + (2 * 16 ** y)
                break;
            case '3':AKPNumber = AKPNumber + (3 * 16 ** y)
                break;
            case '4':AKPNumber = AKPNumber + (4 * 16 ** y)
                break;
            case '5':AKPNumber = AKPNumber + (5 * 16 ** y)
                break;
            case '6':AKPNumber = AKPNumber + (6 * 16 ** y)
                break;
            case '7':AKPNumber = AKPNumber + (7 * 16 ** y)
                break;
            case '8':AKPNumber = AKPNumber + (8 * 16 ** y)
                break;
            case '9':AKPNumber = AKPNumber + (9 * 16 ** y)
                break;
            case 'a':AKPNumber = AKPNumber + (10 * 16 ** y)
                break;
            case 'b':AKPNumber = AKPNumber + (11 * 16 ** y)
                break;
            case 'c':AKPNumber = AKPNumber + (12 * 16 ** y)
                break;
            case 'd':AKPNumber = AKPNumber + (13 * 16 ** y)
                break;
            case 'e':AKPNumber = AKPNumber + (14 * 16 ** y)
                break;
            case 'f':AKPNumber = AKPNumber + (15 * 16 ** y)
                break;
        }
        yOpost = yOpost + 1       
        }
  return AKPNumber
}
const Rd_Hex = (a) => {
//the base === "41_" 
//alpha = String
let AKP, AK = [], positionToStart = 0
let ReferenceBase = 0
for (let z = 1; z <= a.length; z++) {
    if (ReferenceBase == 4) {
        AKP = a.slice(positionToStart, z)
        AKP = Rd_HexComplainment(AKP)
        positionToStart = z
        AK.push(AKP)
        ReferenceBase = -1
    }
    ++ReferenceBase
}
return AK
}
const Rd_Tzar = (a,KeyCode) => {
let AKP = [] , AK = [] , positontoStart = 0 , newKCode = new String(KeyCode), charToPush = 0
for(let z = 1 ; z <= KeyCode.length ; z ++){
if(newKCode.slice(positontoStart, z).includes(",")){
    AKP.push(Number(newKCode.slice(positontoStart,z - 1)))
    //console.log(newKCode.slice(positontoStart, z-1))
    //console.log(AKP)
    positontoStart= z 
    AK.push ((a.charCodeAt(charToPush) - AKP[charToPush]))
    charToPush = charToPush + 1
}
}
return AK
}
const Rd_Vin = (a, KeyCode) => {
    //console.log(`Alpha: ${a} , KeyCode: ${KeyCode}`)
    //console.log(KeyCode)
    let AKP = [] , AK = []
for(let z = 0 ; z <= KeyCode.length -1 ; z ++){
    //console.log(KeyCode[z])
    AKP.push(Number(KeyCode[z].charCodeAt(0)))
    //console.log(KeyCode[z].charCodeAt(0))
    //console.log(a)
    //console.log(KeyCode)
    //console.log(AKP)
    //console.log(z)
    AK.push((a[z].charCodeAt(0) - AKP[z]) + 1)
    //console.log(AK)
}
return AK
}
const R_PtBr = (o) => {
    let PotencialString = ""
    for (let z = 0; z != o.length; z++) {
        PotencialString = PotencialString + String.fromCharCode(o[z])
    }
    return PotencialString
}
const R_Bin = (o) => {
    let PotencialString = ""
    for (let z = 0; z != o.length; z++) {
        PotencialString = PotencialString + (   "0000000000000000" + String(parseFloat(o[z]).toString(2))).slice(-16)
        console.log(parseFloat(o[z]).toString(2).length)
        console.log(`Potencial String : ${PotencialString}`)
    }
    return PotencialString
}
const R_Hex = (o) => {
    let PotencialString = ""
    for (let z = 0; z != o.length; z++) {
        PotencialString = PotencialString + (   "00000" + String(parseFloat(o[z]).toString(16))).slice(-5)
        console.log(parseFloat(o[z]).toString(16).length)
        console.log(`Potencial String : ${PotencialString}`)
    }
    return PotencialString
}
const R_TzarComplainment = () =>{//Randomizer
 let RandomALS
 RandomALS = Math.floor(Math.random() * 10)
 return RandomALS
}
const R_Tzar = (o,side) => {
let PotencialKey = [] , PotencialString = "", PotencialNewOmega =[], PotencialKeyString = ""
for(let z = 0 ; z <= o.length -1 ; z ++){
    PotencialKey.push(R_TzarComplainment())
    PotencialNewOmega.push(o[z] + PotencialKey[z])
    PotencialString = PotencialString + String.fromCharCode(PotencialNewOmega[z])
    PotencialKeyString = PotencialKeyString + PotencialKey[z] + ","
   // console.log(PotencialKeyString + "<--PotencialKeyString/PotencialKey-->" + PotencialKey)
   // console.log(PotencialNewOmega + "<--PotencialNewOmega/PotencialString-->" + PotencialString)
}
if(side == 'L' ){
    let PotencialKeyOmega = document.getElementById("KeySpaceLeft") as HTMLInputElement
    PotencialKeyOmega.value = PotencialKeyString
    }else{
    let PotencialKeyOmega = document.getElementById("KeySpaceRight") as HTMLInputElement
    PotencialKeyOmega.value = PotencialKeyString
    }
return PotencialString
}
const R_VinComplainment = () => {
    let RandomALS
    RandomALS = Math.floor(Math.random() * (122 - 65)) + 65;
    return RandomALS
}
const R_Vin = (o,side) => {
    // EncriptCode[y] = Number(code[y]) + KeyNums[y] - 1
    let PotencialKey = [] , PotencialString = "", PotencialNewOmega =[], PotencialKeyString = ""
for(let z = 0 ; z <= o.length -1 ; z ++){
    PotencialKey.push(R_VinComplainment())
    PotencialNewOmega.push((o[z] + PotencialKey[z]) - 1)
    PotencialString = PotencialString + String.fromCharCode(PotencialNewOmega[z])
    PotencialKeyString = PotencialKeyString + (String.fromCharCode(PotencialKey[z]))
}
if(side == 'L'){
let PotencialKeyOmega = document.getElementById("KeySpaceLeft") as HTMLInputElement
PotencialKeyOmega.value = PotencialKeyString
}else{
let PotencialKeyOmega = document.getElementById("KeySpaceRight") as HTMLInputElement
PotencialKeyOmega.value = PotencialKeyString
}
return PotencialString
}
const controlLeft = () => {
    let newTextGetta = document.getElementById("TextInputLeft") as HTMLTextAreaElement
    let textGetta = new String(newTextGetta.value)
    //console.log(textGetta)
    const keyGive = document.getElementById("SelectLeft") as HTMLInputElement
    const keyWanna = document.getElementById("SelectRight") as HTMLInputElement
    //console.log("Key give ==" + String(keyGive) + '; Key Wanna =' + String(keyWanna))
    let codeKeyLeft
    if(keyGive.value == 'Tzar' || keyGive.value == 'Vin'){
         codeKeyLeft = document.getElementById("KeySpaceLeft") as HTMLInputElement
    }
    let transformKey
    switch (keyGive.value) {
        case "UTF-8": transformKey = Rd_PtBr(textGetta)
            break;
        case "Bin": transformKey = Rd_Bin(textGetta)
            break;
        case "Hex": transformKey = Rd_Hex(textGetta)
            break;
        case "Tzar": transformKey = Rd_Tzar(textGetta,codeKeyLeft.value)
            break;
        case "Vin": transformKey = Rd_Vin(textGetta,codeKeyLeft.value)
            break;
    }
    console.log(textGetta)
    console.log(transformKey)
    let keyAbstract
    switch (keyWanna.value) {
        case "UTF-8": keyAbstract = R_PtBr(transformKey)
            break;
        case "Bin": keyAbstract = R_Bin(transformKey)
            break;
        case "Hex": keyAbstract = R_Hex(transformKey)
            break;
        case "Tzar": keyAbstract = R_Tzar(transformKey,'R')
            break;
        case "Vin": keyAbstract = R_Vin(transformKey,'R')
            break;
    }
    console.log(keyAbstract)
    return keyAbstract
}
const controlRight = () => {
    let newTextGetta = document.getElementById("TextInputRight") as HTMLTextAreaElement
    let textGetta = new String(newTextGetta.value)
    //console.log(textGetta)
    const keyGive = document.getElementById("SelectRight") as HTMLInputElement
    const keyWanna = document.getElementById("SelectLeft") as HTMLInputElement
    //console.log("Key give ==" + String(keyGive) + '; Key Wanna =' + String(keyWanna))
     let codeKeyRight
     if(keyGive.value == 'Tzar' || keyGive.value == 'Vin'){
         codeKeyRight = document.getElementById("KeySpaceRight") as HTMLInputElement
     }
    let transformKey
    switch (keyGive.value) {
        case "UTF-8": transformKey = Rd_PtBr(textGetta)
            break;
        case "Bin": transformKey = Rd_Bin(textGetta)
            break;
        case "Hex": transformKey = Rd_Hex(textGetta)
            break;
        case "Tzar": transformKey = Rd_Tzar(textGetta,codeKeyRight.value)
            break;
        case "Vin": transformKey = Rd_Vin(textGetta,codeKeyRight.value)
            break;
    }
    console.log(textGetta)
    console.log(transformKey)
    let keyAbstract
    switch (keyWanna.value) {
        case "UTF-8": keyAbstract = R_PtBr(transformKey)
            break;
        case "Bin": keyAbstract = R_Bin(transformKey)
            break;
        case "Hex": keyAbstract = R_Hex(transformKey)
            break;
        case "Tzar": keyAbstract = R_Tzar(transformKey,'L')
            break;
        case "Vin": keyAbstract = R_Vin(transformKey,'L')
            break;
    }
    console.log(keyAbstract)
    return keyAbstract
}
const keySpaceGeneratorLeft = (SpaceReq) =>{
    const space = document.getElementById("KeyPositionLeft") 
    if(SpaceReq == "Tzar" || SpaceReq == "Vin"){
        space.innerHTML = `<input type="text" id="KeySpaceLeft" class="ConfigsStylePack" placeholder="Key Space">`
    }else{
        space.innerHTML = ``
    }
}
const keySpaceGeneratorRight = (SpaceReq) =>{
    const space = document.getElementById("KeyPositionRight") 
    if(SpaceReq == "Tzar" || SpaceReq == "Vin"){
        space.innerHTML = `<input type="text" id="KeySpaceRight" class="ConfigsStylePack" placeholder="Key Space">`
    }else{
        space.innerHTML = ``
    }
}
const KeyLeftSense = document.getElementById("SelectLeft").addEventListener("change", function KeyLeftSense (e) {
    //console.log(e.target.value)
    const KeyElement = document.getElementById("SelectLeft") as HTMLSelectElement
    keySpaceGeneratorLeft(KeyElement.value )
})
const KeyRightSense = document.getElementById("SelectRight").addEventListener("change", function KeyRightSense (e) {
    //console.log(e.target.value)
    const KeyElement = document.getElementById("SelectRight") as HTMLSelectElement
    keySpaceGeneratorRight(KeyElement.value)
})
const Interact = (convertWay) => {
    console.log("Hey Code ? , are u On and On ?")
  let LRes 
  let RRes 
  const InnerCodeLeft = document.getElementById("TextInputLeft") as HTMLTextAreaElement
  const InnerCodeRight = document.getElementById("TextInputRight") as HTMLTextAreaElement
  if(convertWay == "L"){
       LRes = controlLeft()
       //console.log(LRes)
       InnerCodeRight.value = LRes
  } else{
       RRes = controlRight()
       //console.log(RRes)
       InnerCodeLeft.value = RRes
  }
}
const AntiVinTzarBugLeft = document.getElementById("SelectLeft") as HTMLSelectElement
const NewAntiVinTsarBugLeft = AntiVinTzarBugLeft.value 
const AntiVinTzarBugRight = document.getElementById("SelectRight") as HTMLSelectElement
const NewAntiVinTsarBugRight = AntiVinTzarBugRight.value
keySpaceGeneratorLeft(NewAntiVinTsarBugLeft)
keySpaceGeneratorRight(NewAntiVinTsarBugRight)