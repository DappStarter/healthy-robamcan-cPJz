require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note situate unable gesture help success target'; 
let testAccounts = [
"0xdc6d336862f8e035b58007ed5a865af9c05feb5fdcd001ec738e3abd3bc86f9e",
"0x575ce05e7a75b0470a95a7831e630990fe6e72be6994d2cad119a10ee650f467",
"0x676a8b364971a45d35edc7ed9d98c537278de34ca9f90b61437264a2301d0c59",
"0x660134423c741a4d78c8447a24fabc8748a6478089061cfcfcdedb12bd057988",
"0xd452c536448c71c460b84a31068ad2d9eb6efb1cf58d623a2262e06e5943edc9",
"0xda3de286035af0e34c8e78e5eb3b56466e68bb9be49315bc0817b9a06b1c420b",
"0x8da2a971ddfe193482f478014e122c21fcf11f727e0cbb4d3f5e65edca2dab51",
"0x5cc81dbe1a7ed626fa223fd08bc7c8b9ea1bdb728373e39026677be2cbd3d15b",
"0x96ab8d711c2e322793f2c58b4be09e58add0605ef1a5c66062f5903d1ecbdc66",
"0xd3df3aaec76810deb0d49d56d76bb306e4b9a971575978c1ec7eed652b89ae74"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

