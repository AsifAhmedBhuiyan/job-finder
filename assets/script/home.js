'use strict';

const userList = document.getElementById('user-list');

// Fetch the data from the API
fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(data => {
    // Loop through the results and create a list item for each user
    data.results.forEach(user => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const name = document.createElement('p');
      const city = document.createElement('p');

      img.src = user.picture.thumbnail;
      name.textContent = `${user.name.first} ${user.name.last}, ${user.location.city} `;
      
      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(city);
      userList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

  class User {
    #id;
    #name;
    #userName;
    #email;
  
    constructor(id, name, userName, email) {
      this.#id = id;
      this.#name = name;
      this.#userName = userName;
      this.#email = email;
    }
  
    get id() {
      return this.#id;
    }
  
    get name() {
      return this.#name;
    }
  
    get userName() {
      return this.#userName;
    }
  
    get email() {
      return this.#email;
    }
  
    getInfo() {
      return `Name: ${this.#name}\nUsername: ${this.#userName}\nEmail: ${this.#email}`;
    }
  }
  
  class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;
  
    constructor(id, name, userName, email, pages, groups, canMonetize) {
      super(id, name, userName, email);
      this.#pages = pages;
      this.#groups = groups;
      this.#canMonetize = canMonetize;
    }
  
    get pages() {
      return this.#pages;
    }
  
    get groups() {
      return this.#groups;
    }
  
    get canMonetize() {
      return this.#canMonetize;
    }
  
    getInfo() {
      return `${super.getInfo()}\nPages: ${this.#pages}\nGroups: ${this.#groups}\nCan Monetize: ${this.#canMonetize}`;
    }
  }
  
  const user = new Subscriber(1, 'Asif Ahmed', 'asifahmed', 'asifahmed@email.com', ['Page 1', 'Page 2'], ['Group 1', 'Group 2'], true);
  
  
  const postsSection = document.querySelector('.posts');
  
  function createPostElement(user, text, imageUrl, date) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    const headerElement = document.createElement('div');
    headerElement.classList.add('post-header');
    postElement.appendChild(headerElement);
  
    const profilePicElement = document.createElement('img');
    profilePicElement.src = './assets/image/Asif.jpg'; 
    profilePicElement.alt = user.name;
    headerElement.appendChild(profilePicElement);
  
    const userInfoElement = document.createElement('div');
    userInfoElement.classList.add('post-user-info');
    headerElement.appendChild(userInfoElement);
    
    const fullNameElement = document.createElement('span');
    fullNameElement.textContent = user.name;
    userInfoElement.appendChild(fullNameElement);
    fullNameElement.style.marginRight = '220px';
  
    const dateElement = document.createElement('span');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = date.toLocaleDateString('en-US', options);
    userInfoElement.appendChild(dateElement);
  
    const contentElement = document.createElement('div');
    contentElement.classList.add('post-content');
    postElement.appendChild(contentElement);
  
    const textElement = document.createElement('p');
    textElement.textContent = text;
    contentElement.appendChild(textElement);
  
    if (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      contentElement.appendChild(imageElement);
    }
  
    return postElement;
  }
  
  const postForm = document.querySelector('#post-form');
  postForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const postInput = postForm.querySelector('textarea[name="post-text"]');
    const postText = postInput.value.trim();
    if (postText !== '') {
      // Create a new post element with the post text
      const newPostElement = createPostElement(user, postText, null, new Date());
      // Add the new post element to the posts section
      postsSection.prepend(newPostElement);
      // Reset the form input value
      postInput.value = '';
    }
  });


