function ajaxRequest(url){

    var movieRequest=new XMLHttpRequest();
  
    movieRequest.onload=function(){
    var responseJSON=JSON.parse(movieRequest.response);
    var imgurl=responseJSON.Poster;
    //Set the attribute for output div.
    var outputContainer= document.getElementById("output");
    outputContainer.setAttribute("height", "400px");
  
    //Set the attributes and class for image tag.
    document.getElementById("movie-poster").setAttribute("src", imgurl);
    document.getElementById("movie-poster").setAttribute("alt", "No Movie exist with this name...");
     document.getElementById("movie-poster").setAttribute("class", "output-content");
  
     //set the attribute for "movie-content-div" to show the information.
     var contdiv=document.getElementById("movie-content-div");
        contdiv.innerHTML="<p>" + "<b>Title: </b>" + responseJSON.Title + "</p> <p>" + "<b>Released Date: </b>" + responseJSON.Released + "</p> <p>" + "<b>Movie type: </b>" + responseJSON.Genre + "</p> <p>" + "<b>Director: </b>" + responseJSON.Director + "</p> <p>" + "<b>Actors: </b>" + responseJSON.Actors + "</p> <p>" + "<b>Language & Country: </b>" + responseJSON.Language + "&" + responseJSON.Country + "</p> <p>" + "<b>Awards: </b>" + responseJSON.Awards + "</p> <p>" + "<b>Movie Disclamer: </b>" + responseJSON.Plot + "</p>";
  
   var movieName=responseJSON.Title;
  
  
  //Adding favourite button.
  var createBTN= document.createElement("BUTTON");
  var btnText = document.createTextNode("Add to favourite");
  createBTN.classList.add("favourite1");
  createBTN.id="fav";
  createBTN.appendChild(btnText);
  contdiv.appendChild(createBTN);   
  
  
   //button Event listener
    createBTN.addEventListener("click", myFunction);
   function myFunction() {
   var list = document.createElement("li");
  var listText = document.createTextNode(responseJSON.Title);
  list.appendChild(listText);
    list.classList.add("favourite2");
   // list.id="listitem";
  
  
  document.getElementById("myList").appendChild(list);
  
   //Creating remove button
  var rbtn= document.createElement("BUTTON");
  var rtext = document.createTextNode("Remove");
  rbtn.id="remove";
  rbtn.appendChild(rtext);
  list.appendChild(rbtn);
   //creating favourite button 
  var favsearch= document.createElement("BUTTON");
  var stext = document.createTextNode("Search");
  rbtn.id="fsearch";
  favsearch.appendChild(stext);
  list.appendChild(favsearch);
  
   //favourite button event listener 
    favsearch.addEventListener('click', () => {
    var furl=  urlfunction(movieName);
    var temp= ajaxRequest(url); });
  
  //Remove button event listener
  rbtn.addEventListener('click', () => {
    list.remove();});
  
  }
    }//onload function closer.
  
      movieRequest.open('get', url, true);
      movieRequest.send();
     }//ajaxRequest fuction closer.
  
  
  //function to create url by using input
  function urlfunction(input){
  var keyword=input.replace(/\s/g, "+");
    //store the API in var "url".
    var url = "https://www.omdbapi.com/?t=" + keyword + "&apikey=1d63a59c";
      return url;
  }
  //Search function
  function searchFunction(){
  var input=document.getElementById("movie-name").value;
  var apiurl=urlfunction(input);
  var temp=ajaxRequest(apiurl);
  }