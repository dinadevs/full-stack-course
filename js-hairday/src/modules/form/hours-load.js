import dayjs from "dayjs"
import { openHours } from "../../utils/open-hours.js"

export function hoursLoad({date}) {
  const open = openHours.map((hour) => {

    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    return({
      hour,
      available: isHourPast,
    })

  })
  console.log(open)
}