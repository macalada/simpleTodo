let todo =[];
let userInput;
console.log(todo)
while(userInput!='quit' && userInput!='q'){
    userInput = prompt("What would you like to do?");
    if(userInput=='new'){
        todo.push(prompt("what would you like to add to the list?"));
    }else if(userInput=="list"){
        for(let i=0; i<todo.length;i++){
            console.log(`${i} :${todo[i]}`);
        }
    }else if(userInput=="delete"){
        let wantDelete = prompt('which index you want to delete?')
        console.log(`You deleted index of ${wantDelete} :${todo[parseInt(wantDelete)]}`)
        todo.splice(parseInt(wantDelete),1)
        
    }

}

console.log("OK, You quit the app!")
