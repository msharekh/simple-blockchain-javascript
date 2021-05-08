

var SHA256 = require("crypto-js/sha256");
class Block{
    constructor(index, timestamp, data, previous){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previous;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        //var hash = CryptoJS.MD5("Message");
        return SHA256(
            this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)
        ).toString();
    }
}

class Blockchain{
    constructor() {
        this.chain=[this.createGENESblock()];        
    }

    createGENESblock(){
        return new Block(0,"01/01/20219","GENES Block","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock  = this.chain[i];
            const prevBlock  = this.chain[i-1];

            if (currentBlock.hash!==currentBlock.calculateHash()) {
                return false;
            }
            if (prevBlock.hash!==prevBlock.calculateHash()) {
                return false;
            }
            
        }

        return true;
    }

} 

let mshCoin = new Blockchain();
    mshCoin.addBlock(new Block(1,"15/04/2021","Block 1",{amount:4}));
    mshCoin.addBlock(new Block(2,"22/05/2021","Block 12",{amount:5}));

    console.log('is block chain valid?', mshCoin.isChainValid());
    //console.log(JSON.stringify(mshCoin,null,4));

    mshCoin.chain[1].data = {amount:555}
    console.log('is block chain valid?', mshCoin.isChainValid());
