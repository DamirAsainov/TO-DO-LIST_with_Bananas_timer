//send message by stpm 
function sendEmail() {
  if(document.getElementById("phone").value)
  Email.send({
    SecureToken : "baf249c5-602a-4b80-922d-d22330befd15",
    To : 'dense.neer@gmail.com',
    From: document.getElementById("email").value,
    Subject: "Some message",
    Body: "Name: " + document.getElementById("name") + "<br>Phone: " + document.getElementById("phone") + "<br>Message: " + document.getElementById("message")
  }).then(
    message => alert(message)
  );
}