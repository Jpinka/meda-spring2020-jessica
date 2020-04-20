$(document).ready(function () {


    //$("#username").val("Hello I was set by jQuery!");

    $("#submit-button").click(function (event) {
        event.preventDefault();

        //console.log("Clicked!");

        var username = $("#username").val();
        //console.log=("Username " + username)


        var password = $("#password").val();
        //console.log=("Password " + password);



    if (username == "admin") {
        $("#messages").html("<p>Welcome Administrator</p>");
        //console.log("Welcome Administrator");
    

    if (password == "123456") {
        $("#messages").html("<p>Login Failed! Wong Password!</p>");
        //console.log("Administrator successfully logged in!");

    } else {
        $("#messages".html("<p>Administrator Successfully logged in!</p>");
        console.log("Login failed! Wrong username or password!");

    } else {
        console.log("Welcome " + username + "!");                                                                              
    }


    });
});