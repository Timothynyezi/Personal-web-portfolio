// Define which views are switchable
const views = ['about', 'skills', 'projects'];

/**
 * Switches the active view/section on the page.
 * @param {string} targetViewId - The ID of the section to show (e.g., 'about', 'skills', 'projects').
 */
function navigate(targetViewId) {
    // 1. Handle visibility of the main content sections
    views.forEach(viewId => {
        const section = document.getElementById(viewId);
        if (section) {
            // Show the target section and hide others
            if (viewId === targetViewId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        }
    });

    // 2. Update active navigation link styling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold');
        link.classList.add('text-gray-600', 'font-medium');
    });
    
    const activeLink = document.getElementById(`nav-${targetViewId}`);
    if (activeLink) {
        activeLink.classList.remove('text-gray-600', 'font-medium');
        activeLink.classList.add('text-blue-600', 'font-bold');
    }

    // If the user clicks 'Jane Doe' in the nav, we treat it as going to the 'hero' view
    // which in this case means showing the projects by default (initial state)
    if (targetViewId === 'hero') {
         // Clear active nav styling
         document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-blue-600', 'font-bold');
            link.classList.add('text-gray-600', 'font-medium');
        });
        navigate('projects'); // Default to projects view
    }
}

// Set the initial view when the page loads
window.onload = function() {
    // Default to showing the Projects section
    navigate('projects');
};