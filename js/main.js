const BASE_URL = 'https://api.github.com/users/gavinfigueruelo';

const generateAside = (data) => {
  const source = document.querySelector("#profile").innerHTML;
  const template = Handlebars.compile(source);
  // const context = data;
  const html = template(data);

  document.querySelector(".user").innerHTML = html;
}

fetch(`${BASE_URL}`)
  .then(response => response.json())
  .then(data => generateAside(data));

// fetch the info for repositories
const generateRep = (data) => {
  const source = document.getElementById("repositories").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".repos").innerHTML = html;
}
fetch(`${BASE_URL}/repos`)
  .then(response => response.json())
  .then(data => generateRep({
    rep: data
  }));

//fethcing the organizations and turning it into an array
  const generateOrgs = (data) => {
  const source = document.getElementById("orgs").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".orgs").innerHTML = html;
}
fetch(`${BASE_URL}/orgs`)
  .then(response => response.json())
  .then(data => generateOrgs({orgs:data}));
