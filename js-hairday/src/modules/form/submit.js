import dayjs from "dayjs";
import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const inputToday = dayjs().format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Please provide the time.");
    }

    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Please provide the customer's name.");
    }

    const[hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    const id = new Date().getTime()

    await scheduleNew ({
      id,
      name,
      when,
    })

  } catch (error) {
    alert("It was not possible to schedule the appointment.");
    console.log(error);
  }
};
