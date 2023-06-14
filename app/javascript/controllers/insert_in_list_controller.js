import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["form", "items"]
  connect() {
    // console.log(this.element)
    // console.log(this.formTarget)
    // console.log(this.itemsTarget)
  }

  send(event) {
    event.preventDefault()
    // console.log(this.formTarget.action)
    // const formData = new FormData(this.formTarget)
    // console.log(formData)

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
        this.formTarget.outerHTML = data.form
      })
      }
  }
  
