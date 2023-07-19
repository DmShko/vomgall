export { resultBack };

class Pass {

    static VOMBAT_PASSWORD = "vombat";

    constructor() {
        this.pass = Pass.VOMBAT_PASSWORD;
    }
    
    get compPass() {
         return this.pass;
    }

}

const keyPass = new Pass();

let resultBack = keyPass.compPass;
