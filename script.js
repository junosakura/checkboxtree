window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const changeCheckboxtree = (event) => {
		if (event.target.closest('dt')) {
			const $checkbox = event.target.closest('dl').querySelectorAll('[type=checkbox]');
			$checkbox.forEach((e) => {
				e.checked = event.target.checked;
				e.indeterminate = false;
			});
		}
		const $dl = event.target.closest('fieldset').querySelectorAll('dl');
		for (let i = $dl.length - 1; i >= 0; i--) {
			if (!$dl[i].contains(event.target)) continue;
			const $dtCheckbox = $dl[i].querySelectorAll(':scope dt [type=checkbox]');
			const $ddCheckbox = $dl[i].querySelectorAll(':scope dd [type=checkbox]');
			const $ddChecked = $dl[i].querySelectorAll(':scope dd [type=checkbox]:checked');
			$dtCheckbox[0].checked = $ddChecked.length == $ddCheckbox.length;
			$dtCheckbox[0].indeterminate = $ddChecked.length && $ddChecked.length < $ddCheckbox.length;
		}
	};

	document.querySelectorAll('.checkboxtree').forEach((e) => {
		e.addEventListener('change', changeCheckboxtree);
	});

});
