const weightApp = (function() {
	const lbsInput = document.getElementById('lbsInput'),
				gramsOutput = document.getElementById('gramsOutput'),
				kgOutput = document.getElementById('kgOutput'),
				ozOutput = document.getElementById('ozOutput'),
				output = document.getElementById('output'),
				body = document.querySelector('body');
  return {
		init() {
			output.style.visibility = 'hidden';
			lbsInput.addEventListener('input', function(e) {
				output.style.visibility = 'visible';
				let lbs = e.target.value;
				gramsOutput.textContent = lbs / 0.0022046;
				kgOutput.textContent = lbs / 2.2046;
				ozOutput.textContent = lbs * 16;
    	});
			body.addEventListener('click', function() {
				output.style.visibility = 'hidden';
				lbsInput.value = '';
			});
    }
	}
	
})();
weightApp.init();
