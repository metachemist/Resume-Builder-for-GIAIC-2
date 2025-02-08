// Selecting form and output elements
var resumeOutput = document.getElementById("resumeOutput");
var profilePictureInput = document.getElementById("imageInput");
var imgPreview = document.querySelector(".img-pic");
// Handling profile picture display
profilePictureInput.addEventListener("change", function (event) {
    var target = event.target;
    if (target.files && target.files[0]) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            imgPreview.src = reader_1.result;
        };
        reader_1.readAsDataURL(target.files[0]);
    }
});
// Function to generate and display resume
function generateResume(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    event.preventDefault();
    // Collecting input values
    var name = document.getElementById("name").value;
    var cnic = document.getElementById("cnic").value;
    var residence = document.getElementById("residence").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var email = document.getElementById("email").value;
    var objective = ((_b = document.getElementById("objective")) === null || _b === void 0 ? void 0 : _b.value) || '';
    var certifications = ((_c = document.getElementById("certifications")) === null || _c === void 0 ? void 0 : _c.value) || '';
    var frontendTechnologies = ((_d = document.getElementById("frontendTechnologies")) === null || _d === void 0 ? void 0 : _d.value) || '';
    var problemSolving = ((_e = document.getElementById("problemSolving")) === null || _e === void 0 ? void 0 : _e.value) || '';
    var softSkills = ((_f = document.getElementById("softSkills")) === null || _f === void 0 ? void 0 : _f.value) || '';
    var designPrototyping = ((_g = document.getElementById("designPrototyping")) === null || _g === void 0 ? void 0 : _g.value) || '';
    var education = ((_h = document.getElementById("education")) === null || _h === void 0 ? void 0 : _h.value) || '';
    var workExperience = ((_j = document.getElementById("workExperience")) === null || _j === void 0 ? void 0 : _j.value) || '';
    var projectsDetails = ((_k = document.getElementById("projectsDetails")) === null || _k === void 0 ? void 0 : _k.value) || '';
    var hobbies = ((_l = document.getElementById("hobbies")) === null || _l === void 0 ? void 0 : _l.value) || '';
    // Check for required fields (simple validation)
    if (!name || !cnic || !residence || !dob || !contact || !gender || !email) {
        alert("Please fill in all the required fields.");
        return;
    }
    // Creating HTML for dynamic resume display
    var resumeHTML = "\n        <h1>Dynamic Resume</h1><b>\n        <img src=\"".concat(imgPreview.src, "\" alt=\"Profile Picture\" class=\"img-pic\">\n\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ").concat(name, "</p> \n        <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n        <p><strong>Residence:</strong> ").concat(residence, "</p>\n        <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Objective:</strong> ").concat(objective, "</p>\n        <p><strong>Certifications:</strong> ").concat(certifications, "</p>\n        <p><strong>Frontend Technologies:</strong> ").concat(frontendTechnologies, "</p>\n        <p><strong>Problem Solving:</strong> ").concat(problemSolving, "</p>\n        <p><strong>Soft Skills:</strong> ").concat(softSkills, "</p>\n        <p><strong>Design & Prototyping:</strong> ").concat(designPrototyping, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n        <p><strong>Projects:</strong> ").concat(projectsDetails, "</p>\n        <p><strong>Hobbies:</strong> ").concat(hobbies, "</p>\n    ");
    // Displaying the generated resume
    resumeOutput.innerHTML = resumeHTML;
}
// Event listener for form submission
var form = document.getElementById("resumeForm");
form.addEventListener("submit", generateResume);
