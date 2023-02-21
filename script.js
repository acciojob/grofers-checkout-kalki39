const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const price=document.querySelectorAll(".price").innerText

const getSum = () => {
//Add your code here
  document.body.appendChild(price);
};

getSumBtn.addEventListener("click", getSum);

