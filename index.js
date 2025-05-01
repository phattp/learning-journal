import blogArray from "./data.js";

function renderBlogs() {
  const articleContainer = document.getElementById("article-container");
  articleContainer.innerHTML = "";

  blogArray.forEach((blog) => {
    const article = document.createElement("article");

    const articleImg = document.createElement("img");
    articleImg.classList.add("article-img");
    articleImg.src = blog.image;
    articleImg.alt = blog.altText;

    const articleTime = document.createElement("time");
    articleTime.classList.add("article-time");
    articleTime.dateTime = blog.date;
    const date = new Date(blog.date);
    const formattedDate = date
      .toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase();
    articleTime.textContent = formattedDate;

    const articleName = document.createElement("h2");
    articleName.textContent = blog.name;

    const articleDesc = document.createElement("p");
    articleDesc.classList.add("article-p");
    articleDesc.textContent = blog.desc;

    article.appendChild(articleImg);
    article.appendChild(articleTime);
    article.appendChild(articleName);
    article.appendChild(articleDesc);

    articleContainer.appendChild(article);
  });
}

renderBlogs();
