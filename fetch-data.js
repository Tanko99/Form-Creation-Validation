// asynchronously fetch user data and display on a web page

async function fetchUserData(){
    
        const  apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            // emptying the message
            dataContainer.innerHTML ='';
            const userList = document.createElement('ul');

            // looping through the users list
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
            dataContainer.appendXChild(userList);
        } catch(error){
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data';
            console.error(error);
        }
    
}
document.addEventListener('DOMContentLoaded', fetchUserData);
