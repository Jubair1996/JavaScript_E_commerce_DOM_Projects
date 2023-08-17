let total = 0;
function handleCLikBtn(target) {
  const addItemsContainer = document.getElementById("selected-items");
  const items = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = items;
  addItemsContainer.appendChild(li);

  const flowerPrice = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(flowerPrice);
  const setPrice = document.getElementById("total");
  setPrice.innerText = total;
}
