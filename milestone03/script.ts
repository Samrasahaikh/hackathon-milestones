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

    if (profilePicInput && nameElement && fatherNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father Name:</strong> ${fatherName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>`;

        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } else {
            console.error("the resume output element are missing");
        }
    } else {
        console.error("one or output element are missing");
    }



})