let baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

let dropdown = document.querySelectorAll(".curency select");
console.log(dropdown);

for(let select of dropdown){
    for(code in countryList){
        let option = document.createElement("option");
        option.innerText = code;
        option.value = code;
        // console.log(option)
        select.append(option);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
        if(select.name == "from"){
            currencyValue(evt.target);
        }
    })
}

const updateFlag = (event)=>{
    let countryCode = countryList[event.value];
    let src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = event.parentElement.querySelector("img");
    image.src = src;
}

const currencyValue = async (element)=>{
    let fdd = element.value;
    // fdd = fdd.toLowerCase;
    // console.log(fdd);
    //  typeof(fdd)
    let promise = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fdd}.json`);
    console.log(promise);
}
