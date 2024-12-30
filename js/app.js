let processSubmissionThanks = document.getElementById("process-submission-thanks");
let contactUsSubmissionThanks = document.getElementById("contactus-submission-thanks")
let processInputs = document.getElementById("process-inputs-div");
let contactUsInputFields = document.getElementById("contactus-input-fields");



function processThankYou() {
    processSubmissionThanks.classList.remove("hidden");
    processInputs.classList.add("hidden");
}

function contactUsThankYou() {
    contactUsSubmissionThanks.classList.remove("hidden");
    contactUsInputFields.classList.add("hidden");
}


