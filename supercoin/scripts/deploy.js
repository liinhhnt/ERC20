async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const balance = await deployer.getBalance();
    console.log("Account balance:", ethers.utils.formatEther(balance));
  
    const NtlCoin = await ethers.getContractFactory("NtlCoin");
    const ntlCoin = await NtlCoin.deploy();
    console.log("Token deployed to:", ntlCoin.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  