document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionForm');

  
    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrhhIMw9__aYh8RdK1ctYXd-LSVJmoCK80bufgTqh5S-GvyHOYrVmzZnY3v13VCRiPJA/exec'; 
    

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                
                data[key] = value;
            });
            data.Timestamp = new Date().toLocaleString(); 

            console.log('Form Data Collected:', data);
            fetch(GOOGLE_APP_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) 
            })
            .then(response => {
                alert('Success! Your admission application has been submitted and saved.');
                form.reset(); 
            })
            .catch(error => {
                console.error('Submission Error:', error);
                alert('Error: Could not submit the form. Please check the console for details.');
            });
        });
    }
});