document.querySelector("button").addEventListener("click", () => {
  document.querySelector("div").hidden = true
  document.querySelectorAll("div")[1].hidden = false
})

const data = []

document.querySelectorAll("input").forEach((input, i) => {
  input.addEventListener("change", (e) => {
    const reader = new FileReader()

    reader.onload = () => {
      data[i] = JSON.parse(reader.result)
      if (data.length == 2) work()
    }

    reader.readAsText(e.target.files[0])
  })
})

const work = () => {
  const followers = data[0].map(
    (follower) => follower.string_list_data[0].value
  )

  const following = data[1].relationships_following.map(
    (follower) => follower.string_list_data[0].value
  )

  document.querySelector("#anfyb").textContent = following.filter(
    (x) => !followers.includes(x)
  )
}
