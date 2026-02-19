function showFilter(){

    let filter = document.getElementById("filterContent");
    let newContent = document.getElementById("newContent");


    filter.style.display = "block";
    newContent.style.display = "none";
}

function showAddNew(){
    let filter = document.getElementById("filterContent");
    let newContent = document.getElementById("newContent");

    filter.style.display = "none";
    newContent.style.display = "block";
}

function filterArticles(){

    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");



    for(let i = 0; i < articles.length; i++){
        let article = articles[i];

        if(article.classList.contains("opinion")){
            article.style.display = showOpinion ? "block" : "none";
        }

        else if(article.classList.contains("recipe")){
            article.style.display = showRecipe ? "block" : "none";
        }

        else if(article.classList.contains("update")){
            article.style.display = showUpdate ? "block" : "none";
        }





    }
}





function addNewArticle() {

    let title = document.getElementById("inputHeader").value.trim();
    let text = document.getElementById("inputArticle").value.trim();

    let typeValue = "";
    if (document.getElementById("opinionRadio").checked) typeValue = "opinion";
    else if (document.getElementById("recipeRadio").checked) typeValue = "recipe";
    else if (document.getElementById("lifeRadio").checked) typeValue = "update";

    let article = document.createElement("article");
    article.classList.add(typeValue);


    let marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = typeValue.charAt(0).toUpperCase() + typeValue.slice(1);

    let h2 = document.createElement("h2");
    h2.textContent = title;


    let p = document.createElement("p");
    p.textContent = text;

 
    let readMore = document.createElement("p");
    let link = document.createElement("a");

    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    readMore.appendChild(link);


    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(readMore);


    let articleList = document.getElementById("articleList");
    articleList.insertBefore(article, articleList.firstChild);


    document.getElementById("newContent").reset();

   
    filterArticles();
}
