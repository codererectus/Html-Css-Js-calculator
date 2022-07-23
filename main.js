let result = '';

function getClickText(text) {
    let display_window = document.getElementsByClassName("_display")[0];
	if(text === 'C'){
		result = '';
		display_window.innerText = '';
	}
	else {
		if (text === '%'){
			text = '/100=';
		}
		else if ((text === '=') && (result.length <= 1)){
			result = '';
			display_window.innerText = '';
			return;
		}
	    result+=text;
	    display_window.innerText = result;
	    console.log(`result ${result}`);
		let countOfEquals = result.split("=").length - 1;
		console.log(`count of "=": ${countOfEquals}`)
	    if ((result.slice(-1) === "=") && (countOfEquals == 1)) {
	    	try{
		    	result = eval(result.slice(0, -1));
		    	if (isNaN(result)){
		    		result = Infinity
		    	}
		    	console.log(result);
		    	display_window.innerText = result;
		    }catch{
		    	display_window.innerText = 'Error';
		    	result = '';
		    	console.log('error');
		    }
	    }
	}
}

