function getCentimeters(inches){	
    event.preventDefault();
    if (!Number.isFinite(parseFloat(inches))){
        alert('Must input a number!');
        return;
    }
    
	var result;
	var conversion_factor;
	var num_inches = parseFloat(inches);
    axios.get("http://statenweb.mockable.io/conversions/")
        .then(function (response) {
        	conversion_factor = response.data.centimetersInInch;	
        	result = (num_inches * conversion_factor);
        	document.getElementsByClassName('centimeter-result')[0].innerHTML = "" + inches + "in = " + result + "cm";
        })
}

function getInches(centimeters){
    event.preventDefault();
    if (!Number.isFinite(parseFloat(centimeters))){
        alert('Must input a number!');
        return;
    }
    
	var result;
	var conversion_factor;
	var num_centimeters = parseFloat(centimeters);
    axios.get("http://statenweb.mockable.io/conversions/")
        .then(function (response) {
        	conversion_factor = response.data.inchesInCm;	
        	result = (num_centimeters * conversion_factor);
        	document.getElementsByClassName('inch-result')[0].innerHTML = "" + centimeters + "cm = " + result + "in";
        })
}
