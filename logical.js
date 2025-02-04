function logical() {
    const a = 5;
    const b = 10;
    const c = "Hello";
    const d = 'd';
    const e = true;
    const f = false;

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

