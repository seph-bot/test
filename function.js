document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userType = document.getElementById("userType").value;
    const userId = document.getElementById("for_id").value; 

    const patterns = {
        "regularStudent": /^(\d{3}S)-\d{4}$/,    
        "irregularStudent": /^(\d{3}S)-\d{4}$/,  
        "facultyTeacher": /^(OCT)-\d{4}$/,       
        "admin": /^(ADMIN)$/                     
    };
    
    const pages = {
        "regularStudent": "regular_student_dashboard.html",
        "irregularStudent": "irregular_student_dashboard.html",
        "facultyTeacher": "faculty_teacher_dashboard.html",
        "admin": "admin_dashboard.html"
    };

    if (patterns[userType] && patterns[userType].test(userId)) {
        window.location.href = pages[userType];
    } else {
        alert("Invalid ID format for the selected user type. Please try again.");
    }
});
