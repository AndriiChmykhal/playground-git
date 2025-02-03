function switchTree() {

    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    console.log("a = ", a);
    console.log("b = ", b);

    switch(true) {
        case a > b:
            console.log("a > b");
            break;
        case a < b:
            console.log("a < b");
            break;
        default:
            console.log("a == b");
    }
}

switchTree();
