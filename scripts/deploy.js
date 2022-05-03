async function main() {
    const FlashloanFactory = await ethers.getContractFactory("Flashloan");
    const flashloan = await FlashloanFactory.deploy();
    await flashloan.deployed();
    console.log("deployed!")
    const flashLoan = await flashloan.flashloan();

    // wait until the transaction is mined
    await flashLoan.wait()
    console.log("done!")

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
