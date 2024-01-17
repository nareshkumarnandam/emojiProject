


function searchEmoji() {
    let input = document.getElementById("search_bar").value;
    displayResult(input);
}



function displayResult(searchQuery = ""){

    let filteredResult = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }
        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    })


    let parent = document.getElementById("emoji_result");

    parent.innerHTML = "";

    filteredResult.forEach((e)=>{
        let newRow = document.createElement("tr");
        let newEmoji = document.createElement("td");
        let newAliases = document.createElement("td");
        let newDescription = document.createElement("td");

        newEmoji.innerText = e.emoji;
        newAliases.innerText = e.aliases;
        newDescription.innerText = e.description;

        newRow.classList.add("rows");

        newRow.appendChild(newEmoji);
        newRow.appendChild(newAliases);
        newRow.appendChild(newDescription);

        parent.appendChild(newRow);
    })
}


document.getElementById("search_bar").addEventListener("keyup" , searchEmoji );



window.onload = () => displayResult();