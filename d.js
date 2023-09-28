
function validateDNA()
 {
    var dna = document.getElementById("dna").value;
    var validChars = ["A", "C", "G", "T"];
    for (var char of dna) {
      if (!validChars.includes(char)) {
        alert("DNA is invalid.");
        return;
      }
    }
    alert("DNA is valid.");
  }
       document.getElementById("button").addEventListener("click", validateDNA); 
  
  
function getDNALength()
 {
   var dna = document.getElementById('dna').value;

    alert("lengh:" +dna.length);
  }
        document.getElementById('get-length-btn').addEventListener('click', getDNALength);


  
function DNAtoRNA()
 {
   var dna = document.getElementById("dna").value;
    var rna = dna.replace("T", "U");
     alert("RNA :" +rna);
  }
     document.getElementById("RNA").addEventListener("click", DNAtoRNA);