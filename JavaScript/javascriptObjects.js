var houseKeeper1 = {
    yearsOfExperience :12,
    name: "Jane",
    cleaningRepertoire: ["bathroom","lobby","bedroom"]
   


}


console.log(houseKeeper1.name);


function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function (){
        console.log("cleaning in progress")
    }
}

var bellBoy1 = new BellBoy ("Timmy", 19, true, ["French","English"])

console.log(bellBoy1);