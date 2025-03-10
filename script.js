function toggleMenu() {
    document.getElementById('menu-list').classList.toggle('active');
}


/*sources for learning how to https://www.youtube.com/watch?v=Oage6H4GX2o, https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ */

function loadJsonData() {
    const loadJsonBtn = document.getElementById("load-json-btn");
    if (!loadJsonBtn) return;

    loadJsonBtn.addEventListener("click", function () {
        fetch('cvdata.json')
            .then(response => response.json())
            .then(data => {
                displayJsonData(data);
            })
            .catch(error => console.error('Error loading the JSON data:', error));
    });
}

loadJsonData();

function displayJsonData(data) {
    const displayDiv = document.getElementById("json-display");
    if (!displayJsonData) return;

    // Clear previous content
    displayDiv.innerHTML = "";


    for (let section in data) {
        if (data.hasOwnProperty(section)) {
            const title = data[section].title;
            const items = data[section].items;

        
            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = title;
            sectionTitle.className = "sectionTitle";
            displayDiv.appendChild(sectionTitle);

           
            const list = document.createElement("ul");
            items.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                listItem.className = "sectionItem";
                list.appendChild(listItem);
            });

        
            displayDiv.appendChild(list);
        }
    }
}

/* fetch github projects */
//portfolio page  javascript 
const githubUsername = 'bytodals';

const gallery = document.getElementById("gallery");

if (gallery) {
    const loadingMessage = document.getElementById("loadingMessage");

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data from GitHub");
            }
            return response.json();
        })
        .then(data => {
         
            if (!loadingMessage) {
                loadingMessage.style.display = "none";
            }

           
            data.forEach(project => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                const projectLink = document.createElement("a");
                projectLink.href = project.html_url;
                projectLink.target = "_blank";
                projectLink.classList.add("title");
                projectLink.innerText = project.name;

              
                const projectDescription = document.createElement("p");
                projectDescription.innerText = project.description || "No description available";

               
                projectDiv.appendChild(projectLink);
                projectDiv.appendChild(projectDescription);
                gallery.appendChild(projectDiv);
            });
        })
        .catch(error => {

          
            console.error("Error fetching GitHub projects:", error);
        });
}

// I got the base of the codes from my sources but rewrote and changed it to fit my project other sources than mentioned above: https://www.w3schools.com/jsref/prop_html_innerhtml.asp, https://www.json.org/json-en.html, w3schools in general, https://www.w3schools.com/js/js_functions.asp, https://www.youtube.com/watch?v=YiOlaiscqDY */