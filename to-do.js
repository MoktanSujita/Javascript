const arr=[];
function array()
{
   const a=document.querySelector("#entry-field");
    console.log(a);
    if(a.value!="")
    {
        arr.push(a.value);
        console.log(arr);
    }
    a.value="";
    renderTasks();
}