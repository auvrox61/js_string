function evaluator(password){
    let rating=0;

    let passwordSize=password.length>=8;
    let hasUpperC=/[A-Z]/.test(password);
    let hasLowerC=/[a-z]/.test(password);
    let hasNumbers=/[0-9]/.test(password);
    let hasSymbols=/[^A-Za-z0-9]/.test(password);

    if(passwordSize){
        rating++;
    }
    if(hasUpperC){
        rating++;
    }
    if(hasLowerC){
        rating++;
    }
    if(hasNumbers){
        rating++;
    }
    if(hasSymbols){
        rating++;
    }

    switch(rating){
        case 5:
            return "Very Strong";
        case 4:
            return "Strong";
        case 3:
            return "Moderate";
        case 2:
            return "Weak";
        case 1:
            return "Very Weak";
        default:
            return "Hackers Will Attack You Very Soon";
    }
}

const readline=require('readline-sync');

let password=readline.question("Enter your Password and Check its Strength : ");
let result=evaluator(password);
console.log(`Password Rating : ${result}`);
