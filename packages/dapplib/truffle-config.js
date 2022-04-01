require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stove cost mushroom puppy hundred light army gentle'; 
let testAccounts = [
"0xc9839897302e42cbeb9a2d66bc28be93dd082022bd1f6a9c5b9af5ad5909bd94",
"0x4019910fab495993f36ebc93a70db7f0ebc76ba9095265e3723f91e973f4c664",
"0x9df24c88a5d0e128241969093f8686b617397353de24fc55d411bebfdacdee72",
"0x77998b0b241134e47810dab0fc9e072600b47df6fc7e10b03b5a6cf24389a80f",
"0xff8ea8519d293bc5c12307ccdd6b0599e8a029bebeafea5751082580e89a38ac",
"0x4f8359ac2c61b4285af3668fc29edc07fa63899ee9e18bd9b6ee99acd3f86a84",
"0xfe973a8074248e31021b1ece743273b17afc9fed19b4f405af563a64c6577665",
"0xebd3e477f183e0857a35166e5daf8311998d2ff8abdcc1d36f2188d19b174ec1",
"0x962632331cc5befe971e1c460f7a0c95ddd20c0ae5a45372c69ec2cdfc39c674",
"0x4ba72d6a1a5d49375dad3908fff0910a955ce416b43ded43b28f2bcedc3bde6d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

