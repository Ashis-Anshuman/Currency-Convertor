let dropdown = document.querySelectorAll(".curency select");
let btn = document.querySelector("button");
let from = document.querySelector(".from select");
let to = document.querySelector(".to select");
let msg = document.querySelector(".msg p");

for(let select of dropdown){
    for(code in countryList){
        let option = document.createElement("option");
        option.innerText = code;
        option.value = code;
        // console.log(option)
        if(select.name == "from" && code == "USD"){
            option.selected = "selected";
        }else if (select.name == "to" && code == "INR"){
            option.selected = "selected";
        }
        select.append(option);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (event)=>{
    let countryCode = countryList[event.value];
    console.log(countryCode);
    let src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = event.parentElement.querySelector("img");
    image.src = src;
}


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".input")
    let amountVal = amount.value;
    if(amountVal == " " || amountVal < 1){
        amountVal = 1;
        amount.value = "1"
    }
    let fromVal = from.value.toLowerCase();
    let toVal = to.value.toLowerCase();
    console.log(toVal);
    let baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromVal}.json`;
    let response = await fetch(baseUrl);
    let data = await response.json();
    let rate = data[fromVal];
    
    let changeAmount = amountVal *rate[toVal]
    msg.innerText = `${amountVal} ${from.value} is ${changeAmount} ${to.value}`;
})