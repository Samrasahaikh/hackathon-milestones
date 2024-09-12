var _a;
// listing elemnent 
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertions
    var profilePicInput = document.getElementById('profilePic');
    var nameElement = document.getElementById('name');
    var fatherNameElement = document.getElementById('fatherName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePicInput && nameElement && fatherNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var fatherName = fatherNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //profile picture element
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : "";
        //create resume output 
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt =\"Profile Picture\" class=\"profilePic\">") : '', "\n        <h3><strong>Personal Information</strong></h3>\n        <p><strong>Name: </strong><span >").concat(name_1, "</span></p>\n        <p><strong>Father Name: </strong><span id=\"edit-fatherName\" class=\"editable\">").concat(fatherName, "</span></p>\n        <p><strong>Email: </strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone: </strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p id=\"experience\" class=\"editable\">").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p id=\"skills\" class=\"editable\">").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    }
    else {
        console.error("one or output element are missing");
    }
});
