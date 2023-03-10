const testimonials = [
  {
    name: "Rajat",
    profile_pic_path: "media/people/person-1.svg",
    location: "Kottayam, India",
    rating: "5",
    message:
      "Wow! I am very happy with this VPN. It has exceeded my expectations and so far there have been no problems. VelocityVPN is the best!",
  },
  {
    name: "Seby",
    profile_pic_path: "media/people/person-2.svg",
    location: "Bangalore, India",
    rating: "5",
    message:
      "The convenience and speed is supreme! I can also watch Netflix and other media.",
  },
  {
    name: "Shine",
    profile_pic_path: "media/people/person-3.svg",
    location: "Dubai, UAE",
    rating: "5",
    message:
      "I can make WhatsApp call without issues now! The video quality is great as well!",
  },
  {
    name: "Martin",
    profile_pic_path: "media/people/person-3.svg",
    location: "Bangalore, India",
    rating: "5",
    message:
      "I can stream in 4K without any buffering! Awesome!",
  },
  {
    name: "Sasi",
    profile_pic_path: "media/people/person-3.svg",
    location: "Chennai, India",
    rating: "5",
    message:
      "The speeds are amazing! Unblocks everything!",
  },
]

let testimonialItems = document.querySelector(".testimonial-items")
let itemLinks = document.querySelector(".item-links")

testimonials.forEach((testimonial, i) => {
  let testimonialItem = document.createElement("div")
  testimonialItem.className = `testimonial-item ${i === 0 ? "selected" : ""}`
  testimonialItem.innerHTML = `
    <div class="person-info-rating">
    <div class="person-info">
        <!--  <div class="person-icon-ctr">
        <img src="${testimonial.profile_pic_path}" />
        </div>-->
        <div class="person-info-text">
        <p class="person-name">${testimonial.name}</p>
        <p class="person-location">${testimonial.location}</p>
        </div>
    </div>
    <div class="person-rating">
        <p>${testimonial.rating}</p>
        <div class="rating-icon-ctr">
        <img src="media/rating-star.svg" />
        </div>
    </div>
    </div>
    <div class="person-testimonial">
    <p>"${testimonial.message}"</p>
    </div>
    `
  testimonialItems.appendChild(testimonialItem)

  let itemLink = document.createElement("div")
  itemLink.className = `item-link ${i === 0 && "selected"}`

  itemLinks.appendChild(itemLink)
})

let testimonialItemsList = document.querySelectorAll(".testimonial-item")
let itemLinkList = document.querySelectorAll(".item-link")
let selectedIndex = 0

function selectTestimonial(index) {
  testimonialItemsList[selectedIndex].classList.remove("selected")
  itemLinkList[selectedIndex].classList.remove("selected")

  selectedIndex = index

  let testimonialListItem = testimonialItemsList[selectedIndex]
  testimonialListItem.classList.add("selected")

  testimonialItems.scrollBy(
    testimonialListItem.offsetLeft -
      testimonialItems.offsetLeft -
      testimonialItems.scrollLeft,
    0
  )

  itemLinkList[selectedIndex].classList.add("selected")
}

itemLinkList.forEach((itemLink, i) => {
  itemLink.onclick = () => selectTestimonial(i)
})

document.querySelector(".slider-btn.right").onclick = () => {
  let index =
    selectedIndex === testimonialItemsList.length - 1 ? 0 : selectedIndex + 1
  selectTestimonial(index)
}

document.querySelector(".slider-btn.left").onclick = () => {
  let index =
    selectedIndex === 0 ? testimonialItemsList.length - 1 : selectedIndex - 1
  selectTestimonial(index)
}
