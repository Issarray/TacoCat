document.getElementById("btnDemo").addEventListener("click",function(){
    let input1 = document.getElementById("input1").value;
    let isPalindrome = true;
    for(let letter = 0; letter < input1.length/2; letter++){
        if( input1[letter] !== input1[input1.length-1-letter]){
                isPalindrome = false;
        }  
     } 
    console.log("passed loop");

    let output1 = document.getElementById("output1");
    if( isPalindrome ){
        output1.innerText = "Yay!!! It's a palindrome.";
     } else {
        output1.innerText = "NOPE!! Try again. It's not a palindrome.";
     }

});