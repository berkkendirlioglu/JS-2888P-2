const accordion = document.getElementsByClassName("accHeader");
const container = document.getElementById("container");

async function usersPosts(){
    try{
        const includePost = await fetch("https://jsonplaceholder.typicode.com/posts");
        const allPosts = await includePost.json();
        allUsersPosts(allPosts);
        
    } catch (error){
        console.log("Başaramadık.. Neyi başaramadın...", error);
    }
}


function allUsersPosts(posts){
        const urlValue = new URLSearchParams(window.location.search);
        const userId = urlValue.get('userId');
        const resultPosts = posts.filter(items => items.userId === +userId);

        const backToUser = `
            <div class="d-flex justify-content-center align-items-center mb-4">
                <a class="btn btn-primary" href="../index.html">Kullanıcılara Dön</a>
            </div>
        `;
        container.innerHTML += backToUser;

        if(resultPosts == ""){
            const filterArg = prompt("Hangi ID'li kullanıcının postlarını görmek istiyorsunuz?")
            const homeFilter = posts.filter(data => data.userId === +filterArg);
            if(filterArg <= 10){
                for(let i = 0; i < homeFilter.length; i++){
                    const newElement = `
                        <button class="accHeader d-flex justify-content-between align-items-center"><span class="userName fw-bold">${i}</span><i class="fa-solid fa-plus fa-xl menu-plus"></i></button>
                        <div class="accordionBody py-4">
                                <div class="user-posts-title">
                                    <p class="text-muted fs-4">Title:</p>
                                    <h5 class="fw-bold text-uppercase">${homeFilter[i].title}</h5>
                                </div>
                                <hr>
                                <div class="user-posts-body">
                                    <p class="text-muted fs-4">Posts:</p>
                                    <p>${homeFilter[i].body}</p>
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
            }else{
                alert("Lütfen geçerli bir sayı giriniz.");
                return;
            }
            
        }else{
            for(let i = 0; i < resultPosts.length; i++){
                const newElement = `
                    <button class="accHeader d-flex justify-content-between align-items-center"><span class="userName fw-bold">${resultPosts[i].userId}</span><i class="fa-solid fa-plus fa-xl menu-plus"></i></button>
                    <div class="accordionBody py-4">
                            <div class="user-posts-title">
                                <p class="text-muted fs-4">Title:</p>
                                <h5 class="fw-bold text-uppercase">${resultPosts[i].title}</h5>
                            </div>
                            <hr>
                            <div class="user-posts-body">
                                <p class="text-muted fs-4">Posts:</p>
                                <p>${resultPosts[i].body}</p>
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
    };

usersPosts();
