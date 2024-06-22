console.log("Hello from links.js");
const baseURL= "https://killerk1998.github.io/wdd230/";
const linksURL = "https://killerk1998.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
async function displayLinks(links){
   /* const ul = document.querySelector('ul');
    links.forEach(link => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', baseURL + link.href);
        a.textContent = link.label;
        li.appendChild(a);
        ul.appendChild(li);
}
  console.log(getLinks());
  */
}