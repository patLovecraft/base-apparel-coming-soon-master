const button = document.getElementById("button")
const input = document.getElementById("input")
const form = document.getElementById("form")
const error = document.getElementById("error")
const errorIcon = document.getElementById("error-icon")

form.addEventListener("submit", (e) => {
  let errorMessages = []
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (input.value === "" || input.value == null) {
    errorMessages.push("Email required")
    input.classList.add("border-red-500")
    errorIcon.classList.remove("hidden")
  }
  if (input.value.match(pattern)) {
    errorIcon.classList.add("hidden")
    input.classList.remove("border-red-500")
  } else {
    errorMessages.push("Please provide a valid email")
    error.classList.remove("text-green-500")
    error.classList.add("text-red-400")
  }
  if (errorMessages.length > 0) {
    e.preventDefault()
    error.innerHTML = errorMessages.join(", ")
  }
})
