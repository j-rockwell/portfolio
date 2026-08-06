const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

if (toggle) {
	const syncLabel = () => {
		toggle.textContent = `too ${root.dataset.theme === 'dark' ? 'dark' : 'bright'}?`;
	};

	syncLabel();
	toggle.addEventListener('click', () => {
		const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
		root.dataset.theme = next;
		localStorage.setItem('theme', next);
		syncLabel();
	});
}
