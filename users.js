const accordion = document.getElementsByClassName("accHeader");
const container = document.getElementById("container");


async function dataUsers(){
    try{
        const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await fetchData.json();
        allUserinfo(usersData)
    } catch (error){
        console.log("Başaramadık.. Neyi başaramadın...", error);
    }
}


function allUserinfo(usersinfo){
    
    for(let i = 0; i < usersinfo.length; i++){
        const newElement = `
            <button class="accHeader d-flex justify-content-between align-items-center"><span class="userName fw-bold">${usersinfo[i].name}</span><i class="fa-solid fa-plus fa-xl menu-plus"></i></button>
            <div class="accordionBody py-4">
                    <div class="userinfo">
                        <span class="usericon ps-2"><i class="fa-solid fa-user fa-xl"></i></span>
    
                        <ul class="list-inline py-2">
                            <li class="fw-bold mb-2">User İnformation</li>
                            <li>ID : ${usersinfo[i].id}</li>
                            <li>Name : ${usersinfo[i].name}</li>
                            <li>Username : ${usersinfo[i].username}</li>
                        </ul>
                    </div>
                    <div class="useraddr">
                        <span class="addricon ps-2"><i class="fa-solid fa-address-book fa-xl"></i></span>
    
                        <ul class="list-inline py-2">
                            <li class="fw-bold mb-2">Address</li>
                            <li>Street : ${usersinfo[i].address.street}</li>
                            <li>Suite : ${usersinfo[i].address.suite}</li>
                            <li>City : ${usersinfo[i].address.city}</li>
                            <li>Zip Code : ${usersinfo[i].address.zipcode}</li>
                            <li>Location : ${usersinfo[i].address.geo.lat} - ${usersinfo[i].address.geo.lng}</li>
                        </ul>
                    </div>
                    <div class="usercompany">
                        <span class="compicon ps-2"><i class="fa-solid fa-building fa-xl"></i></span>
    
                        <ul class="list-inline py-2">
                            <li class="fw-bold mb-2">Company İnformation</li>
                            <li>Company Name: ${usersinfo[i].company.name}</li>
                            <li>${usersinfo[i].company.catchPhrase}</li>
                            <li>${usersinfo[i].company.bs}</li>
                        </ul>
                    </div>
                    <div class="usernet">
                        <span class="globeicon"><i class="fa-solid fa-globe fa-xl"></i></span>
    
                        <ul class="list-inline py-2">
                            <li class="fw-bold mb-2">Social İnformation</li>
                            <li>E-Mail :  ${usersinfo[i].email}</li>
                            <li>Phone Number : ${usersinfo[i].phone}</li>
                            <li>Website : ${usersinfo[i].website}</li>
                        </ul>
                    </div>
                    <div class="posts">
                        <a class="btn btn-primary" href="post/posts.html?userId=${usersinfo[i].id}">Gönderileri Görüntüle</a>
                    </div>
                </div>
        `;
    
        container.innerHTML += newElement;
    };

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
          this.classList.toggle("active");
      
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      };

}




dataUsers();

