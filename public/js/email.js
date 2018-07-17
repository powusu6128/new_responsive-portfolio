

//update this with your $form selector
var form_id = "ajax-contact";

var data = {
    "access_token": "{q8gr4dlxbc55dedhx1z1eevu }" // sent after you sign up
};

function onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = $("#submit" + form_id + " [name='send']");

function send() {
    sendButton.val('Sending…');
    sendButton.prop('disabled', true);
    var name = $("#name" + form_id + "[name='name']").val();
    var email = $("#email" + form_id + "[name='email']").val();
    var message = $("#message" + form_id + "[name='message']").val();
    data['name'] = name;
    data['email']= email;
    data['message'] = message;

    $.post('https://postmail.invotes.com/send',
        data
        /*onSuccess*/
    ).fail(onError);

    return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function (event) {
    event.preventDefault();
});

