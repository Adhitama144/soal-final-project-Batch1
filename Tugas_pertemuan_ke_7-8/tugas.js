//no_1
let dataBuah = [
	    {namaBuah: "Nanas", warna: "kuning", biji: "tidak ada", harga: 9000},
	    {namaBuah: "Jeruk", warna: "Oranye", biji: "ada", harga: 8000},
	    {namaBuah: "Semangka", warna: "Hijau & Merah", biji: "ada", harga: 10000},
	    {namaBuah: "Pisang", warna: "kuning", biji: "tidak ada", harga: 5000},
	]

	let dataBuahBaru = []

	dataBuah.forEach(data => {
	    if(data.biji === "ada") {
      	  dataBuahBaru.push(data)
	    }
	})

	console.log(dataBuahBaru)


//no_2
var arr1 = ['Aku', 'Sayang', 'Aku', 'Sama', 'Kamu']

arr1.splice(2, 1)

console.log(arr1)


//no_3
var kataPertama = "saya";
	var kataKedua = "senang";
	var kataKetiga = "belajar";
	var kataKeempat = "javascript";
	
	console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat)


//no_4
let word = 'JavaScript'; 
	let second = 'is'; 
	let third = 'awesome'; 

	let outputGabunganVariable = word + " " + second + " " + third;
	console.log(outputGabunganVariable)



//no_5
let hello = 'Hello '; 
	let world = 'World!!'; 

	let output = `${hello} ${world}`
	console.log(output)

	