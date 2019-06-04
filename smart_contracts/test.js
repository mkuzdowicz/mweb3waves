
const accaountASeed = "bla bla bla not real seed"
const accountBAddres = "sample_address"

console.log("address with waves");
console.log(address(accaountASeed));

it('transfer', async function() {
    let tx = await broadcast(transfer({
        amount: 500000000,
        recipient: accountBAddres},
        accaountASeed
    ))
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx));
})

it('data transaction', async function(){
    let aboutObject = {
        "name": "Martin Kuzdowicz",
        "occupation": "Software Engineer"
    }
    let aboutStr = JSON.stringify(aboutObject)
    let payload = {data: [{key: "web-3-online-course-user-data",value: aboutStr}]}

    let tx = await broadcast(data(payload, accaountASeed))
    await waitForTx(tx.id)
})