const inputTotal = document.querySelector("#total")
const inputRate =document.querySelector("#rate")
const btnCalculate = document.getElementById("sumation")
const calculationHold = document.getElementById("calcuation")
const tipHold =document.getElementById("tip")
const taxhold = document.getElementById("tax")

  
//gerneral call to functions and returning
btnCalculate.onclick = async function(){
    console.log('INFO: Declaring functions');
    const totalstr =inputTotal.value;
    const ratestr =inputRate.value;
    const totalNum =parseInt(totalstr);
    const rateNum =parseInt(ratestr);
    //tip
    const tipNum = await tip(totalNum, rateNum);
    tipHold.innerHTML = "Tip: $"+tipNum;
    //tax
    const taxNum = await tax( totalNum);
    taxhold.innerHTML = "Tax: $"+taxNum;
    // sum
    const grand = await sum(totalNum, tipNum, taxNum);
    calculationHold.innerHTML = "Grand total: $"+grand;
}
//found .fixed() at https://www.w3schools.com/jsref/jsref_tofixed.asp
//tip calc
const tip = async function ( totalNum, rateNum){
  percent =rateNum/100;
  const giventip = totalNum *percent;
  return giventip.toFixed(2);

}

// tax calc
const tax =async function (totalNum){
    const totaltax =(totalNum * 0.055);
    return totaltax.toFixed(2);
}
//sum calc
const sum = async function (totalNum, tipNum, taxNum){
  // somehow they are stings
    totalSum1 = parseFloat(totalNum);
    totalSum2 = parseFloat(tipNum)
    totalSum3 = parseFloat(taxNum)
    totalSum = totalSum1 + totalSum2 + totalSum3;
    return totalSum.toFixed(2);
}