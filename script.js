let inputBar = document.getElementById("input-bar");
let populate = document.getElementById("populate");

function handleAddTask() {
    let image = document.getElementById("image");
    if(image){
        image.remove();
    }
    if (inputBar.value === "") {
        alert("Thora sa madarchod hai kya kuch to likh add karne ko");
    } else {
        let newElement = document.createElement("div");
        newElement.className = "task";
        newElement.textContent = inputBar.value;

        let newEditIcon = document.createElement("span");
        newEditIcon.innerHTML = '<i class="fas fa-edit edit-icon"></i>';
        newEditIcon.addEventListener("click",()=>{
            
            let editInput=document.createElement("input");
            editInput.className="edit-input";
            editInput.value = newElement.textContent;
            newElement.textContent="";
            newElement.appendChild(editInput);
            newElement.appendChild(conta);
            editInput.focus();

            const saveChanges = () => {
                newElement.textContent = editInput.value;
                newElement.appendChild(conta);  
            };

            editInput.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    saveChanges();
                }
            });
        })
        newElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                newElement.contentEditable = "false";
                newElement.classList.remove("editable");
                event.preventDefault();
                
            }
        });

        let newDelIcon = document.createElement("span");
        newDelIcon.className = "delIcon";
        newDelIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newDelIcon.addEventListener("click", function() {
            newElement.remove();
        });
        
        let conta = document.createElement("div");
        conta.className = "conta";
        conta.appendChild(newEditIcon);
        conta.appendChild(newDelIcon);

        newElement.appendChild(conta);
        populate.appendChild(newElement);
        inputBar.value = "";
    }
}
inputBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleAddTask();
    }
});