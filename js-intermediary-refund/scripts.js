const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
//list
const expenseList = document.querySelector("ul");
const expenseTotal = document.querySelector("aside header h2");
const expenseQuantity = document.querySelector("aside header p span");

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100;

  amount.value = formatCurrencyUSA(value);
};

function formatCurrencyUSA(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };
  expenseAdd(newExpense);
};

category.addEventListener("change", () => {
  if (category.value === "new") {
    const newCategory = prompt("Enter new category name:");

    if (newCategory && newCategory.trim() !== "") {
      addNewCategory(newCategory);
    }

    category.value = "";
  }
});

function addNewCategory(name) {
  const value = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  const exists = [...category.options].some(opt => opt.value === value);

  if (exists) {
    alert("Category already exists!");
    category.value = value;
    return;
  }

  const option = document.createElement("option");
  option.value = value;
  option.textContent = name;

  const addNewOption = category.querySelector('option[value="new"]');
  category.insertBefore(option, addNewOption);

  category.value = value;
}

function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    expenseIcon.onerror = () => {
      expenseIcon.setAttribute("src", "./img/others.svg");
    };

    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    expenseInfo.append(expenseName, expenseCategory);

    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>$</small>${newExpense.amount
      .toUpperCase()
      .replace("$", "")}`;

    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remove");

    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);

    formClear();
    updateTotals();
  } catch (error) {
    alert("It was not possible to update the list of expenses.");
    console.log(error);
  }
}

function updateTotals() {
  try {
    const items = expenseList.children;

    expenseQuantity.textContent = `${items.length} ${
      items.length > 1 ? "expenses" : "expense"
    }`;

    let total = 0;

    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      let value = itemAmount.textContent;

      value = value.replace(/\D/g, "");
      value = Number(value) / 100;

      if (isNaN(value)) {
        return alert(
          "The total could not be calculated. Please check the values!",
        );
      }

      total += value;
    }

    const symbolUSA = document.createElement("small");
    symbolUSA.textContent = "$";

    total = formatCurrencyUSA(total).replace("$", "");

    expenseTotal.innerHTML = "";
    expenseTotal.append(symbolUSA, total);
  } catch (error) {
    console.log(error);
    alert("It was not possible to update the totals.");
  }
}

expenseList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-icon")) {
    const itemRemove = event.target.closest(".expense");
    itemRemove.remove();
  }
  updateTotals();
});

function formClear() {
  expense.value = "";
  category.value = "";
  amount.value = "";

  expense.focus();
}
