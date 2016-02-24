function emailCountHeader(count) {
    return "<h1 id='previewHeader'>Email (<span id='counter'>"+count+"</span>)</h1>";
}



function makeThePreview(subject, body, recipients) {
    var resultTemplate = "";
    resultTemplate += emailCountHeader(recipients.length);
    recipients.map(x => {
        var recipient = {
            first : x[0],
            last : x[1],
            email : x[2]
        };
        body = body.replace(/(?:\r\n|\r|\n)/g, '<br>');
        var tempEmail = emailChunk(recipient);

        while (tempEmail.includes("{first}")) {
            tempEmail = tempEmail.replace("{first}", recipient.first);
        }
        while (tempEmail.includes("{last}")) {
            tempEmail = tempEmail.replace("{last}", recipient.last);
        }
        while (tempEmail.includes("{email}")) {
            tempEmail = tempEmail.replace("{email}", recipient.email);
        }

        resultTemplate += tempEmail;
    })
    return resultTemplate;

    function emailChunk(recipient) {
        var emailBox = "<div class='panel panel-success emailChunk'>"
  +"<div class='panel-heading'>"
    +"<a class='kill right'><span class='glyphicon glyphicon-remove'></span></a>"
  +"</div>"
  +"<div class='panel-body'>"
    +"<p><strong>To:  </strong>"+recipient.first + " " + recipient.last+"  ("+recipient.email+")</p>"
            +"<p><strong>Subject:  </strong>"+subject+"</p>"
            +"<br>"
            +"<p>"+body+"</p>"
  +"</div>"
+"</div>"
        return emailBox;
    }
}

// "<div class='panel panel-primary emailChunk'>"
//   +"<div class='panel-heading'>"
//     +"<a href='#' class='kill right'><span class='glyphicon glyphicon-remove'></span></a>"
//   +"</div>"
//   +"<div class='panel-body'>"
//     +"<p><strong>To:  </strong>"+recipient.first + " " + recipient.last+"  ("+recipient.email+")</p>"
//             +"<p><strong>Subject:  </strong>"+subject+"</p>"
//             +"<br>"
//             +"<p>"+body+"</p>"
//   +"</div>"
// +"</div>"






module.exports = makeThePreview;