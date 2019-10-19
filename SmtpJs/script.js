function Send()
{
  console.log("Yeh");
  // This doesnt work right now because the password is incorrect. You can follow instruction at SMTPJS.com. It also didnt work for me through Codepen.io, I had to download the project, and it worked when I opened the index.html file on my local computer
  Email.send({
          Host : "smtp.elasticemail.com",
          Username : "coolsam92@gmail.com",
          Password : "2a6d4704b-810e-4a9a-a88c-76406974aef1",
          To : 'coolsam92@gmail.com',
          From : "coolsam92@gmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      })
    .then(message => alert(message));

}