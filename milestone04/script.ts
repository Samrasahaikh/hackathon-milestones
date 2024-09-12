// listing elemnent 
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    //type assertions
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fatherNameElement = document.getElementById('fatherName') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if ( profilePicInput && nameElement && fatherNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
       
        const name = nameElement.value;
        const fatherName = fatherNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //profile picture element
        const profilePicFile = profilePicInput.files?.[0]
        const profilePicURL = profilePicFile ? URL.createObjectURL(profilePicFile):"";

        //create resume output 
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePicURL ? `<img src="${profilePicURL}" alt ="Profile Picture" class="profilePic">` : '' }
        <h3><strong>Personal Information</strong></h3>
        <p><strong>Name: </strong><span >${name}</span></p>
        <p><strong>Father Name: </strong><span id="edit-fatherName" class="editable">${fatherName}</span></p>
        <p><strong>Email: </strong><span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone: </strong><span id="edit-phone" class="editable">${phone }</span></p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>
        
        <h3>Experience</h3>
        <p id="experience" class="editable">${experience}</p>
        
        <h3>Skills</h3>
        <p id="skills" class="editable">${skills}</p>`;

        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } 
    } else {
        console.error("one or output element are missing");
    }
});

