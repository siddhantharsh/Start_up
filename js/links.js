const linkCategories = {
    work: [
        { name: "Gmail", url: "https://mail.google.com" },
        { name: "Striver's Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "Classroom", url: "https://classroom.google.com" },
        { name: "Havloc", url: "https://app.haveloc.com/login" },
        { name: "Google Drive", url: "https://drive.google.com" },
        { name: "Collab", url: "https://colab.research.google.com/" },
        { name: "Leetcode", url: "https://leetcode.com" },
        { name: "Github", url: "https://github.com" },
        { name: "Netlify", url: "https://www.netlify.com" },
        { name: "Vercel", url: "https://vercel.com" },
        { name: "ChatGPT", url: "https://chatgpt.com/" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "Gemini", url: "https://gemini.google.com" },
        { name: "Perplexity", url: "https://www.perplexity.ai" }
    ],
    personal: [
        { name: "Meet", url: "https://meet.google.com/bqr-rwhz-qik?pli=1" },
        { name: "Reddit", url: "https://www.reddit.com" },
        { name: "Pinterest", url: "https://www.pinterest.com/" },
        { name: "YouTube", url: "https://www.youtube.com" }
    ]
};

function createLinks() {
    const workContainer = document.getElementById('work-links');
    if (workContainer) {
        linkCategories.work.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'btn';
            linkElement.textContent = link.name;
            linkElement.addEventListener('click', handleLinkClick);
            workContainer.appendChild(linkElement);
        });
    }
    
    const personalContainer = document.getElementById('personal-links');
    if (personalContainer) {
        linkCategories.personal.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'btn';
            linkElement.textContent = link.name;
            linkElement.addEventListener('click', handleLinkClick);
            personalContainer.appendChild(linkElement);
        });
    }
}

function handleLinkClick(e) {
    e.preventDefault();
    
    showLoader();
    
    setTimeout(() => {
        window.location.href = this.href;
    }, 300);
}

function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createLinks();
});