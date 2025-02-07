function switchTree() {

    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);

    console.log("a = ", a);
    console.log("b = ", b);

    switch(Math.sign(a - b)) {
        case 1:
            console.log("a > b");
            break;
        case -1:
            console.log("a < b");
            break;
        case 0:
            console.log("a == b");
            break;
        default:
            console.log("a == b");
    }
}

switchTree();
