const getSumBtn = document.createElement("button");
const table = document.getElementById('table');
// console.log(table.)
getSumBtn.append("Get Total Price");
const price = document.querySelectorAll(".price")

// getSumBtn.append(table);
document.body.appendChild(getSumBtn);



// let priceArr

let tr = table.insertRow(-1);
let td1 = tr.insertCell(0);
let td2 = tr.insertCell(1);

td2.id = 'ans';
//  tr=`<td>to
// getSumBtn.append(priceArr);
const getSum = () => {
    //Add your code here
    // let totalSum=priceArr.reduce((p,c) => p+c)
    // tal</td><td>${sum}</td>`
    //  price = document.querySelectorAll(".price")
    let sum = 0
    price.forEach((ele) => sum += Number(ele.innerText))
    console.log(sum)
    td1.innerText = "Total"
    td2.innerText = sum
    //   tr.appendChild(td1);
    //   tr.appendChild(td2);
    //   table.append(tr);
};

getSumBtn.addEventListener("click", getSum);