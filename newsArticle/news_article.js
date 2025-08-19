var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var author = document.createElement('p');
    author.textContent = 'Author: ' + article.author;

    var published_date = document.createElement('p');
    published_date.textContent = 'published date:' + article.published_date;

    var source = document.createElement('p');
    source.textContent = 'source: ' + article.source;

    var summary = document.createElement('p');
    summary.textContent = 'Summary:' + article.summary;

    var content = document.createElement('p');
    content.textContent = 'Content: ' + article.content;

    var tags = document.createElement('ul');
    article.tags.forEach(function(tag){
        var listItem = document.createElement('li');
        listItem.textContent = tag;
        tags.appendChild(listItem);
        });
    
    var location = document.createElement('p');
    location.textContent = 'Location: ' + article.location;

    const image_url = document.createElement("img");
    image_url.src = article.image_url;
    image_url.alt = article.title;
    
    articleDiv.appendChild(title);
    articleDiv.appendChild(author);
    articleDiv.appendChild(published_date);
    articleDiv.appendChild(source);
    articleDiv.appendChild(summary);
    articleDiv.appendChild(content);
    articleDiv.appendChild(tags);
    articleDiv.appendChild(location);
    articleDiv.appendChild(image_url);

    articlesDiv.appendChild(articleDiv);
  });
};
  xhr.send();