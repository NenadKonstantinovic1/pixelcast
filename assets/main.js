// Data for the consoles
let consoleData = [
    { name: "gamecube", displayName: "GameCube", brand: "Nintendo", year: 2001, description: "Nintendo's sixth-generation home console featuring mini-discs and innovative controller design. Known for its compact design and strong first-party game library.", games: ["Super Smash Bros. Melee", "The Legend of Zelda: The Wind Waker", "Metroid Prime"] },
    { name: "nes", displayName: "NES", brand: "Nintendo", year: 1985, description: "The Nintendo Entertainment System revolutionized home gaming after the 1983 crash. It brought iconic franchises like Super Mario Bros. and The Legend of Zelda to millions of homes.", games: ["Super Mario Bros. 3", "The Legend of Zelda", "Metroid"] },
    { name: "nessuper", displayName: "Super NES", brand: "Nintendo", year: 1991, description: "Nintendo's 16-bit powerhouse that competed with Sega Genesis. Featured Mode 7 graphics and classic titles like Super Mario World, A Link to the Past, and Chrono Trigger.", games: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Chrono Trigger"] },
    { name: "nintendo3ds", displayName: "Nintendo 3DS", brand: "Nintendo", year: 2011, description: "A handheld gaming console featuring autostereoscopic 3D display without glasses. Successor to the DS line, offering enhanced graphics and innovative dual-screen gameplay.", games: ["The Legend of Zelda: Ocarina of Time 3D", "Super Mario 3D Land", "Pokémon X and Y"] },
    { name: "nintendo64", displayName: "Nintendo 64", brand: "Nintendo", year: 1996, description: "Nintendo's first 64-bit console, famous for its unique three-pronged controller and groundbreaking 3D games like Super Mario 64 and The Legend of Zelda: Ocarina of Time.", games: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "GoldenEye 007"] },
    { name: "nintendowii", displayName: "Nintendo Wii", brand: "Nintendo", year: 2006, description: "Revolutionary motion-controlled console that brought gaming to a broader audience. Featured innovative Wii Remote and became one of the best-selling consoles of all time.", games: ["Wii Sports", "Super Mario Galaxy", "The Legend of Zelda: Twilight Princess"] },
    { name: "playstation1", displayName: "PlayStation", brand: "Sony", year: 1995, description: "Sony's debut console that popularized CD-based gaming. Introduced iconic franchises like Final Fantasy VII, Metal Gear Solid, and Gran Turismo to the world.", games: ["Final Fantasy VII", "Metal Gear Solid", "Gran Turismo"] },
    { name: "playstation2", displayName: "PlayStation 2", brand: "Sony", year: 2000, description: "The best-selling video game console of all time. Featured DVD playback capability and an extensive library of over 3,800 games, including Grand Theft Auto III and God of War.", games: ["Grand Theft Auto: San Andreas", "God of War", "Shadow of the Colossus"] },
    { name: "playstation3", displayName: "PlayStation 3", brand: "Sony", year: 2006, description: "Sony's seventh-generation console featuring Blu-ray support and powerful Cell processor. Introduced PlayStation Network and brought cinematic experiences to gaming.", games: ["The Last of Us", "Uncharted 2: Among Thieves", "Red Dead Redemption"] },
    { name: "psp", displayName: "PSP", brand: "Sony", year: 2004, description: "Sony's first handheld gaming console featuring a large widescreen display and UMD disc format. Brought console-quality gaming on the go with titles like God of War: Chains of Olympus and Crisis Core: Final Fantasy VII.", games: ["God of War: Chains of Olympus", "Crisis Core: Final Fantasy VII", "Grand Theft Auto: Liberty City Stories"] },
    { name: "psvita", displayName: "PS Vita", brand: "Sony", year: 2011, description: "Sony's second-generation handheld console featuring dual analog sticks, touchscreen, and rear touchpad. Offered remote play with PlayStation 4 and featured games like Persona 4 Golden and Uncharted: Golden Abyss.", games: ["Persona 4 Golden", "Uncharted: Golden Abyss", "Gravity Rush"] },
    { name: "segadreamcast", displayName: "Dreamcast", brand: "Sega", year: 1999, description: "Sega's final home console, ahead of its time with online capabilities and innovative VMU memory card. Featured classics like Sonic Adventure and Shenmue.", games: ["Sonic Adventure", "Shenmue", "Soulcalibur"] },
    { name: "segagenesis", displayName: "Genesis", brand: "Sega", year: 1989, description: "Sega's 16-bit console that challenged Nintendo's dominance. Known for 'Blast Processing' marketing and iconic mascot Sonic the Hedgehog.", games: ["Sonic the Hedgehog 2", "Streets of Rage 2", "Phantasy Star IV"] },
    { name: "segasaturn", displayName: "Saturn", brand: "Sega", year: 1995, description: "Sega's 32-bit console featuring dual processors. Struggled in the West but found success in Japan with strong arcade ports and RPGs like Panzer Dragoon Saga.", games: ["Panzer Dragoon Saga", "Nights into Dreams", "Virtua Fighter 2"] },
    { name: "xbox", displayName: "Xbox", brand: "Microsoft", year: 2001, description: "Microsoft's entry into the console market. Featured built-in hard drive, Ethernet port, and launched the Halo franchise, establishing Xbox as a major gaming brand.", games: ["Halo: Combat Evolved", "Halo 2", "Fable"] },
    { name: "xbox360", displayName: "Xbox 360", brand: "Microsoft", year: 2005, description: "Microsoft's second console that introduced Xbox Live to mainstream gaming. Featured achievements, party chat, and became the platform for Call of Duty's rise to prominence.", games: ["Halo 3", "Gears of War", "Mass Effect 2"] }
];

// Dynamic navigation

function initializeNavigation() {
    let pageNames = ["Home", "Contact", "Author", "Documentation", "Download ZIP"];
    let pageLinks = ["index.html", "contact.html", "author.html", "documentation.pdf", "download.zip"];
    let navLink = document.querySelector(".navbar-nav");
    
    if (!navLink) {
        console.error("Navigation element not found");
        return;
    }
    
    pageNames.forEach((pageName, index) => {
        navLink.innerHTML += `
            <li class="nav-item">
                <a class="nav-link text-white" href="${pageLinks[index]}">
                    ${pageName}
                </a>
            </li>
        `;
    });
}

// Dynamic footer navigation links
function initializeFooterNavLinks() {
    let pageNames = ["Home", "Contact", "Author", "Documentation", "Download ZIP"];
    let pageLinks = ["index.html", "contact.html", "author.html", "documentation.pdf", "download.zip"];
    let footerNavContainer = document.querySelector(".footer-navigation-links");
    
    if (!footerNavContainer) {
        console.error("Footer navigation links container not found");
        return;
    }
    
    footerNavContainer.innerHTML = "";
    
    pageNames.forEach((pageName, index) => {
        footerNavContainer.innerHTML += `
            <p>
                <a href="${pageLinks[index]}" class="text-reset" ${pageLinks[index].endsWith('.zip') ? 'download' : ''}>${pageName}</a>
            </p>
        `;
    });
}

// Dynamic footer brand links

function initializeFooterBrandLinks() {
    let brandMapping = [
        { brand: "Nintendo", displayName: "Nintendo", dataBrand: "Nintendo" },
        { brand: "Sony", displayName: "PlayStation", dataBrand: "Sony" },
        { brand: "Sega", displayName: "Sega", dataBrand: "Sega" },
        { brand: "Microsoft", displayName: "Xbox", dataBrand: "Microsoft" }
    ];
    let footerBrandsContainer = document.querySelector(".footer-brands-links");
    
    if (!footerBrandsContainer) {
        console.error("Footer brands links container not found");
        return;
    }
    
    footerBrandsContainer.innerHTML = "";
    
    brandMapping.forEach((brand) => {
        footerBrandsContainer.innerHTML += `
            <p>
                <a href="#!" class="text-reset footer-brand-link" data-brand="${brand.dataBrand}">${brand.displayName}</a>
            </p>
        `;
    });
}

// Dynamic footer icons generation
function initializeFooterIcons() {
    let socialIcons = [
        { name: "facebook", iconClass: "fab fa-facebook", url: "https://www.facebook.com" },
        { name: "twitter", iconClass: "fab fa-twitter", url: "https://www.twitter.com" },
        { name: "youtube", iconClass: "fab fa-youtube", url: "https://www.youtube.com" },
        { name: "instagram", iconClass: "fab fa-instagram", url: "https://www.instagram.com" },
        { name: "tiktok", iconClass: "fab fa-tiktok", url: "https://www.tiktok.com" }
    ];
    let iconsContainer = document.querySelector(".icons");
    
    if (!iconsContainer) {
        console.error("Icons container not found");
        return;
    }
    
    iconsContainer.innerHTML = "";
    
    socialIcons.forEach((social) => {
        iconsContainer.innerHTML += `
            <a href="${social.url}" class="mb-3 text-reset">
                <i class="${social.iconClass}"></i>
            </a>
        `;
    });
}

// Dynamic console display
function displayConsoles(consoles = consoleData) {
    let consoleGrid = document.querySelector(".consoles");
    
    if (!consoleGrid) {
        console.error("Console grid element not found");
        return;
    }
    
    consoleGrid.innerHTML = "";
    
    consoles.forEach((console) => {
        consoleGrid.innerHTML += `
            <div class="col-md-3 col-sm-6 mb-4 console-wrapper scroll-reveal">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="assets/images/${console.name}.jpg" 
                                 alt="${console.displayName} - ${console.brand} (${console.year})" 
                                 class="console-image">
                        </div>
                        <div class="flip-card-back">
                            <div class="details-content">
                                <h4 class="details-title">${console.displayName}</h4>
                                <p class="details-info"><strong>Company:</strong> ${console.brand}</p>
                                <p class="details-info"><strong>Release Year:</strong> ${console.year}</p>
                                <div class="details-games">
                                    <p class="details-info"><strong>Top Games:</strong></p>
                                    <ul class="games-list">
                                        ${console.games.map(game => `<li>${game}</li>`).join('')}
                                    </ul>
                                </div>
                                <p class="details-description">${console.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Image clickhandlers
    attachConsoleClickHandlers();
    
    // Console count display
    updateConsoleCount(consoles.length);
    
    // Scroll reveal
    setTimeout(() => {
        initializeScrollReveal();
    }, 100);
}

// Update console count display
function updateConsoleCount(currentCount) {
    let countElement = document.getElementById("consoleCount");
    let totalCount = consoleData.length;
    
    if (countElement) {
        if (currentCount === totalCount) {
            countElement.textContent = `Showing all ${totalCount} consoles`;
        } else {
            countElement.textContent = `Showing ${currentCount} of ${totalCount} consoles`;
        }
    }
}

// Attach click handlers to console flip cards
function attachConsoleClickHandlers() {
    let flipCards = document.querySelectorAll(".flip-card");
    
    flipCards.forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    });
}

// Filter consoles by brand
function filterConsoles(brand) {
    if (brand === "all") {
        displayConsoles(consoleData);
    } else {
        let filtered = consoleData.filter(console => 
            console.brand.toLowerCase() === brand.toLowerCase()
        );
        displayConsoles(filtered);
    }
}

// Sort consoles
function sortConsoles(sortBy) {
    // first checking for an active filtering choice
    let activeFilterBtn = document.querySelector(".filter-btn.active");
    let dataToSort;
    
    if (activeFilterBtn) {
        let brand = activeFilterBtn.getAttribute("data-brand");
        if (brand === "all") {
            dataToSort = consoleData.slice();
        } else {
            dataToSort = consoleData.filter(console => 
                console.brand.toLowerCase() === brand.toLowerCase()
            );
        }
    } else {
        dataToSort = consoleData.slice();
    }
    
    let sorted = dataToSort.slice();
    
    switch(sortBy) {
        case "name":
            sorted.sort((a, b) => a.displayName.localeCompare(b.displayName));
            break;
        case "year-asc":
            sorted.sort((a, b) => a.year - b.year);
            break;
        case "year-desc":
            sorted.sort((a, b) => b.year - a.year);
            break;
        case "name-desc":
            sorted.sort((a, b) => b.displayName.localeCompare(a.displayName));
            break;
        default:
            return;
    }
    
    displayConsoles(sorted);
}

// Console facts
let consoleFacts = [
    "The NES was originally released in Japan as the 'Famicom' (Family Computer) in 1983, two years before its North American release.",
    "The PlayStation was originally designed as a CD-ROM add-on for the Super Nintendo, but Nintendo backed out of the deal, leading Sony to create their own console.",
    "The Sega Dreamcast was the first console to include a built-in modem for online gaming, launching in 1999 with games like Phantasy Star Online.",
    "Nintendo's GameCube used proprietary mini-discs instead of standard DVDs, which could only hold 1.5GB of data compared to a DVD's 4.7GB.",
    "The Xbox was the first console to include a built-in hard drive, giving it a significant advantage over competitors at the time.",
    "The PlayStation 2 remains the best-selling video game console of all time, with over 155 million units sold worldwide.",
    "Sega's Genesis was marketed with the slogan 'Genesis does what Nintendon't' during the console wars of the early 1990s.",
    "The Nintendo 64 was the last major home console to use cartridges instead of discs, which limited game sizes but provided faster load times.",
    "The PSP (PlayStation Portable) was the first handheld console to use optical disc media (UMD) instead of cartridges.",
    "The Xbox 360's 'Red Ring of Death' became infamous, referring to the three red lights indicating a hardware failure."
];

// Initalize facts
function initializeFacts() {
    let factsText = document.querySelector(".facts-text");
    let arrowLeft = document.querySelector(".facts-arrow-left");
    let arrowRight = document.querySelector(".facts-arrow-right");
    
    if (!factsText) return;
    
    let currentIndex = 0;
    let autoRotateInterval;
    let isTransitioning = false;
    
    function showFact(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Fade out
        factsText.classList.remove("fade-in");
        factsText.classList.add("fade-out");
        
        setTimeout(() => {
            currentIndex = index;
            
            factsText.textContent = consoleFacts[currentIndex];
            factsText.classList.remove("fade-out");
            factsText.classList.add("fade-in");
            isTransitioning = false;
        }, 600);
    }
    
    function nextFact() {
        let nextIndex = (currentIndex + 1) % consoleFacts.length;
        showFact(nextIndex, 'next');
        resetAutoRotate();
    }
    
    function previousFact() {
        let prevIndex = (currentIndex - 1 + consoleFacts.length) % consoleFacts.length;
        showFact(prevIndex, 'prev');
        resetAutoRotate();
    }
    
    function resetAutoRotate() {
        // Clear existing interval
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
        // Restart auto-rotate after 5 seconds
        autoRotateInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % consoleFacts.length;
            showFact(nextIndex, 'next');
        }, 5000);
    }
    
    // Showing first fact with fade in animation
    if (consoleFacts.length > 0) {
        currentIndex = 0;
        factsText.textContent = consoleFacts[currentIndex];
        // Starts auto-rotation with fade in
        setTimeout(() => {
            factsText.classList.add("fade-in");
        }, 100);
    }
    
    // Event listeners for arrows
    if (arrowLeft) {
        arrowLeft.addEventListener("click", previousFact);
    }
    
    if (arrowRight) {
        arrowRight.addEventListener("click", nextFact);
    }
    
    // Start auto-rotation
    resetAutoRotate();
}

// Initialize scroll reveal
function initializeScrollReveal() {
    let revealElements = document.querySelectorAll(".scroll-reveal");
    
    if (revealElements.length === 0) return;
    
    let observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize contact form
function initializeContactForm() {
    let contactForm = document.getElementById("contactForm");
    let formMessage = document.getElementById("formMessage");
    let formMessageText = formMessage ? formMessage.querySelector("p") : null;
    
    if (!contactForm) {
        return;
    }
    
    // Function to show message
    function showMessage(message, isError = false) {
        if (!formMessage || !formMessageText) return;
        
        formMessageText.textContent = message;
        formMessage.className = "form-message mb-3";
        formMessage.classList.add(isError ? "form-message-error" : "form-message-success");
        formMessage.classList.remove("form-message-hidden");
        
        // Show message
        formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    
    // Function to hide message
    function hideMessage() {
        if (formMessage) {
            formMessage.classList.add("form-message-hidden");
        }
    }
    
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Hide previous messages
        hideMessage();
        
        // Get form values
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("email").value.trim();
        let contactReason = document.getElementById("contactReason").value;
        let message = document.getElementById("message").value.trim();
        
        // Basic validation
        if (!firstName || !lastName || !email || !contactReason || !message) {
            showMessage("Please fill in all fields.", true);
            return;
        }
        
        // Name validation
        const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
        if (!nameRegex.test(firstName)) {
            showMessage("Please enter a valid first name (letters, spaces, hyphens, or apostrophes only, 2-50 characters).", true);
            return;
        }
        if (!nameRegex.test(lastName)) {
            showMessage("Please enter a valid last name (letters, spaces, hyphens, or apostrophes only, 2-50 characters).", true);
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage("Please enter a valid email address.", true);
            return;
        }
        
        showMessage(`Thank you, ${firstName} ${lastName}! Your ${contactReason} has been received. We'll get back to you soon.`, false);
        
        // Reset form
        contactForm.reset();
    });
    
    // Hide message when user starts typing
    let formInputs = contactForm.querySelectorAll("input, select, textarea");
    formInputs.forEach(input => {
        input.addEventListener("input", function() {
            if (formMessage && !formMessage.classList.contains("form-message-hidden")) {
                hideMessage();
            }
        });
    });
}

// Initialize after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    initializeNavigation();
    initializeFooterNavLinks();
    initializeFooterBrandLinks();
    initializeFooterIcons();
    initializeScrollReveal();
    initializeContactForm();
    
    // Only initialize consoles features if on index,html
    let consoleGrid = document.querySelector(".consoles");
    if (consoleGrid) {
        displayConsoles();
        
        // Seting up filter/sort toggle
        let filterSortToggle = document.querySelector(".filter-sort-toggle");
        let filterSortContent = document.querySelector(".filter-sort-content");
        
        if (filterSortToggle && filterSortContent) {
            filterSortToggle.addEventListener("click", function() {
                filterSortContent.classList.toggle("active");
                filterSortToggle.classList.toggle("active");
            });
        }
        
        // Seting up filter buttons
        let filterButtons = document.querySelectorAll(".filter-btn");
        filterButtons.forEach(button => {
            button.addEventListener("click", function() {
                let brand = this.getAttribute("data-brand");
                filterConsoles(brand);
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
            });
        });
        
        // Seting up footer brand links before filtering
        setTimeout(() => {
            let footerBrandLinks = document.querySelectorAll(".footer-brand-link");
            footerBrandLinks.forEach(link => {
                link.addEventListener("click", function(e) {
                    e.preventDefault();
                    let brand = this.getAttribute("data-brand");
                    
                    // Find and click the corresponding filter button
                    let correspondingButton = document.querySelector(`.filter-btn[data-brand="${brand}"]`);
                    if (correspondingButton) {
                        correspondingButton.click();
                    }
                    
                    // Scroll to console grid with offset for sticky nav
                    let consoleGrid = document.querySelector(".consoles");
                    if (consoleGrid) {
                        let nav = document.querySelector("nav");
                        let navHeight = nav ? nav.offsetHeight : 80;
                        let gridTop = consoleGrid.offsetTop;
                        let offset = gridTop - navHeight - 20;
                        
                        window.scrollTo({ top: offset, behavior: "smooth" });
                    }
                });
            });
        }, 100);
        
        // Set up sort dropdown
        let sortSelect = document.getElementById("sortSelect");
        if (sortSelect) {
            sortSelect.addEventListener("change", function() {
                sortConsoles(this.value);
            });
        }
    }
    
    // Only initialize facts if facts section exists
    let factsText = document.querySelector(".facts-text");
    if (factsText) {
        initializeFacts();
    }
    
    // Back to top button
    let backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        // Show/hide button during scrolling
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });
        // Scroll to top when button is clicked
        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0
            });
        });
    }
});