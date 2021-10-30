/* Filename: app.js
    Author's name: Prashant Sharma
    Student ID: 301175737
    Web App Name: Come229008-F2021-Midterm-301175737 */

console.log('Goes to the client side.');

//Deletion confirmation
if(getTitle == "Book List") 
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault(); //preventing deletion in case of no confirmation
            }
        });
    }
}