const linkCategories = {
    work: [
        { name: "Gmail", url: "https://mail.google.com" },
        { name: "Striver's Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "Classroom", url: "https://classroom.google.com" },
        { name: "Havloc", url: "https://app.haveloc.com/login" },
        { name: "Google Drive", url: "https://drive.google.com" },
        { name: "Collab", url: "https://colab.research.google.com/" },
        { name: "NotebookLM", url: "https://notebooklm.google.com/" },
        { name: "Canva", url: "https://www.canva.com/" },
        { name: "Leetcode", url: "https://leetcode.com" },
        { name: "Github", url: "https://github.com" },
        { name: "Netlify", url: "https://www.netlify.com" },
        { name: "Vercel", url: "https://vercel.com" }
    ],
    tools: [
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
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            workContainer.appendChild(linkElement);
        });
    }
    
    const toolsContainer = document.getElementById('tools-links');
    if (toolsContainer) {
        linkCategories.tools.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'btn';
            linkElement.textContent = link.name;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            toolsContainer.appendChild(linkElement);
        });
    }
    
    const personalContainer = document.getElementById('personal-links');
    if (personalContainer) {
        linkCategories.personal.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'btn';
            linkElement.textContent = link.name;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            personalContainer.appendChild(linkElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createLinks();
});