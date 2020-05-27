
async function testAsync() {
    console.log("testAsync", new Date().getTime());
}

function test1() {
    console.log("test1", new Date().getTime());
}

function testMain(): void {

    testAsync();
    test1();
}

testMain();