document.addEventListener("DOMContentLoaded", function() {
    const visitCountElement = document.getElementById("visitCount");
    const sidebarContent = document.getElementById('sidebar-content');

    if (visitCountElement && sidebarContent) {
        // Visit count logic
        let visitCount = localStorage.getItem("visitCount");

        if (!visitCount) {
            visitCount = 0;
        } else {
            visitCount = parseInt(visitCount, 10);
        }

        visitCount += 1;
        localStorage.setItem("visitCount", visitCount);
        visitCountElement.textContent = visitCount;

        // Last visit date logic
        function getDaysDifference(date1, date2) {
            const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
            const diffInTime = date2.getTime() - date1.getTime();
            return Math.round(diffInTime / oneDay);
        }

        function displayVisitMessage() {
            const lastVisit = localStorage.getItem('lastVisit');
            const currentVisit = new Date();

            if (!lastVisit) {
                // First visit
                sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
            } else {
                const lastVisitDate = new Date(lastVisit);
                const daysDifference = getDaysDifference(lastVisitDate, currentVisit);

                if (daysDifference < 1) {
                    sidebarContent.innerText = "Back so soon! Awesome!";
                } else if (daysDifference === 1) {
                    sidebarContent.innerText = `You last visited 1 day ago.`;
                } else {
                    sidebarContent.innerText = `You last visited ${daysDifference} days ago.`;
                }
            }

            // Store the current visit date in localStorage
            localStorage.setItem('lastVisit', currentVisit.toISOString());
        }

        // Call the function to display the message
        displayVisitMessage();
    } else {
        console.error("Required elements are not found in the DOM.");
    }
});
