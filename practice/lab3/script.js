const input=document.getElementById("iteminput");
const addbutton=document.getElementById("addbut");
const list=document.getElementById("shoplist");
function additem(){
    const itemText = input.value.trim();
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent = itemText;
    const deletbutton=document.createElement("button");
    deletbutton.textContent = "Delete";
    deletbutton.className = "delete-btn";
    deletbutton.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deletbutton);

        // Append li to ul
    list.appendChild(li);
}
addbutton.addEventListener("click",additem);