import { createWeb3Name } from '@web3-name-sdk/core'

const web3Name = createWeb3Name()
// Resolve a domain name
const address = await web3Name.getAddress('spaceid.bnb')
console.log(address)
console.log("---")
// Resolve an address
const name = await web3Name.getDomainName({
    address: '0xb5932a6B7d50A966AEC6C74C97385412Fb497540',
    // queryTldList: ['bnb'],
  })
console.log(name)


async function resolveDomainName() {
    const domainName = document.getElementById('domainName').value;
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }

    try {
        // Include SDK initialization and usage here
        const web3Name = createWeb3Name(); // Assuming createWeb3Name is available globally
        const address = await web3Name.getAddress(domainName);
        document.getElementById('resolvedAddress').textContent = address;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('resolvedAddress').textContent = 'Error resolving domain';
    }
}

// test