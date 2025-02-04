function decisionTree() {

    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    console.log("a = ", a);
    console.log("b = ", b);

    if (a > b) {
        console.log("a > b");
    } else if (a < b) {
        console.log("a < b");
    } else {
        console.log("a == b");
    }
}

decisionTree();
