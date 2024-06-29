const hamburer = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open")
  })
}

if (user__location === "index") {
  let url = window.location.href
  if (!url.endsWith(".html")) {
    if (url.endsWith("/")) {
      url += "index.html"
      window.location.href = url
    } else {
      url += "/index.html"
      window.location.href = url
    }
  }

  const card__product_pos = document.querySelector("#card__product_pos")

  const card__product_pattern = document.querySelector("#card__product_pattern")

  const section = card__product_pattern.content.querySelector("#section")
  const img = card__product_pattern.content.querySelector("img")
  const span__discount = card__product_pattern.content.querySelector("#discount")
  const span__catalog = card__product_pattern.content.querySelector("#catalog")
  const name = card__product_pattern.content.querySelector("#name")
  const price = card__product_pattern.content.querySelector("#h4")

  let copyCard__product_pattern = card__product_pattern.content.cloneNode(true)

  for (let index = 0; index < 4; index++) {
    const i = database[index]
    section.setAttribute("onclick", `openProductDetails(${i.id})`)
    img.src = i.img
    if (i.discount[0]) {
      span__discount.setAttribute("class", "discount")
      span__discount.textContent = `${i.discount[1]}%`
    }
    span__catalog.textContent = i.catalog
    name.setAttribute("onclick", `openProductDetails(${i.id})`)
    name.textContent = i.name
    price.textContent = `${i.price}₽`

    copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
    card__product_pos.append(copyCard__product_pattern)
  }
} else if (user__location === "product") {
  const card__product_pos = document.querySelector("#card__product_pos")

  const card__product_pattern = document.querySelector("#card__product_pattern")

  const section = card__product_pattern.content.querySelector("#section")
  const img = card__product_pattern.content.querySelector("img")
  const span__discount = card__product_pattern.content.querySelector("#discount")
  const span__catalog = card__product_pattern.content.querySelector("#catalog")
  const name = card__product_pattern.content.querySelector("#name")
  const price = card__product_pattern.content.querySelector("#h4")

  let copyCard__product_pattern = card__product_pattern.content.cloneNode(true)

  for (let index = 0; index < 8; index++) {
    const i = database[index]
    section.setAttribute("onclick", `openProductDetails(${i.id})`)
    img.src = i.img
    if (i.discount[0]) {
      span__discount.setAttribute("class", "discount")
      span__discount.textContent = `${i.discount[1]}%`
    }
    span__catalog.textContent = i.catalog
    name.setAttribute("onclick", `openProductDetails(${i.id})`)
    name.textContent = i.name
    price.textContent = `${i.price}₽`

    copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
    card__product_pos.append(copyCard__product_pattern)
  }
  const span1 = document.querySelector("#span1")
  const span2 = document.querySelector("#span2")
  const span3 = document.querySelector("#span3")
  const span4 = document.querySelector("#span4")

  const spanMove = document.querySelector("#spanMove")
  const spanMoveRemove = document.querySelector("#spanMoveRemove")

  function round_it_up(number) {
    return Math.ceil(number)
  }

  const maxClik = round_it_up(database.length / 8) - 1
  const minClik = 0
  let numClik = 0

  let posCart1 = 1
  let posCart2 = 2
  let posCart3 = 3
  let posCart4 = 4

  span1.textContent = `${posCart1}`
  span2.textContent = `${posCart2}`
  span3.textContent = `${posCart3}`
  span4.textContent = `${posCart4}`

  let j = 8
  let maxJ = 8
  let maxFull = round_it_up(database.length / 8)

  spanMove.onclick = () => {
    if (numClik < maxClik) {
      card__product_pos.textContent = ""

      span1.textContent = `${posCart1 + 1}`
      span2.textContent = `${posCart2 + 1}`
      span3.textContent = `${posCart3 + 1}`
      span4.textContent = `${posCart4 + 1}`
      posCart1++
      posCart2++
      posCart3++
      posCart4++
      numClik++

      maxJ += 8

      if (maxJ / 8 === maxFull) {
        maxJ = database.length
        for (j; j < database.length; j++) {
          const i = database[j]
          section.setAttribute("onclick", `openProductDetails(${i.id})`)
          img.src = i.img
          if (i.discount[0]) {
            span__discount.setAttribute("class", "discount")
            span__discount.textContent = `${i.discount[1]}%`
          }
          span__catalog.textContent = i.catalog
          name.setAttribute("onclick", `openProductDetails(${i.id})`)
          name.textContent = i.name
          price.textContent = `${i.price}₽`

          copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
          card__product_pos.append(copyCard__product_pattern)
        }
      } else {
        for (j; j < database.length - (database.length - maxJ); j++) {
          const i = database[j]
          section.setAttribute("onclick", `openProductDetails(${i.id})`)
          img.src = i.img
          if (i.discount[0]) {
            span__discount.setAttribute("class", "discount")
            span__discount.textContent = `${i.discount[1]}%`
          }
          span__catalog.textContent = i.catalog
          name.setAttribute("onclick", `openProductDetails(${i.id})`)
          name.textContent = i.name
          price.textContent = `${i.price}₽`

          copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
          card__product_pos.append(copyCard__product_pattern)
        }
      }
    }
  }

  spanMoveRemove.onclick = () => {
    if (numClik > minClik) {
      card__product_pos.textContent = ""

      span1.textContent = `${posCart1 - 1}`
      span2.textContent = `${posCart2 - 1}`
      span3.textContent = `${posCart3 - 1}`
      span4.textContent = `${posCart4 - 1}`
      posCart1--
      posCart2--
      posCart3--
      posCart4--
      numClik--

      if (maxJ === database.length) {
        j = (maxFull - 1) * 8 - 8
        maxJ = database.length - (database.length - (maxFull - 1) * 8)
        for (j; j < (maxFull - 1) * 8; j++) {
          const i = database[j]
          section.setAttribute("onclick", `openProductDetails(${i.id})`)
          img.src = i.img
          if (i.discount[0]) {
            span__discount.setAttribute("class", "discount")
            span__discount.textContent = `${i.discount[1]}%`
          }
          span__catalog.textContent = i.catalog
          name.setAttribute("onclick", `openProductDetails(${i.id})`)
          name.textContent = i.name
          price.textContent = `${i.price}₽`

          copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
          card__product_pos.append(copyCard__product_pattern)
        }
      } else {
        maxJ -= 8
        j -= 16
        for (j; j < database.length - (database.length - maxJ); j++) {
          const i = database[j]
          section.setAttribute("onclick", `openProductDetails(${i.id})`)
          img.src = i.img
          if (i.discount[0]) {
            span__discount.setAttribute("class", "discount")
            span__discount.textContent = `${i.discount[1]}%`
          }
          span__catalog.textContent = i.catalog
          name.setAttribute("onclick", `openProductDetails(${i.id})`)
          name.textContent = i.name
          price.textContent = `${i.price}₽`

          copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
          card__product_pos.append(copyCard__product_pattern)
        }
      }
    }
  }

  const selectElement = document.getElementById("sortSelect")
  const iconElement = document.getElementById("sortIcon")

  selectElement.addEventListener("change", function () {
    if (selectElement.value === "1") {
      iconElement.innerHTML = '<i class="bx bx-chevron-down"></i>'

      const card__product_pos = document.querySelector("#card__product_pos")

      const card__product_pattern = document.querySelector("#card__product_pattern")

      const section = card__product_pattern.content.querySelector("#section")
      const img = card__product_pattern.content.querySelector("img")
      const span__discount = card__product_pattern.content.querySelector("#discount")
      const span__catalog = card__product_pattern.content.querySelector("#catalog")
      const name = card__product_pattern.content.querySelector("#name")
      const price = card__product_pattern.content.querySelector("#h4")

      let copyCard__product_pattern = card__product_pattern.content.cloneNode(true)

      card__product_pos.textContent = ""

      for (let index = 0; index < 8; index++) {
        const i = database[index]
        section.setAttribute("onclick", `openProductDetails(${i.id})`)
        img.src = i.img
        if (i.discount[0]) {
          span__discount.setAttribute("class", "discount")
          span__discount.textContent = `${i.discount[1]}%`
        }
        span__catalog.textContent = i.catalog
        name.setAttribute("onclick", `openProductDetails(${i.id})`)
        name.textContent = i.name
        price.textContent = `${i.price}₽`

        copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
        card__product_pos.append(copyCard__product_pattern)
      }
      const span1 = document.querySelector("#span1")
      const span2 = document.querySelector("#span2")
      const span3 = document.querySelector("#span3")
      const span4 = document.querySelector("#span4")

      const spanMove = document.querySelector("#spanMove")
      const spanMoveRemove = document.querySelector("#spanMoveRemove")

      function round_it_up(number) {
        return Math.ceil(number)
      }

      const maxClik = round_it_up(database.length / 8) - 1
      const minClik = 0
      let numClik = 0

      let posCart1 = 1
      let posCart2 = 2
      let posCart3 = 3
      let posCart4 = 4

      span1.textContent = `${posCart1}`
      span2.textContent = `${posCart2}`
      span3.textContent = `${posCart3}`
      span4.textContent = `${posCart4}`

      let j = 8
      let maxJ = 8
      let maxFull = round_it_up(database.length / 8)

      spanMove.onclick = () => {
        if (numClik < maxClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 + 1}`
          span2.textContent = `${posCart2 + 1}`
          span3.textContent = `${posCart3 + 1}`
          span4.textContent = `${posCart4 + 1}`
          posCart1++
          posCart2++
          posCart3++
          posCart4++
          numClik++

          maxJ += 8

          if (maxJ / 8 === maxFull) {
            maxJ = database.length
            for (j; j < database.length; j++) {
              const i = database[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            for (j; j < database.length - (database.length - maxJ); j++) {
              const i = database[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }

      spanMoveRemove.onclick = () => {
        if (numClik > minClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 - 1}`
          span2.textContent = `${posCart2 - 1}`
          span3.textContent = `${posCart3 - 1}`
          span4.textContent = `${posCart4 - 1}`
          posCart1--
          posCart2--
          posCart3--
          posCart4--
          numClik--

          if (maxJ === database.length) {
            j = (maxFull - 1) * 8 - 8
            maxJ = database.length - (database.length - (maxFull - 1) * 8)
            for (j; j < (maxFull - 1) * 8; j++) {
              const i = database[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            maxJ -= 8
            j -= 16
            for (j; j < database.length - (database.length - maxJ); j++) {
              const i = database[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }
    } else if (selectElement.value === "2") {
      iconElement.innerHTML = '<i class="bx bx-chevron-down"></i>'

      const sortedDatabase = sortDatabaseByPrice(database)

      const card__product_pos = document.querySelector("#card__product_pos")

      const card__product_pattern = document.querySelector("#card__product_pattern")

      const section = card__product_pattern.content.querySelector("#section")
      const img = card__product_pattern.content.querySelector("img")
      const span__discount = card__product_pattern.content.querySelector("#discount")
      const span__catalog = card__product_pattern.content.querySelector("#catalog")
      const name = card__product_pattern.content.querySelector("#name")
      const price = card__product_pattern.content.querySelector("#h4")

      let copyCard__product_pattern = card__product_pattern.content.cloneNode(true)

      card__product_pos.textContent = ""

      for (let index = 0; index < 8; index++) {
        const i = sortedDatabase[index]
        section.setAttribute("onclick", `openProductDetails(${i.id})`)
        img.src = i.img
        if (i.discount[0]) {
          span__discount.setAttribute("class", "discount")
          span__discount.textContent = `${i.discount[1]}%`
        }
        span__catalog.textContent = i.catalog
        name.setAttribute("onclick", `openProductDetails(${i.id})`)
        name.textContent = i.name
        price.textContent = `${i.price}₽`

        copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
        card__product_pos.append(copyCard__product_pattern)
      }
      const span1 = document.querySelector("#span1")
      const span2 = document.querySelector("#span2")
      const span3 = document.querySelector("#span3")
      const span4 = document.querySelector("#span4")

      const spanMove = document.querySelector("#spanMove")
      const spanMoveRemove = document.querySelector("#spanMoveRemove")

      function round_it_up(number) {
        return Math.ceil(number)
      }

      const maxClik = round_it_up(sortedDatabase.length / 8) - 1
      const minClik = 0
      let numClik = 0

      let posCart1 = 1
      let posCart2 = 2
      let posCart3 = 3
      let posCart4 = 4

      span1.textContent = `${posCart1}`
      span2.textContent = `${posCart2}`
      span3.textContent = `${posCart3}`
      span4.textContent = `${posCart4}`

      let j = 8
      let maxJ = 8
      let maxFull = round_it_up(sortedDatabase.length / 8)

      spanMove.onclick = () => {
        if (numClik < maxClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 + 1}`
          span2.textContent = `${posCart2 + 1}`
          span3.textContent = `${posCart3 + 1}`
          span4.textContent = `${posCart4 + 1}`
          posCart1++
          posCart2++
          posCart3++
          posCart4++
          numClik++

          maxJ += 8

          if (maxJ / 8 === maxFull) {
            maxJ = sortedDatabase.length
            for (j; j < sortedDatabase.length; j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            for (j; j < sortedDatabase.length - (sortedDatabase.length - maxJ); j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }

      spanMoveRemove.onclick = () => {
        if (numClik > minClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 - 1}`
          span2.textContent = `${posCart2 - 1}`
          span3.textContent = `${posCart3 - 1}`
          span4.textContent = `${posCart4 - 1}`
          posCart1--
          posCart2--
          posCart3--
          posCart4--
          numClik--

          if (maxJ === sortedDatabase.length) {
            j = (maxFull - 1) * 8 - 8
            maxJ = sortedDatabase.length - (sortedDatabase.length - (maxFull - 1) * 8)
            for (j; j < (maxFull - 1) * 8; j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            maxJ -= 8
            j -= 16
            for (j; j < sortedDatabase.length - (sortedDatabase.length - maxJ); j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }
    } else if (selectElement.value === "3") {
      iconElement.innerHTML = '<i class="bx bx-chevron-down"></i>'
      const sortedDatabase = sortDatabaseByPriceDescending(database)

      const card__product_pos = document.querySelector("#card__product_pos")

      const card__product_pattern = document.querySelector("#card__product_pattern")

      const section = card__product_pattern.content.querySelector("#section")
      const img = card__product_pattern.content.querySelector("img")
      const span__discount = card__product_pattern.content.querySelector("#discount")
      const span__catalog = card__product_pattern.content.querySelector("#catalog")
      const name = card__product_pattern.content.querySelector("#name")
      const price = card__product_pattern.content.querySelector("#h4")

      let copyCard__product_pattern = card__product_pattern.content.cloneNode(true)

      card__product_pos.textContent = ""

      for (let index = 0; index < 8; index++) {
        const i = sortedDatabase[index]
        section.setAttribute("onclick", `openProductDetails(${i.id})`)
        img.src = i.img
        if (i.discount[0]) {
          span__discount.setAttribute("class", "discount")
          span__discount.textContent = `${i.discount[1]}%`
        }
        span__catalog.textContent = i.catalog
        name.setAttribute("onclick", `openProductDetails(${i.id})`)
        name.textContent = i.name
        price.textContent = `${i.price}₽`

        copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
        card__product_pos.append(copyCard__product_pattern)
      }
      const span1 = document.querySelector("#span1")
      const span2 = document.querySelector("#span2")
      const span3 = document.querySelector("#span3")
      const span4 = document.querySelector("#span4")

      const spanMove = document.querySelector("#spanMove")
      const spanMoveRemove = document.querySelector("#spanMoveRemove")

      function round_it_up(number) {
        return Math.ceil(number)
      }

      const maxClik = round_it_up(sortedDatabase.length / 8) - 1
      const minClik = 0
      let numClik = 0

      let posCart1 = 1
      let posCart2 = 2
      let posCart3 = 3
      let posCart4 = 4

      span1.textContent = `${posCart1}`
      span2.textContent = `${posCart2}`
      span3.textContent = `${posCart3}`
      span4.textContent = `${posCart4}`

      let j = 8
      let maxJ = 8
      let maxFull = round_it_up(sortedDatabase.length / 8)

      spanMove.onclick = () => {
        if (numClik < maxClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 + 1}`
          span2.textContent = `${posCart2 + 1}`
          span3.textContent = `${posCart3 + 1}`
          span4.textContent = `${posCart4 + 1}`
          posCart1++
          posCart2++
          posCart3++
          posCart4++
          numClik++

          maxJ += 8

          if (maxJ / 8 === maxFull) {
            maxJ = sortedDatabase.length
            for (j; j < sortedDatabase.length; j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            for (j; j < sortedDatabase.length - (sortedDatabase.length - maxJ); j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }

      spanMoveRemove.onclick = () => {
        if (numClik > minClik) {
          card__product_pos.textContent = ""

          span1.textContent = `${posCart1 - 1}`
          span2.textContent = `${posCart2 - 1}`
          span3.textContent = `${posCart3 - 1}`
          span4.textContent = `${posCart4 - 1}`
          posCart1--
          posCart2--
          posCart3--
          posCart4--
          numClik--

          if (maxJ === sortedDatabase.length) {
            j = (maxFull - 1) * 8 - 8
            maxJ = sortedDatabase.length - (sortedDatabase.length - (maxFull - 1) * 8)
            for (j; j < (maxFull - 1) * 8; j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          } else {
            maxJ -= 8
            j -= 16
            for (j; j < sortedDatabase.length - (sortedDatabase.length - maxJ); j++) {
              const i = sortedDatabase[j]
              section.setAttribute("onclick", `openProductDetails(${i.id})`)
              img.src = i.img
              if (i.discount[0]) {
                span__discount.setAttribute("class", "discount")
                span__discount.textContent = `${i.discount[1]}%`
              }
              span__catalog.textContent = i.catalog
              name.setAttribute("onclick", `openProductDetails(${i.id})`)
              name.textContent = i.name
              price.textContent = `${i.price}₽`

              copyCard__product_pattern = card__product_pattern.content.cloneNode(true)
              card__product_pos.append(copyCard__product_pattern)
            }
          }
        }
      }
    }
  })

  function sortDatabaseByPriceDescending(database) {
    return database.slice().sort((a, b) => b.price - a.price)
  }

  function sortDatabaseByPrice(sortedDatabase) {
    return sortedDatabase.slice().sort((a, b) => a.price - b.price)
  }

  function openProductDetails(id) {
    var currentUrl = window.location.href

    var urlWithoutHash = currentUrl.split("#")[0]

    var newUrl = urlWithoutHash.replace("product.html", "productDetails.html") + "#" + id

    window.location.href = newUrl

    var extractedId = extractAndRemoveIdFromURL()
    console.log("Извлеченный id:", extractedId)
  }

  function extractAndRemoveIdFromURL() {
    var currentUrl = window.location.href

    var hashPosition = currentUrl.indexOf("#")

    if (hashPosition !== -1) {
      var id = currentUrl.substring(hashPosition + 1)

      var urlWithoutHash = currentUrl.substring(0, hashPosition)

      window.history.replaceState({}, document.title, urlWithoutHash)

      return id
    } else {
      return null
    }
  }
} else if (user__location === "productDetails") {
  const windowProductDetails_pos = document.querySelector("#windowProductDetails_pos")

  const windowProductDetails = document.querySelector("#windowProductDetails")

  const errorerrorIndicator = windowProductDetails.content.querySelector("#errorerrorIndicator")
  const img__ProductDetails = windowProductDetails.content.querySelector("img")
  const span__ProductDetails = windowProductDetails.content.querySelector("#span")
  const h1__ProductDetails = windowProductDetails.content.querySelector("h1")
  const s__ProductDetails = windowProductDetails.content.querySelector("s")
  const price__ProductDetails = windowProductDetails.content.querySelector("#price")
  const p_1__ProductDetails = windowProductDetails.content.querySelector("#p_1")
  const p_2__ProductDetails = windowProductDetails.content.querySelector("#p_2")

  let copyWindowProductDetails = windowProductDetails.content.cloneNode(true)

  var extractedId = extractAndRemoveIdFromURL()

  if (extractedId === null || extractedId === "") {
    errorerrorIndicator.textContent = "ERROR!"
    errorerrorIndicator.style = "font-size: 10vw; color: red;"
  } else {
    let i = database[database.length - extractedId - 1]
    if (i.discount[0]) {
      s__ProductDetails.textContent = `${i.price}₽`
      price__ProductDetails.textContent = `${i.price - (truncateDecimal((i.price / 100) * i.discount[1]))}₽`
    } else if (!i.discount[0]) {
      price__ProductDetails.textContent = `${i.price}₽`
    }
    img__ProductDetails.src = i.img
    span__ProductDetails.textContent = i.catalog
    h1__ProductDetails.textContent = i.name
    p_1__ProductDetails.textContent = i.ProductInformation
    p_2__ProductDetails.textContent = i.PurchaseInformation
  }

  copyWindowProductDetails = windowProductDetails.content.cloneNode(true)
  windowProductDetails_pos.append(copyWindowProductDetails)
}

function truncateDecimal(number) {
  return Math.round(number * 100) / 100
}

function openProductDetails(id) {
  var currentUrl = window.location.href

  var urlWithoutHash = currentUrl.split("#")[0]

  var newUrl = urlWithoutHash.replace("index.html", "productDetails.html") + "#" + id

  window.location.href = newUrl

  var extractedId = extractAndRemoveIdFromURL()
  console.log("Извлеченный id:", extractedId)
}

function extractAndRemoveIdFromURL() {
  var currentUrl = window.location.href

  var hashPosition = currentUrl.indexOf("#")

  if (hashPosition !== -1) {
    var id = currentUrl.substring(hashPosition + 1)

    var urlWithoutHash = currentUrl.substring(0, hashPosition)

    return id
  } else {
    return null
  }
}
