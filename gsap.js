// ----------HOME-----PAGE----------
// navbar GSAP-------------
var h=gsap.timeline()
h.from(".nav-part-1 img ",{
    y:-100,
    duration:0.5,
    delay:0.1,
    opacity:0

})
h.from(".nav-part-2 a ",{
    y:-100,
    duration:0.5,
    delay:0.1,
    opacity:0,
    stagger:0.3

})
 
gsap.from(".landing h1",{
    x:-1200,
    delay:0.5,
    duration:1
})
 
h.from(".landing h4",{
    scale:0,
    opacity:0
})
h.to(".landing h4",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
// ----------PRODUCTS----PAGE----------

gsap.from(".product h1",{
    scale:0,
    x:-1000,
    duration:1,
    scrollTrigger:{
        trigger:".product h1",
        scroller:"body",
         
    }

})
gsap.from(".col-3 img",{
    scale:0,
    delay:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".col-3 img",
        scroller:"body",
       
    }
})
//------------Contact Page-------------------
var c=gsap.timeline()

c.from(".sub-details i,h2",{
    x:-1200,
    delay:0.5,
    duration:1
})
c.from(".details-2 p",{
    x:1000,
    duration:1
})
 
c.from(".map ",{
    scale:0,
    duration:1,
    rotate:180

})