// Selecting form and output elements
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
const profilePictureInput = document.getElementById("imageInput") as HTMLInputElement;
const imgPreview = document.querySelector(".img-pic") as HTMLImageElement;

// Handling profile picture display
profilePictureInput.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            imgPreview.src = reader.result as string;
        };
        reader.readAsDataURL(target.files[0]);
    }
});

// Function to generate and display resume
function generateResume(event: Event) {
    event.preventDefault();
    
    // Collecting input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const cnic = (document.getElementById("cnic") as HTMLInputElement).value;
    const residence = (document.getElementById("residence") as HTMLInputElement).value;
    const dob = (document.getElementById("dob") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement)?.value || '';
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement)?.value || '';
    const frontendTechnologies = (document.getElementById("frontendTechnologies") as HTMLTextAreaElement)?.value || '';
    const problemSolving = (document.getElementById("problemSolving") as HTMLTextAreaElement)?.value || '';
    const softSkills = (document.getElementById("softSkills") as HTMLTextAreaElement)?.value || '';
    const designPrototyping = (document.getElementById("designPrototyping") as HTMLTextAreaElement)?.value || '';
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || '';
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement)?.value || '';
    const projectsDetails = (document.getElementById("projectsDetails") as HTMLTextAreaElement)?.value || '';
    const hobbies = (document.getElementById("hobbies") as HTMLTextAreaElement)?.value || '';

    // Check for required fields (simple validation)
    if (!name || !cnic || !residence || !dob || !contact || !gender || !email) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Creating HTML for dynamic resume display
    const resumeHTML = `
        <h1>Dynamic Resume</h1><b>
        <img src="${imgPreview.src}" alt="Profile Picture" class="img-pic">

        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${name}</p> 
        <p><strong>CNIC:</strong> ${cnic}</p>
        <p><strong>Residence:</strong> ${residence}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Objective:</strong> ${objective}</p>
        <p><strong>Certifications:</strong> ${certifications}</p>
        <p><strong>Frontend Technologies:</strong> ${frontendTechnologies}</p>
        <p><strong>Problem Solving:</strong> ${problemSolving}</p>
        <p><strong>Soft Skills:</strong> ${softSkills}</p>
        <p><strong>Design & Prototyping:</strong> ${designPrototyping}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${workExperience}</p>
        <p><strong>Projects:</strong> ${projectsDetails}</p>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
    `;

    // Displaying the generated resume
    resumeOutput.innerHTML = resumeHTML;
}

// Event listener for form submission
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", generateResume);
