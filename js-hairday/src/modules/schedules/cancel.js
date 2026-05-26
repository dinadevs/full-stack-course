const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", (event) => {

    if (event.target.classList.contains("cancel-icon")) {

      const item = event.target.closest("li")
      const { id } = item.dataset

      console.log(id)

      if (id) {

        const isConfirm = confirm(
          "Are you sure you want to cancel the appointment?"
        )

        if (isConfirm) {
          console.log("Appointment canceled!")
        }

      }
    }
  })
})