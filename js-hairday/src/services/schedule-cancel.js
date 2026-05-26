import { apiConfig } from "./api-config";

export async function scheduleCancel({id}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })
    alert("Appointment successfully cancelled.")
    
  } catch (error) {
    console.log(error)
    alert("It was not possible to cancel the appointment.")
  }
}