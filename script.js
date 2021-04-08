function maxString(){
	if (document.strings.string1.value != "" && document.strings.string1.value != null){
		let arr = document.strings.string1.value.split(" ");
		var res = "";
		var long = arr[0];
		var proverka = 0;
		for (let i=0; i<arr.length; i++) {
			if (arr[i].length > long.length){
		        long = arr[i];
	      	}
	      	else if (arr[i].length == long.length) { proverka++;}
		}
		document.getElementById('res1').style.display = "block";
		document.getElementById('res1').style.color= "darkgreen";
	    document.getElementById('res1').innerHTML = "Самая длинная строка: " + long;
		if (proverka == arr.length) {
			res = "Все строки одной длины либо была введена только одна строка"
			document.getElementById('res1').style.display = "block";
			document.getElementById('res1').style.color= "crimson";
	    	document.getElementById('res1').innerHTML = res;
		}
		
	}
	else {
		res = "Вы ничего не ввели";
		document.getElementById('res1').style.display = "block";
		document.getElementById('res1').style.color= "crimson";
	    document.getElementById('res1').innerHTML = res;
	}
}


function outputSymbol(){
	if (document.symbol.string2.value != "" && document.symbol.string2.value != null){
		if (document.symbol.string2.value.length == 1) { 
			document.getElementById('res2').style.display = "block";
			document.getElementById('res2').style.color= "crimson";
			document.getElementById('res2').innerHTML = "Введите больше одного символа";
		}
		else{
			window.str = document.symbol.string2.value;
			let count = 0;
			let max = 1;
			window.maxChar = "";
			for (let i=0; i<str.length; i++){
				for (let j=i; j<str.length; j++){
					if (str[i]==str[j]){ count++;}
					if (max < count) {
						max = count;
						maxChar = str[i];
					}
				}
				count = 0;
			}
			document.getElementById('res2').style.display = "block";
			document.getElementById('res2').style.color= "darkgreen";
			document.getElementById('res2').innerHTML = "Чаще всего в этой строке использован символ: " + maxChar + "<br>Количество его повторений: " + max;
			document.getElementById('change').style.display = "block";
		}
	}
	else {
		document.getElementById('res2').style.display = "block";
		document.getElementById('res2').style.color= "crimson";
	    document.getElementById('res2').innerHTML = "Вы ничего не ввели";
	}
}



function changeSymbol(){
	let newChar = document.getElementById('string3').value;
	let newStr = "";
	if (newChar != "" && newChar != null){
		if (newChar.length == 1){
			for (let i=0; i<str.length; i++){
				if (str[i] == maxChar){
					newStr += newChar;
				}
				else {
					newStr += str[i];
				}
			}
			document.getElementById('change').style.display = "block";
			document.getElementById('res3').style.display = "block";
			document.getElementById('res3').style.color= "darkgreen";
	    	document.getElementById('res3').innerHTML = "Измененная строка: " + newStr;
		}
		else{
			document.getElementById('change').style.display = "block";
			document.getElementById('res3').style.display = "block";
			document.getElementById('res3').style.color= "crimson";
	    	document.getElementById('res3').innerHTML = "Введите только один символ";
		}
	}
	else {
		document.getElementById('change').style.display = "block";
		document.getElementById('res3').style.display = "block";
		document.getElementById('res3').style.color= "crimson";
	    document.getElementById('res3').innerHTML = "Вы ничего не ввели";
	}
}


function isAnagram(){
	let str1 = document.getElementById("string4").value;
    let str2 = document.getElementById("string5").value;
    if (str1.length <= 1){
        document.getElementById('res4').style.display = "block";
		document.getElementById('res4').style.color= "crimson";
	    document.getElementById('res4').innerHTML = "Вы ввели меньше двух символов в поле для первой строки";
    }
    else if (str2.length <= 1){
        document.getElementById('res4').style.display = "block";
		document.getElementById('res4').style.color= "crimson";
	    document.getElementById('res4').innerHTML = "Вы ввели меньше двух символов в поле для второй строки";
    }
    else {
		str1 = str1.split("").sort().join("");
		str2 = str2.split("").sort().join("");
		if (str1 == str2) {
			document.getElementById('res4').style.display = "block";
			document.getElementById('res4').style.color= "darkgreen";
	    	document.getElementById('res4').innerHTML = "Строки являются анаграммами";
		}
		else {
			document.getElementById('res4').style.display = "block";
			document.getElementById('res4').style.color= "darkgreen";
	    	document.getElementById('res4').innerHTML = "Строки не являются анаграммами";
		}
	}
}
