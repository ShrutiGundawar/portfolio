function showProject(projectName) {
    const projectDetails = {
        "Landing Page": "This project is a clean and responsive single-page website showcasing essential features for businesses or individuals.",
        "Temperature Converter": "This is an interactive tool that converts temperatures between Celsius, Fahrenheit, and Kelvin."
    };

    
    document.getElementById("project-info").textContent = projectDetails[projectName];


    document.getElementById("project-details").style.display = "block";
    document.getElementById("projects").style.display = "none";
}


function hideDetails() {
    document.getElementById("project-details").style.display = "none";
    document.getElementById("projects").style.display = "block";
}
