//Written by Adrian Boisclair
function getData() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
        function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {     //If response is Okay
                var myArr = JSON.parse(xmlhttp.responseText);           //Parse response to JSON data
                myFunction(myArr);                                      //Call Function to write to document
            } else {
                document.getElementById('myDiv').innerHTML = "<strong>Waiting for server response...</strong>"; // Set myDiv to display waiting message
            }
        };
    xmlhttp.open("GET", "https://www.googleapis.com/blogger/v3/blogs/5494086079662789679/posts?key=AIzaSyDhWlM0FPbDaKtMbjL-mW8kfWsqZ5Mz6nE", true);
    xmlhttp.send();
    function myFunction(arr) {
        //First we need to set the variables
        var i, data, name, title, content, date;
        data = arr; //rename arr to data for use.
        var myDiv = document.getElementById("myDiv"); //init div selector
        myDiv.innerHTML = '';
        for (i = 0; i < data.items.length; i++) {  //This is a for loop.
            console.log(data.items[i]); //This is a log to the console
            name = data.items[i].author.displayName; //set some variables to actual data
            title = data.items[i].title;
            content = data.items[i].content;
            date = data.items[i].published;
            myDiv.innerHTML += '<div class="blog-entry" id="blog-entry-' + i + '"><div class="title">' + title +
            '</div><div>' + content + '</div><div id="name">Posted By: ' + name + '</div><div id="datePosted">' + date + '</div>'; //Turn the data into readable HTML then put it on the page.
        }
    }
}