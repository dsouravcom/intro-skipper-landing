document.addEventListener("DOMContentLoaded", () => {
    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Magnetic Buttons (Micro-interaction)
    const buttons = document.querySelectorAll(".magnetic-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0, 0)";
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });

    // Set current year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Browser Detection and Configuration
    configureBrowserButtons();

    // Fetch GitHub Stars
    if ("requestIdleCallback" in window) {
        requestIdleCallback(fetchGitHubStars);
    } else {
        setTimeout(fetchGitHubStars, 2000);
    }
});

// Browser Detection Logic
function detectBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("edg/")) {
        return "edge";
    } else if (userAgent.includes("firefox")) {
        return "firefox";
    } else if (userAgent.includes("chrome") && !userAgent.includes("edg/")) {
        return "chrome";
    } else {
        return "chrome"; // Default
    }
}

function configureBrowserButtons() {
    const browser = detectBrowser();
    const browserConfigs = {
        chrome: {
            name: "Chrome",
            url: "https://chromewebstore.google.com/detail/cdmmdficgnfnennlmjieepedoamgppgk",
            heroText: "Download for Chrome",
            downloadText: "Download for Chrome",
            logo: "assets/icons/Chrome.svg",
            altText: "Chrome icon",
        },
        firefox: {
            name: "Firefox",
            url: "https://addons.mozilla.org/en-US/firefox/addon/universal-intro-skipper/",
            heroText: "Download for Firefox",
            downloadText: "Download for Firefox",
            logo: "assets/icons/Firefox.svg",
            altText: "Firefox icon",
        },
        edge: {
            name: "Edge",
            url: "https://chromewebstore.google.com/detail/cdmmdficgnfnennlmjieepedoamgppgk",
            heroText: "Download for Edge",
            downloadText: "Download for Edge",
            logo: "assets/icons/Edge.svg",
            altText: "Edge icon",
        },
    };

    const config = browserConfigs[browser];

    // Update Primary Button
    const primaryBtn = document.getElementById("primaryDownloadBtn");
    const primaryBtnText = document.getElementById("primaryBtnText");
    const primaryBrowserIcon = document.getElementById("primaryBrowserIcon");

    if (primaryBtn) primaryBtn.href = config.url;
    if (primaryBtnText) primaryBtnText.textContent = config.heroText;
    if (primaryBrowserIcon) {
        primaryBrowserIcon.src = config.logo;
        primaryBrowserIcon.alt = config.altText;
    }

    // Update Main Download Button
    const mainBtn = document.getElementById("mainDownloadBtn");
    const mainBtnText = document.getElementById("mainBtnText");
    const mainBrowserIcon = document.getElementById("mainBrowserIcon");

    if (mainBtn) mainBtn.href = config.url;
    if (mainBtnText) mainBtnText.textContent = config.downloadText;
    if (mainBrowserIcon) {
        mainBrowserIcon.src = config.logo;
        mainBrowserIcon.alt = config.altText;
    }

    // Update Step Text
    const stepOneText = document.getElementById("stepOneText");
    if (stepOneText) {
        stepOneText.textContent = `Click "Download for ${config.name}"`;
    }

    // Hide current browser from lists
    hideCurrentBrowserFromList(browser);
}

function hideCurrentBrowserFromList(currentBrowser) {
    const heroLink = document.getElementById(currentBrowser + "Link");
    if (heroLink) heroLink.style.display = "none";

    const downloadLink = document.getElementById(
        "download" +
            currentBrowser.charAt(0).toUpperCase() +
            currentBrowser.slice(1) +
            "Link"
    );
    if (downloadLink) downloadLink.style.display = "none";

    const otherBrowsersDiv = document.getElementById("otherBrowsers");
    const downloadOtherBrowsersDiv = document.getElementById(
        "downloadOtherBrowsers"
    );

    if (otherBrowsersDiv) otherBrowsersDiv.classList.add("justify-center");
    if (downloadOtherBrowsersDiv)
        downloadOtherBrowsersDiv.classList.add("justify-center");
}

async function fetchGitHubStars() {
    try {
        const response = await fetch(
            "https://api.github.com/repos/dsouravcom/intro-skipper-ext"
        );
        const data = await response.json();
        const starCount = data.stargazers_count;
        const starCountElement = document.getElementById("starCount");
        if (starCountElement) {
            starCountElement.textContent = `⭐ ${starCount}`;
        }
    } catch (error) {
        console.log("Could not fetch GitHub stars:", error);
    }
}
