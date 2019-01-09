


//Troubleshooting
DebugMode = true

if (DebugMode == true){
  document.getElementById("test").innerHTML = "New User?";


}

//Check metamask and instantiate

window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  startApp()

})

// Check if metamask is locked
// web3 has to be injected/present
if(web3js)
{
  if(web3js.eth.accounts.length)
  {
    // if not locked, get account
    const account = web3js.eth.accounts[0];
    // updates UI, state, pull data
  }
  else {
    // locked. update UI. Ask user to unlock.
  }
}

//Check network
if(web3js)
  {
    switch (web3js.version.network) {
      case "1":
        console.log('This is mainnet')
        break
      case "2":
        console.log('This is the deprecated Morden test network.')
        break
      case "3":
        console.log('This is the ropsten test network.')
        break
      case "4":
        console.log('This is the Rinkeby test network.')
        break
      case "42":
        console.log('This is the Kovan test network.')
        break
      default:
        console.log('This is an unknown network.')
    }

    const desiredNetwork = 1;
    if(web3js.version.network !== desiredNetwork)
    {
      // ask user to switch to desired network
      console.log(`Please switch to main network.`);
    }
  }


  // Get current account

  const getAccount = () => {
  // check if web3 present
  if(web3js)
    // return default account
    return web3js.eth.accounts[0];
  return undefined;
}

// Get balance of current account
web3js.eth.getBalance(getAccount(), (err, balance) => {
    const balanceInEth = web3js.fromWei(balance, "ether");
    console.log(`balance ${balanceInEth} ether`);
  });

