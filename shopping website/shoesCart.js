const shoesImgMain = document.getElementById("shoesImgMain");
const shoesImg1 = document.getElementById("shoesImg1");
const shoesImg2 = document.getElementById("shoesImg2");
const shoesImg3 = document.getElementById("shoesImg3");
const shoesImg4 = document.getElementById("shoesImg4");
const shoesImg5 = document.getElementById("shoesImg5");

shoesImg1.addEventListener("mouseover", () => {
  shoesImgMain.src = 'hj7DpMR1JXcC6yDTeCIE_VO2203864A-VEJA-Volley-W-Aircell-Lunar-Pierre-Cyprus-os-1.webp'
});
shoesImg2.addEventListener("mouseover", () => {
  shoesImgMain.src = 'veja-volley-organic-leather-black-VO2020510_4.jpg'
});
shoesImg3.addEventListener("mouseover", () => {
  shoesImgMain.src = '486007.webp'
});
shoesImg4.addEventListener("mouseover", () => {
  shoesImgMain.src = 'veja-volley-organic-leather-black-VO2020510_3.jpg'
});
shoesImg5.addEventListener("mouseover", () => {
  shoesImgMain.src = 'veja-sneakers-volley-suede-brown-VO0303649_2.jpg'
})

const toggle = document.getElementsByClassName("toggle");
const content = document.getElementsByClassName("content");

for(let i=0; i<toggle.length; i++) {
  toggle[i].addEventListener("mouseover", () => {
    content[i].scrollHeight;

    if(content[i].style.height != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px"
    }
  })
}
for(let i=0; i<toggle.length; i++) {
  toggle[i].addEventListener("mouseout", () => {
    content[i].scrollHeight;

    if(content[i].style.height = content[i].scrollHeight + "px") {
      content[i].style.height = "0px"
    }
  })
}
