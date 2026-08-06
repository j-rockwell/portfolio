(() => {
	const stored = localStorage.getItem('theme');
	document.documentElement.dataset.theme =
		stored === 'light' || stored === 'dark' ? stored : 'dark';
})();
