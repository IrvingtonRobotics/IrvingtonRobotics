function alignLinks() {
	var clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (clientWidth <= 768) {
		$("#nav-links").removeClass("text-right").addClass("text-center");
	}
}
$(alignLinks);
$(window).resize(alignLinks);

$(window).on("scroll", function() {
	$(".sticky-top").toggleClass("opaque", $(this).scrollTop() > 50)
	$(".logo").toggleClass("shrink-logo", $(this).scrollTop() > 50)
});


function runAnimation() {
	console.log('fired');
	var t = document.getElementById("typed")
	var typed = new Typed(t, {
	  strings: [
		"",
		"// hello, world. ^5000",
		"// hello, human. ^5000",
		"// hello, robotics. ^10000"
	  ],
	  smartBackspace: true,
	  typeSpeed: 70,
	  backSpeed: 70,
	  loop: false,
	//   loopCount: Infinity,
	  showCursor: false,
	  autoInsertCss: true,
	});
}

$(function() {
	// setTimeout(runAnimation, 5000);
})


$("#cta").click(function() {
	document.location = "https://docs.google.com/forms/d/e/1FAIpQLSfw804FpBmlB9Vu4hG6wAX3Jsd_O5ToXuoQ9IB2SsJDMcUn1A/viewform?embedded=true";
})