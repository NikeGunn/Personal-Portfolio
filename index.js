function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceId = "service_63bemj3";
    const templateId = "template_nxalxyo";
  
    emailjs.send(serviceId, templateId, params)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message was sent successfully!");
      }, function(error) {
        console.log("FAILED...", error);
        alert("Oops! There was a problem sending your message. Please try again.");
      });
  }
  
       
       
       
       
       
    //    function sendMail(){
    //         var params = {
    //           name:document.getElementById("name").value,
    //           email:document.getElementById("email").value,
    //           message:document.getElementById("message").value,
    //         };
    //         const serviceId = "service_63bemj3";
    //         const templateId = "template_nxalxyo";

    //         emailjs
    //         .send(serviceId,templateId,params)
    //         .then(
    //           res => {
    //             document.getElementById("name").value("");
    //             document.getElementById("email").value("");
    //             document.getElementById("message").value("");
    //             console.log(res);
    //             alert("Your message sent successfully");
    //           })
    //         .catch(err=>console.log(err))

    //     }