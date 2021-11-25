window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Information';
		window.location.reload();
	}
}


// let MainAnimated = gsap.timeline({
//     scrollTrigger: {
//         trigger: "body",
//         start: "%top center",
//         end: "%bottom center",
//         toggleActions: "play complete reverse none",
//         markers: {
//             startColor: "blue",
//             endColor: "black"},

//     }
// });
var tl = gsap.timeline();
    // tl.from(".MainStudent, .MainStudent_animated0, .MainStudent_animated1", 3, {autoAlpha:0, yoyo:true, ease: Linear.easeNone}, "<");

    tl.to(".MainText", 1.8,{top: "25%", width:"31%", rotation:"0"},"<")
    tl.to(".MainStudent_animated0, .MainStudent_animated1", 0, {autoAlpha:0}, ">+2");
    tl.to(".MainStudent_animated2", 0, {autoAlpha:1}, "<");

    tl.to(".MainGum", 1, {width: "5%", ease: Power1.easeInOut}, ">+0.1");
    tl.to(".MainGum", 1, {width: "36%", ease: Power3.easeIn}, ">");

    tl.set(".main-graph-container",{display: "unset"}, ">");
    tl.add( function(){ 
        myChart.config.data.datasets[0].data[0] = 0;
        myChart.config.data.datasets[0].data[1] = 0;
        myChart.config.data.datasets[0].data[2] = 0;
        myChart.config.data.datasets[0].data[3] = 0;
        myChart.config.data.datasets[0].data[4] = 0;
        myChart.update();
    } )

    tl.to(".main-graph-container", 0.5, {autoAlpha:1}, ">");
    tl.add( function(){ 
        myChart.config.data.datasets[0].data[0] = 7;
        myChart.config.data.datasets[0].data[1] = 10;
        myChart.config.data.datasets[0].data[2] = 4;
        myChart.config.data.datasets[0].data[3] = 5;
        myChart.config.data.datasets[0].data[4] = 3;
        myChart.update();
    },"<+0.2" );

    tl.to(".bubble", 1, {autoAlpha:1, ease: Linear.easeNone}, "<+0.1");

    tl.to(".Food1", 1.9,{rotation: 60, left:"2%"},"<");
    tl.from(".Food2", 1.7,{top:"140%", left:"25%"},"<");
    tl.to(".Food3", 2,{rotation: -1, top:"0%"},"<");
    tl.to(".Food4", 1.8,{rotation: 30, left:"98%"},"<")
    tl.to(".Food5", 1.9,{rotation:30, top:"23%", left:"95%"},"<");

    tl.from(".SettingsNav", 2,{opacity:0},"<");
    tl.to(".MainStudent, .MainStudent_animated2, .MainText, .MainGum", 1.2, {autoAlpha:0, ease: Power3.easeOut}, "<");




var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.1 });
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"60.1%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.2%", top:"60.2%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"60.3%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.0%", top:"60.2%", ease: Linear.easeNone}, ">");
