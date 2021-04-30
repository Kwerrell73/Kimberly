


// Create event Listeners for each button -Kellie W

var natureBtn = document.getElementById('natureBtn');

window.addEventListener('fetch', function (event) {
  console.log("fetch add event listener");
});

natureBtn.addEventListener('click', function (event) {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=waterfalls'
  )
    // Convert the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');
      // Create an '<img>' element
      var gifImg = document.createElement('img');
      // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
      gifImg.setAttribute('src', response.data.image_url);
      // Append the '<img>' element to the page
      responseContainerEl.appendChild(gifImg);
    });


});

unicornBtn.addEventListener('click', function (event) {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&tag=unicorns'
  )
    // Convert the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');
      // Create an '<img>' element
      var gifImg = document.createElement('img');

      // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
      gifImg.setAttribute('src', response.data.image_url);
      // Append the '<img>' element to the page
      responseContainerEl.appendChild(gifImg);
    });


});

rainbowBtn.addEventListener('click', function (event) {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=rainbows'
  )
    // Convert the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');
      // Create an '<img>' element
      var gifImg = document.createElement('img');
      // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
      gifImg.setAttribute('src', response.data.image_url);
      // Append the '<img>' element to the page
      responseContainerEl.appendChild(gifImg);
    });


});

surpriseBtn.addEventListener('click', function (event) {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=laughing'
  )
    // Convert the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');
      // Create an '<img>' element
      var gifImg = document.createElement('img');
      // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
      gifImg.setAttribute('src', response.data.image_url);
      // Append the '<img>' element to the page
      responseContainerEl.appendChild(gifImg);
    });


});

// get inspired event listener
inspireBtn.addEventListener('click', function (event) {

  fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
 
    
      var responseContainerEl = document.querySelector('#inspiration-container');

      //write code to clear response
    responseContainerEl.innerHTML = ""

      //use math.floor/random to select random quotes set to length of response
      var t = document.createTextNode(response[Math.floor(Math.random() * 1000) + 1].text);
      var inspireData = document.createElement('h4');
      inspireData.appendChild(t);
    
      document.getElementById("inspiration-container").appendChild(inspireData);
    });

    });


   // newsBtn.addEventListener('click', function (event) {
   //   fetch(
   //     'https://newsapi.org/v2/everything?q=goodnews?sources=techcrunch&apiKey=339f4c7a8857479985e37f549d8a0063'
   //   )
        // Convert the response to JSON
   //     .then(function (response) {
     //     return response.json();
       // })
    //    .then(function (response) {
          // Use 'querySelector' to get the ID of where the GIF will be displayed
      //    var responseContainerEl = document.querySelector('#news-container');
      //    responseContainerEl.innerHTML = ""
     //     var n = document.createTextNode(response.text);
     //    var newsData = document.createElement('h2');
     //    newsData.appendChild(n);
     //     document.getElementById("news-container").appendChild(newsData);
          
   //     });
  //    });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


