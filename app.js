const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const inputElement = document.querySelector("input");

function setPriceMonthly() {
  basic.innerHTML = "$19.99";
  professional.innerHTML = "$24.99";
  master.innerHTML = "$39.99";
  console.log("monthly");
}

function setPriceYearly() {
  basic.innerHTML = "$199.99";
  professional.innerHTML = "$249.99";
  master.innerHTML = "$399.99";
  console.log("yearly");
}

function toggle() {
  if (inputElement.checked == true) {
    setPriceYearly();
  } else if (inputElement.checked == false) {
    setPriceMonthly();
  }
}

inputElement.onclick = () => {
  toggle();
};
