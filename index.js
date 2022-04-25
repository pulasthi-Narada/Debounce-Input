
// debounce fuction
const debounce = (func, delay = 1000) => {
	let timeoutId;
    // return the function to EventListener
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};

// ***** exsample to use debounce function *********
const onInput = event => {
	console.log('test')
};
input.addEventListener('input', debounce(onInput, 500));
