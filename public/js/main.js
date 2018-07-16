// JSON array for course_work info
var course_work = [{
        "imgsrc": "public/img/burger.png",
        "previewurl": "https://guarded-wave-64385.herokuapp.com/burger",
        "githuburl": "https://github.com/powusu6128/burger",
        "description": "App for reqesting for a burger which uses database setup with heroku",
        "skills": "Javascipt,JQuery, Nodejs, MySQL<br> HTML, CSS, Bootstrap"
    },
    {
        "imgsrc": "public/img/friendfinder.png",
        "previewurl": "https://murmuring-anchorage-69677.herokuapp.com/",
        "githuburl": "https://github.com/powusu6128/FriendFinder",
        "description": "App for finding friends who have similar interest",
        "skills": "HTML,Nodejs, CSS, Bootstrap, Javascript, JQuerry"
    },
    {
        "imgsrc": "public/img/bamazon.png",
        "previewurl": "#",
        "githuburl": "https://github.com/powusu6128/bamazon",
        "description": "Bamazon like amazon app whic uses MySQL to keep track of inventory management"+ 
                        "where one can stock producets check sales and monitor profit made on sales",
        "skills": "MySQL, JavaScript, Nodejs"
    },
    {
        "imgsrc": " ",
        "previewurl": "#",
        "githuburl": "https://github.com/powusu6128/liri-node-app",
        "description": "liri works like  siri/google but in this case contrained to text"+
                        "where one can get responses from twitter, guffys and spofigy",
        "skills": "HTML, CSS, Bootstrap, JavaScript, Nodejs"
    },
    {
        "imgsrc": "public/img/train.png",
        "previewurl": "#",
        "githuburl": "https://github.com/powusu6128/TrainSchedular",
        "description": 'Simple web app for transportation scheduling or task schedular',
        "skills": "Nodejs, jquery, javascript, HTML, CSS,boostrap"
    },
    {
        "imgsrc": "public/img/giphy.png",
        "previewurl": "",
        "githuburl": "https://github.com/powusu6128/Giphy_App",
        "description": 'Simple web app that displays ten giphys randomly based '+
                        'on any matching search term',
        "skills": "jquery, javascript, HTML, CSS,boostrap"
    },
    {
        "imgsrc": "public/img/trivia_game.png",
        "previewurl": "#",
        "githuburl": "https://github.com/powusu6128/TriviaGame",
        "description": 'Web app guessing game that ask player questions and time the player as well' +
            'if you player answer is corrrect picture will be display hence notify ' +
            'if wrong answer',
        "skills": "javascript, HTML, CSS,boostrap"
    },
    {
        "imgsrc": "public/img/crystal.png",
        "previewurl": "#",
        "githuburl": "https://github.com/powusu6128/week-4-game-1",
        "description": 'Web app game that display four crystals and a hidden values that the player have to guess',
        "skills": "javascript, HTML, CSS,boostrap"
    },

];

var projects = [{
        "imgsrc": "public/img/roadRover.png",
        "previewurl": "https://roadrover.herokuapp.com/",
        "githuburl": "https://github.com/aarontkennedy/Travel-Route-Itinerary",
        "description": "This group project.It's purpose is for road trip users can plan a trip ane insert waypoints" +
            "profile and rate some other users news and commit on it",
        "skills": "Javascipt,JQuery, Nodejs, MySQL,heroku deployed<br> HTML, CSS, Bootstrap"
    },

    {
        "imgsrc": "public/img/cbcwork.png",
        "previewurl": "https://cbcwork.herokuapp.com/",
        "githuburl": "https://github.com/tarose412/CBCwork",
        "description": "This is a group project. The app is link a newsfeed that people can login, create account using gravatar" +
            "profile and rate some other users news and commit on it",
        "skills": "Javascipt,JQuery, Nodejs, MySQL,heroku deployed<br> HTML, CSS, Bootstrap"
    }
];



for (var i = 0; i < course_work.length; i++) {
    console.log(course_work[i]['description']);
    $("#courseworkcards").append(
        '<div class="col-lg-4">' +
        '<div class="card mb-4 box-shadow">' +
        `<a href="${course_work[i]["previewurl"]}" target="_blank">` +
        `<img class="card-img-top img-fluid img-thumbnail" src="${course_work[i]["imgsrc"]}" alt="Project image"></a>` +
        '<div class="card-body">' +
        '<p class="card-text">' + course_work[i]["description"] + '</p>' +
        '<div class="d-flex flex-wrap flex-row">' +
        '<div class="btn-group p-2">' +
        `<a href="${course_work[i]["previewurl"]}" class="btn btn-sm btn-info" target="_blank">View Project</a>` +
        '</div>' +
        '<div class="btn-group p-2">' +
        `<a href="${course_work[i]["githuburl"]}" class="btn btn-sm btn-dark" target="_blank">` +
        'View Source <i class="fab fa-github"></i></a>' +
        '</div>' +
        '<div class="d-flex flex-row-reverse skills">' +
        '<small class="text-muted">' + course_work[i]["skills"] + '</small>' +
        '</div></div></div></div>'
    );
};

for (var i = 0; i < projects.length; i++) {
    $("#projectworkcards").append(
        '<div class="col-lg-6">' +
        '<div class="card mb-6 box-shadow">' +
        `<a href="${projects[i]["previewurl"]}" target="_blank">` +
        `<img class="card-img-top img-fluid img-thumbnail" src="${projects[i]["imgsrc"]}" alt="Project image"></a>` +
        '<div class="card-body">' +
        '<p class="card-text">' + projects[i]["description"] + '</p>' +
        '<div class="d-flex flex-wrap flex-row">' +
        '<div class="btn-group p-2">' +
        `<a href="${projects[i]["previewurl"]}" class="btn btn-sm btn-info" target="_blank">View Project</a>` +
        '</div>' +
        '<div class="btn-group p-2">' +
        `<a href="${projects[i]["githuburl"]}" class="btn btn-sm btn-dark" target="_blank">` +
        'View Source <i class="fab fa-github"></i></a>' +
        '</div>' +
        '<div class="d-flex flex-row-reverse skills">' +
        '<small class="text-muted">' + projects[i]["skills"] + '</small>' +
        '</div></div></div></div>'
    );
}

// Set project card description with same height
var largest = 0; //start with 0
$(".card-text").each(function () { //loop through each card paragraph
    var findHeight = $(this).height(); //find the height
    if (findHeight > largest) { //see if this height is greater than "largest" height
        largest = findHeight; //if it is greater, set largest height to this one 
    }
});
$(".card-text").css({
    "height": largest + "px"
});

// Set project card skills with same height
var largestskill = 0; //start with 0
$(".skills").each(function () { //loop through each card paragraph
    var findHeight = $(this).height(); //find the height
    if (findHeight > largestskill) { //see if this height is greater than "largest" height
        largestskill = findHeight; //if it is greater, set largest height to this one 
    }
});
$(".skills").css({
    "height": largestskill + "px"
});

$(function () {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text
        $(formMessages).empty();
        $(formMessages).removeClass('alert-danger');

        var formData = form.serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData,
                dataType: 'json',
                encode: true
            })
            .done(function (data) {
                if (!data.success) {

                    $(".submit").addClass("hide-loading");
                    $(".failed").addClass("finish");
                    setTimeout(function () {
                        $(".submit").removeClass("loading");
                        $(".submit").removeClass("hide-loading");
                        $(".done").removeClass("finish");
                        $(".failed").removeClass("finish");
                    }, 2000);
                    $(formMessages).removeClass('alert-success');
                    $(formMessages).addClass('alert-danger');

                    // Set the message text.
                    if (data.errors !== '') {
                        $(formMessages).text(data.errors.reason);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }

                    // handle errors for name ---------------
                    if (data.errors.name) {
                        $('#name-group').addClass('has-error'); // add the error class to show red input
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for email ---------------
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); // add the error class to show red input
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for message ---------------
                    if (data.errors.message) {
                        $('#message-group').addClass('has-error'); // add the error class to show red input
                        $('#message-group').append('<div class="help-block">' + data.errors.message + '</div>'); // add the actual error message under our input
                    }

                } else {

                    // Make sure that the formMessages div has the 'success' class.
                    $(".submit").addClass("hide-loading");
                    $(".done").addClass("finish");
                    setTimeout(function () {
                        $(".submit").removeClass("loading");
                        $(".submit").removeClass("hide-loading");
                        $(".done").removeClass("finish");
                        $(".failed").removeClass("finish");
                    }, 2000);
                    $(formMessages).removeClass('alert-danger');
                    $(formMessages).addClass('alert-success');

                    // Set the message text.
                    $(formMessages).text(data.message);

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');

                }
            })
            .fail(function (data) {
                // show any errors
                console.log(data);
            });
    });
});


$(document).ready(function () {
    $(".submit").click(function () {
        $('#ajax-contact').submit();
        $(".submit").addClass("loading");
    })
});