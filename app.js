window.onload = () => {

    let selectorHtml = document.querySelector("#demo");
        
    let arrMyResult = [];

    let pronoun = ['the','our',];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let end = [".com", ".org" , ".es", ".it"]
    let myResult = ""

    for (let i=0; i < pronoun.length; i++){
        console.log("Indice1: ", i, " Palabra1: ", pronoun[i]);

        for (let j=0; j < adj.length; j++){
            console.log("Indice2: ", j, " Palabra2: ", adj[j]);

            for (let k=0; k < noun.length; k++){
                console.log("Indice3: ", k, " Palabra3: ", noun[k]);

                for (let l=0; l < end.length; l++){
                     console.log("Indice3: ", l, " Palabra3: ", end[l]);
                            
                     myResult = myResult.concat(pronoun[i],adj[j],noun[k],end[l])
                        console.log(myResult)
                        
                        arrMyResult.push(myResult);
                        myResult = " ";
                }
            }
        }
    }
    
    let containerChild = "";
    let text = "";
    for (let index = 0; index < arrMyResult.length; index++) {
        containerChild = document.createElement("li");
        text = document.createTextNode(arrMyResult[index]);
        selectorHtml.append(containerChild);
        containerChild.append(text);
        console.log(containerChild);
        console.log(text);
        console.log(arrMyResult[index]);
    }

    //selectorHtml.innerHTML = myResult;

}

