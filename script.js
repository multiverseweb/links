gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {
	duration: "4",
	xPercent: "200",
	ease: "linear",
	scrollTrigger: {
		trigger: "nav",
		markers: false,
		start: "top 10%",
		end: "bottom 1%",
		scrub: 2
	}
});
gsap.from(".outer-circle-large, .outer-circle-large-inner", {
	duration: "2",
	rotate: "360",
	ease: "linear",
	scrollTrigger: {
		trigger: ".header-circle",
		markers: false,
		start: "top top",
		end: "bottom top",
		scrub: 8
	}
});
gsap.from(".outer-circle-medium", {
	duration: "1.5",
	rotate: "-360",
	ease: "linear",
	scrollTrigger: {
		trigger: ".circle",
		markers: false,
		start: "top bottom",
		end: "bottom top",
		scrub: 2
	}
});
gsap.to(".outer-circle-medium", {
	duration: "1",
	scale: "4",
	opacity: "0",
	ease: "linear",
	scrollTrigger: {
		trigger: ".circle",
		markers: false,
		start: "top bottom",
		end: "bottom top",
		scrub: 4
	}
});
gsap.to(".head", {
	duration: "1",
	xPercent: "100",
	rotate: "60",
	opacity: "0",
	ease: "linear",
	scrollTrigger: {
		trigger: ".title",
		markers: false,
		start: "top 30%",
		end: "bottom top",
		scrub: 4,
		pin: true
	}
});
gsap.to(".title-background", {
	duration: "1",
	xPercent: "-100",
	yPercent: "300",
	rotate: "-60",
	rotateX: "320",
	rotateY: "220",
	scale: 0,
	opacity: "0",
	ease: "linear",
	scrollTrigger: {
		trigger: ".title-background",
		markers: false,
		start: "top 30%",
		end: "bottom top",
		scrub: 4
	}
});
gsap.to(".triangle-one", {
	duration: "2",
	yPercent: "-300",
	xPercent: "250",
	rotate: "-160",
	scale: ".5",
	opacity: "0.15",
	ease: "linear",
	scrollTrigger: {
		trigger: ".title-background",
		markers: false,
		start: "top 30%",
		end: "bottom top",
		scrub: 2
	}
});
gsap.to(".triangle-two", {
	duration: "2",
	yPercent: "470",
	xPercent: "-250",
	rotate: "-180",
	scale: "1.5",
	opacity: "1",
	ease: "linear",
	scrollTrigger: {
		trigger: ".title-background",
		markers: false,
		start: "top 30%",
		end: "bottom top",
		scrub: 10
	}
});

Splitting();
ScrollOut({
	targets: "[data-splitting]"
});
