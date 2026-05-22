import dayjs from "dayjs";
import { openHours } from "../../utils/open-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  hours.innerHTML = "";

  const open = openHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    return {
      hour,
      available: isHourPast,
    };
  });

  open.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "09:00") {
      hourHeaderAdd("Morning");
    } else if (hour === "13:00") {
      hourHeaderAdd("Afternoon");
    } else if (hour === "18:00") {
      hourHeaderAdd("Night");
    }

    hours.append(li);
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
