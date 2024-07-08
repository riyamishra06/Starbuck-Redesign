function navAnim(){
    let tl = gsap.timeline();
  
  
  tl.from(".logo",{
    y: "50%",
    opacity:0,
    duration:1
  },"a")
  .from(".overlay",{
    x:"-50%",
    duration:1,
  },"a")
  .from(".nav-center a",{
    y: "50%",
    opacity:0,
    stagger:.1,
    duration:.5,
    ease: Power4
  })
  .from(".icons i",{
    x:"100%",
    opacity:0,
    duration:1
    })
    
  }
  
  function pag1Anim(){
    let tl = gsap.timeline();
  tl.from(".page1 h1",{
    y:"100%",
    opacity:0,
    duration:1,
  },"b")
  .from(".page1 img",{
    y:100,
    opacity:0,
    duration:1
  },"b")
  .from(".classic h2",{
    y:"100%",
    opacity:0,
    duration:1
  },"b")
  .from(".pick",{
    y:"100%",
    opacity:0,
    duration:1
  },"b")
  .from(".page1-bottom",{
    y:"100%",
    opacity:0,
    duration:1
  },"b")
  
  
  
  }
  
  var run = true;
  function productMove(){
    let xprev = 0;
  let img = document.querySelector(".page1 img");
    img.addEventListener("mousemove", (dets)=>{
      var left = img.getBoundingClientRect().left;
      var right = img.getBoundingClientRect().width + left;
      var top = img.getBoundingClientRect().top;
      var bottom = img.getBoundingClientRect().height + top;
      var xRange = gsap.utils.mapRange(left,right,-60,60,dets.x);
      var yRange = gsap.utils.mapRange(top,bottom,-60,60,dets.y);
      
      let xscale = gsap.utils.clamp(-20, 20, dets.x - xprev);
      xprev = dets.clientX;
      if(run){
      gsap.to(img,{
        rotation: xscale,
        duration:1,
        ease: Power4
      })
  
  
      gsap.to(img,{
      x:xRange,
      y:yRange,
      duration:1
      })
      }
    })
  
    img.addEventListener("mouseleave", (dets)=>{
     if(run){
        gsap.to(img,{
            x:"initial",
            y:"initial",
            duration:1,
            ease: Power4,
            })
        
            gsap.to(img,{
              rotation: 0,
              duration:1,
              ease: Power4
            })
     }
  
    })
  
  }
  
  
 function page2Anim(){
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.page2',
      scroller: "body",
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 1,
  }}
  );
  
  // tl.to(".overlay", {
    //   rotation:"100deg",
    //   top:"30%",
    //   left:"25%",
  // },"a");
  
  tl.to(".page1 img", {
    rotation:"360deg",
    top:"160%",
    left:"80%",
    scale:1.3
  },"a");
  tl.to(".nav-center a",{
    color:"white",
    duration:1,
    ease: Power4
  },"a")
  
  window.addEventListener("scroll",()=>{
    let tr = document.querySelector(".page2").getBoundingClientRect();
    
    if(tr.top<550){
      run=false
    }else{
      run= true
    }
  
  })
 }

function page2_part2(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      start:"top 20%",
    }
   })
    
    tl.from(".page2 h1",{
      x:"-50%",
      opacity:0,
      duration:1
    })
    tl.from(".page2 h3",{
      x:"-100%",
      opacity:0
    })
    tl.from(".page2 h4",{
      x:"-100%",
      opacity:0
    })
   
    gsap.to(".overlay",{
      rotation:"180deg",
        top:"20%",
        left:"60%",
      scrollTrigger: {
        trigger: '.page2',
        scroller: "body",
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1,
    }
    })
}


function slider(){
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.product');
  let isScrolling;
  
  function updateCenterSlide() {
      const containerRect = document.querySelector('.page3-right').getBoundingClientRect();
  
      slides.forEach((slide, index) => {
          slide.classList.remove('center');
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const containerCenter = containerRect.left + containerRect.width / 2;

          console.log(Math.abs(slideCenter - containerCenter));
  
          if (Math.abs(slideCenter - containerCenter) < slideRect.width / 2) {
              slide.classList.add('center');
          }
      });
  }
  
  function handleScroll() {
      clearTimeout(isScrolling);
      
      isScrolling = setTimeout(() => {
          updateCenterSlide();
      }, 66);
  }
  
  slider.addEventListener('scroll', handleScroll);
      slider.scrollLeft = slider.offsetWidth; 
      updateCenterSlide();

  
}

let coffee = [
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100433.webp",tittle:"Caffè Americano"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100377.webp",tittle:"Caffe Latte"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100399.webp",tittle:"Iced Caffè Mocha"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100441.webp",tittle:"Iced Caffè Americano"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100391.webp",tittle:"Caffè Mocha"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/113842.webp",tittle:"Belgium Chocolate Latte"},
  {img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/108052.webp",tittle:"Velvet Vanilla Latte"},
];
let food = [
  {tittle:"Bake In Mushroom Cheese Melt Baguette SW",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115301_1.webp"},
  {tittle:"Tandoori Soya Chaap Wrap",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115298_1.webp"},
  {tittle:"BBQ Chicken Wrap",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115299_1.webp"},
  {tittle:"Bake In Sriracha Chicken Sourdough SW",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115304_1.webp"},
  {tittle:"Bake In Roast Chicken Baguette SW",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115302_1.webp"},
  {tittle:"Bake In Pesto Veggie Sourdough SW",img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115300_1.webp"},
];
let frappuccino = [
  {tittle:"Triple Chocolate Cream Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115472.webp"},
  {tittle:"Mocha Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100465.webp"},
  {tittle:"Belgium Chocolate Cream Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/113852.webp"},
  {tittle:"Belgium Chocolate Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/113852.webp"},
  {tittle:"Alphonso Mango Java Chip Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/104905.webp"},
  {tittle:"Espresso Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100468.webp"},
  {tittle:"Caramel Java Chip Frappuccino", img:"https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/103813.webp"}
];
function productshow(){
  let clutter = ""
  showProduct.forEach((p)=>{
    clutter+=`<div class="product">
    <div class="img">
    <img src="${p.img}" alt="">
    </div>
    <div class="product-details">
    <div class="details-top">
    <h2>${p.tittle}</h2>
    </div>
    <div class="details-bottom">
    <h3>size options </h3>
    <h3>What's Included</h3>
    </div>
    </div>
    </div>`;
    document.querySelector(".slider").innerHTML=clutter;
  })
  slider()
}
let showProduct = [...coffee];



  document.querySelectorAll(".elem h1").forEach((e)=>{
    e.addEventListener("click",()=>{
      if(e.textContent==="Coffee"){
        showProduct = [...coffee];
      }else if (e.textContent==="Food") {
        showProduct = [...food];
        
      } else if(e.textContent==="Frappuccino") {
        showProduct = [...frappuccino];
      }else if(e.textContent==="Mechandise") {
        showProduct = [...mechandise];
      }
      
      productshow()

    })
  })  




gsap.from(".overlay2",{
  top:"100%",
  left:"-50%",
  rotation:"-40deg",
 scrollTrigger:{
  trigger:".page3",
  scroller:"body",
  start:"top 80%",
  end:"bottom bottom",
  scrub:true
 }
})


window.addEventListener("load",()=>{
  
  navAnim()
  pag1Anim()
  productMove()
  page2Anim()
  page2_part2()
  productshow()
  slider()


})
