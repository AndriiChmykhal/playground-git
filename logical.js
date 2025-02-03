function logical() {
    let a = 5;
    let b = 10;        
    let c = "Hello";   
    let d = 'd';       
    let e = true;      
    let f = false;     

    console.log("a > b", a > b);
    console.log("a < b", a < b);
    console.log("a == b", a == b);
    console.log("a != b", a != b);
    console.log("c == d", c == d);
    console.log("e == f", e == f);
    console.log("e != f", e != f);
    console.log("a === 5", a === '5'); 
    console.log("a == 5", a == '5');

    console.log("e && f", e && f);
    console.log("e || f", e || f);
    console.log("!e", !e); 
    console.log("!f", !f); 
    console.log("(a < b) && (e == true)", (a < b) && (e == true)); 
    console.log("(a > b) || (f == false)", (a > b) || (f == false)); 
}

logical();
