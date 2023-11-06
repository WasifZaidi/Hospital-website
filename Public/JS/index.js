const opennav = (condition) => {
    if (condition == "Ipad") {
        document.getElementById("res-navbar").style.display = "flex"
        document.getElementById("res-navbar").style.width = "45%"
    } else {
        document.getElementById("res-navbar").style.display = "flex"
        document.getElementById("res-navbar").style.width = "75%"
    }
}
const closenav = () => {
    document.getElementById("res-navbar").style.width = "0%"
    document.getElementById("res-navbar").style.display = "none"
}
const moreabo = (num)=>{
    if(num === "first"){
        document.getElementById("more-para").style.display = "block"
        document.getElementById('more-arr').style.display = "none"
        document.getElementById('less-arr').style.display = "block"
    }
    if(num === "second"){
        document.getElementById("more-para1").style.display = "block"
        document.getElementById('more-arr1').style.display = "none"
        document.getElementById('less-arr1').style.display = "block"
    }
    if(num === "third"){
        document.getElementById("more-para2").style.display = "block"
        document.getElementById('more-arr2').style.display = "none"
        document.getElementById('less-arr2').style.display = "block"
    }
}
const scrooll = () => {
    var con = document.getElementById("Review-card")
    con.scrollLeft -= 900

}
const scroolR = () => {
    var con = document.getElementById("Review-card")
    con.scrollLeft += 900
}
var con = document.getElementById("Review")
con.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    con.scrollLeft += evt.deltaY
})

const seeReview = () => {
    document.getElementById("See-review").style.display = "flex"
    document.getElementById("Give-review").style.display = "none"
    document.getElementById("arr-btn").style.display = "flex"
    document.getElementById("give").style.display = "block"
    document.getElementById("see").style.display = "none"
}

const giveReview = () => {
    document.getElementById("See-review").style.display = "none"
    document.getElementById("Give-review").style.display = "flex"
    document.getElementById("arr-btn").style.display = "none"
    document.getElementById("give").style.display = "none"
    document.getElementById("see").style.display = "block"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxonPDBNwBxhhdoI-MTcUhFyvu_DI16gE-e-5FvlxfAj1OeldKK-3Ra7TW4k14e0ChG6Q/exec'
const form = document.forms['testimonial']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
fetch("https://script.google.com/macros/s/AKfycbwlFWGHZXBAFbwO5UBd6-Q0EagXG0QXKzhXKlkeY9ZS6jJuhCM2ER5cj4sGALDYTMXQxg/exec")
.then(res => res.json())
.then((data)=>{
 const review =  data.content.slice(1,1000).map((curElem)=>{
    let rewiewarr = []
    let rewiewnamearr = []
    rewiewnamearr.push(curElem[0])
    rewiewarr.push(curElem[curElem.length - 1])
        return `
        <div class="card">
        <h1>${rewiewnamearr}</h1>
        <p>${rewiewarr}</p>
    </div>
    `
    }).join("")
    document.getElementById("Review-card").innerHTML = review
})