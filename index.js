import data from "./dataSet.js";

let dataSet = data;

export function textToEmoji(text, extaData) {

    if(extaData){
        dataSet = {...dataSet, ...extaData};
    }

    text = text.toLowerCase();
    text+=" "
    let result = "";
    let tmp = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if(letter != " "){
            tmp += letter;
        } else{
            tmp = tmp.toLowerCase();
            if(dataSet[tmp]){
                result+=`${dataSet[tmp]}  `;
            } else{
                result+=`${tmp} `;
            }
            tmp="";
        }
    }

    return result;
        
}