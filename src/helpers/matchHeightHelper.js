export const matchHeight = (className, disableOnMobile) => {
	if (disableOnMobile && window.innerWidth < 768) {
		return;
	}

	const selector = document.getElementsByClassName(className);
	let tallest = 0;
	let i;

	for (i = 0; i < selector.length; i++) {
		const element = selector[i];

		let elementHeight = (element.style.height = "auto");

		elementHeight = element.offsetHeight;

		tallest = elementHeight > tallest ? elementHeight : tallest;
	}

	for (i = 0; i < selector.length; i++) {
		selector[i].style.height = `${tallest}px`;
	}
};
