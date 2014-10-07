var table = document.querySelectorAll("td");
var letters = []	

function clicker() {
	for (var i = 0; i < table.length; i++) {
		table[i].addEventListener("click", function add(){
			console.log(letters.length)
			letters.push("O")
			if (letters.length === 0) {
				this.innerHTML = "X"
			}
			if (letters.length === 1) {
				this.innerHTML = "O"
			}
			if (letters.length === 2) {
				this.innerHTML = "X"
			}
			if (letters.length === 3) {
				this.innerHTML = "O"
			}
			if (letters.length === 4) {
				this.innerHTML = "X"
			}
			if (letters.length === 5) {
				this.innerHTML = "O"
			}
			if (letters.length === 6) {
				this.innerHTML = "X"
			}
			if (letters.length === 7) {
				this.innerHTML = "O"
			}
			if (letters.length === 8) {
				this.innerHTML = "X"
			}
			if (letters.length === 9) {
				this.innerHTML = "O"
			}
			this.removeEventListener("click", add);
			console.log(letters.length)
			console.log(this)
			
		})

			
	};
}

clicker()