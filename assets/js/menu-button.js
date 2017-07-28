
document.querySelector("#menuButton").addEventListener("click", menu);
	function menu() {
		document.querySelector("#nav").classList.remove("nav--hideMe");
		document.querySelector("#nav").classList.add("animateIn");
	}


	document.querySelector("#nav-close").addEventListener("click", close);
		function close() {
			document.querySelector("#nav").classList.add("animateOut");
			document.querySelector("#nav").classList.add("nav--hideMe");
			document.querySelector("#nav").classList.remove("animateOut");
		};
