    const projectsData = {
            "calorie-counter": {
                title: "Calorie Counter (JavaEE)", 
                tagline: "A university project developed with JavaEE and MySQL to help users track calories and check their BMI. <span style = 'color: #84cc16; font-weight: bold;'><a href ='https://github.com/Thura-Mon/Daily-Calorie-Intake-Counter---BMI-Calculator' >Check GitHub Repository</a></span>",
                images: [
            "images/CalorieCounter/Signup.png",
            "images/CalorieCounter/manage_food.png",
            "images/CalorieCounter/manag_category.png",
            "images/CalorieCounter/result.png",
            "images/CalorieCounter/view_food.png",
            "images/CalorieCounter/bmi_calculator.png"
        ],
                context: "Developed a web-based calorie counter for a university project. The application allows users to log their daily food intake, calculates whether their intake is above or below the normal daily requirement, and includes a BMI calculator.",
                role: "As the lead developer, I was responsible for the full-stack development. I designed the database schema, implemented the backend logic with JavaEE, and created the frontend UI to interact with the server.",
                process: "The project started with defining core features such as user authentication, food logging, and BMI calculation. I used JavaEE for server-side logic and MySQL for the database. The frontend was built with HTML and CSS.",
                challenges: "A primary challenge was ensuring accurate BMI calculation and providing relevant feedback to the user based on their calorie intake. I addressed this by implementing robust backend validation and logic.",
                outcome: "Successfully launched a functional calorie counter that provides simple yet effective tools for health tracking, fulfilling all project requirements.",
                impact: "The application served its purpose as a solid university project, demonstrating my ability to build a full-stack web application from the ground up.",
                learnings: "This project enhanced my understanding of JavaEE, Java, and database design with MySQL, particularly in a university project context.",
                cta: [
                    // { label: "Live Demo", url: "#" },
                    { label: "GitHub Repo", url: "https://github.com/Thura-Mon/Daily-Calorie-Intake-Counter---BMI-Calculator" }
                ]
            },
            "expense-tracker": {
                title: "Expense Tracker (PHP)",
                tagline: "A full-stack PHP and MySQL web application for department-based expense reporting with SMTP for OTP. <span style = 'color: #84cc16; font-weight: bold;'><a href ='https://github.com/Thura-Mon/Expense-Tracker' >Check GitHub Repository</a></span>",
                images: [
            "images/ExprenseTrackingSystem/index.png",
            "images/ExprenseTrackingSystem/admin_login.png",
            "images/ExprenseTrackingSystem/user_login.png",
            "images/ExprenseTrackingSystem/forgotpassword.png",
            "images/ExprenseTrackingSystem/otp_code.png",
            "images/ExprenseTrackingSystem/admin_dashboard.png",
            "images/ExprenseTrackingSystem/expense_report.png",
            "images/ExprenseTrackingSystem/report_chart.png",
            "images/ExprenseTrackingSystem/user_view.png",
            "images/ExprenseTrackingSystem/expense_check.png",
            "images/ExprenseTrackingSystem/excel.png",
            "images/ExprenseTrackingSystem/reportexcel.png",

        ],
                context: "Created an expense tracker for a university project. The system is designed for an admin to create departments, and users belonging to those departments can log and report their expenses. It also includes an SMTP service for password recovery.",
                role: "I was the sole developer for this full-stack project, handling everything from the user interface to the backend logic. I used PHP for the server-side, MySQL for the database, and integrated SMTP for email functionality.",
                process: "The development process involved creating user and admin roles, a database for transactions, and PHP scripts to handle reporting and password resets. The frontend was built with HTML, CSS, and some JavaScript.",
                challenges: "Ensuring secure user authentication and department-based data segregation was a key challenge. I implemented secure password hashing and managed user sessions to maintain data integrity.",
                outcome: "The final product is a secure and efficient expense tracker that provides a clear overview of department finances. The SMTP integration for OTP was a crucial addition for user convenience and security.",
                impact: "This project showcased my ability to develop a comprehensive system with multiple user roles, demonstrating my proficiency in PHP and MySQL.",
                learnings: "This project taught me the importance of user role management, data security practices, and how to integrate external services like SMTP for a better user experience.",
                cta: [
                    { label: "GitHub Repo", url: "https://github.com/Thura-Mon/Expense-Tracker" }
                ]
            },
            "calorie-tracking": {
                title: "Calorie Tracking & Goal Monitoring System (C# ASP.NET)",
                tagline: "A full-stack C# ASP.NET web application using SQL Server, USDA Food API, and Google Image API. <span style = 'color: #84cc16; font-weight: bold;'><a href ='https://github.com/Thura-Mon/Calorie-Tracking---Goal-Fitness' >Check GitHub Repository</a></span>",
                images: [
            "images/CalorieTracker/createacc.png",
            "images/CalorieTracker/login.png",
            "images/CalorieTracker/otp.png",
            "images/CalorieTracker/resetpassword.png",
            "images/CalorieTracker/admin_dashboard.png",
            "images/CalorieTracker/admin_userdashboard.png",
            "images/CalorieTracker/admin_food.png",
            "images/CalorieTracker/home.png",
            "images/CalorieTracker/userfood.png",
            "images/CalorieTracker/calorieresult.jpeg",
            "images/CalorieTracker/bmi_result.png",
            "images/CalorieTracker/user_feedback.png",
            "images/CalorieTracker/update_profile.png"

        ],
            context: "Developed a comprehensive web application where users can log their daily calorie intake. The system allows users to search for food items from a pre-defined list or use an online API to search for new items, complete with food images and nutrition information. The system also tracks BMI and recommends goals (Maintain, Gain, Lose Weight).",
            role: "My role was to design and develop the entire application using C# ASP.NET. I was responsible for integrating two external APIs (USDA for nutrition data and Google for images), building the UI, and managing the SQL Server database.",
            process: "The project involved creating a user registration and login system with OTP functionality for password recovery. I implemented the logic to fetch and display data from the external APIs. The system then calculates daily calorie intake, BMI, and provides goal-based recommendations.",
            challenges: "A major challenge was seamlessly integrating external APIs to provide a vast database of food items and images. Handling API requests, parsing the data, and displaying it in a user-friendly manner required careful coding and error handling.",
            outcome: "The result is a robust and highly functional web application that simplifies calorie tracking and goal management. The API integrations provide a rich user experience, making food logging effortless.",
            impact: "This project highlights my ability to build complex, full-stack web applications with advanced features, demonstrating my proficiency in C# ASP.NET, SQL Server, and API integration.",
            learnings: "This project significantly improved my skills in C# and ASP.NET development, specifically in working with web forms, database management, and consuming APIs.",
            cta: [
                { label: "GitHub Repo", url: "https://github.com/Thura-Mon/Calorie-Tracking---Goal-Fitness" }
            ]
        },
            "gym-membership": {
                title: "Online Gym Membership System (Flutter & Laravel)",
                tagline: "A mobile and web system for gym management, developed with Flutter and a Laravel backend API. <span style = 'color: #84cc16; font-weight: bold;'><a href ='https://github.com/Thura-Mon/GymSystemBackend' >Check GitHub Repository</a></span>",
                images: [
                    "images/GymMembership/admin_dashboard.jpeg",
                    "images/GymMembership/admin_memberlist.jpeg",
                    "images/GymMembership/admin_package.jpeg",
                    "images/GymMembership/admin_scanning_device.jpeg",
                    "images/GymMembership/burmese_locale.jpeg",
                    "images/GymMembership/init.jpeg",
                    "images/GymMembership/slider.jpeg",
                    "images/GymMembership/member_instruction.jpeg",
                    "images/GymMembership/login.jpeg",
                    "images/GymMembership/forgot_password.jpeg",
                    "images/GymMembership/user_home.jpeg",
                    "images/GymMembership/select_language.jpeg",
                    "images/GymMembership/purchase_plan.jpeg",
                    "images/GymMembership/bmi.jpeg",
                    "images/GymMembership/drawer.jpeg"
                ],
                context: "Developed an online gym membership system, consisting of a mobile front-end for users, a Laravel backend and PostgreSql (Supabase). This project focused on creating a powerful and scalable backend to manage memberships and user data.",
                role: "I was the primary backend developer (almost 75% of work load in Backend) for this project, focusing heavily on the backend API development with Laravel. I also developed the core 20% of the mobile app's front-end using Flutter to ensure full-stack integration.",
                process: "The project began with a focus on designing API using Laravel. I then built the essential mobile views in Flutter that would communicate with this API for user authentication, profile management, and data retrieval from PostgreSQL using Supabase, 'Backend-as-a-Service (BaaS)'.",
                challenges: "A key challenge was building a scalable backend that could handle multiple user requests efficiently while maintaining security. The integration between the Flutter front-end and the Laravel API required precise data handling and validation.",
                outcome: "Successfully created a functional and scalable system with a strong backend foundation. The Laravel API is a powerful component that can support further development of the mobile app and other front-end clients.",
                impact: "This project demonstrates my expertise in both mobile and backend development, showing my ability to build a robust system from the ground up using modern technologies.",
                learnings: "This project provided valuable experience in Flutter development and solidified my skills in building professional, scalable, and secure backend systems with Laravel.",
                cta: [
                    { label: "GitHub Repo", url: "https://github.com/Thura-Mon/GymSystemBackend" }
                ]
            }
        };

        const mainContent = document.getElementById('main-content');
        const projectPage = document.getElementById('project-page');
        const projectContent = document.getElementById('project-content');
        const backButton = document.getElementById('back-button');
        const mainHeadingText = document.getElementById('heading-text');
        const subHeadingText = document.getElementById('sub-heading-text');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.topbar-link');
        const sections = document.querySelectorAll('section');
        const starContainers = document.querySelectorAll('.stars-container');
        const heroParticles = document.getElementById('hero-particles');
        
    
        const maxParticles = 15; 
        let currentParticles = 0;

        function backtohome() {
            mainContent.classList.remove('hidden');
            projectPage.classList.add('hidden');
        }

        function createCosmicParticle() {
            const body = document.body;
            if (currentParticles >= maxParticles) {
                return;
            }
            
            const particle = document.createElement('div');
            let colorClass;
            const colorRoll = Math.random();
            if (colorRoll < 0.7) {
                colorClass = 'particle-green'; 
            } else {
                colorClass = 'particle-white'; 
            }
            particle.className = `particle ${colorClass}`;

            const size = Math.random() * 3 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            particle.style.left = `${startX}vw`;
            particle.style.top = `${startY}vh`;
            
            particle.style.animationDuration = `${Math.random() * 5 + 2}s`; // animation movement speed
            particle.style.animationDelay = `${Math.random() * 5}s`;

            body.appendChild(particle);
            currentParticles++;

            particle.addEventListener('animationend', () => {
                particle.remove();
                currentParticles--;
            });
        }
        
        function typeWriter(text, element, callback) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    if (callback) callback();
                }
            }, 50);
        }

        function startTypingEffect() {
            typeWriter("Thura Mon", mainHeadingText, () => {
                setTimeout(() => {
                    typeWriter("Full Stack Developer", subHeadingText);
                }, 700);
            });
        }

        function showProjectPage(projectId) {
            const project = projectsData[projectId];
            if (!project) return;

            mainContent.classList.add('hidden');
            projectPage.classList.remove('hidden');

            // console.log(project.images)
            // Populate the project page with data
            projectContent.innerHTML = `
                <div class="space-y-4 w-full h-full">
                    <h1 class="text-4xl sm:text-5xl font-bold title-glow-gradient">${project.title}</h1>
                    <p class="text-xl text-secondary-text font-bold tracking-wide">${project.tagline}</p>
                    <div class="glass-card-content p-6 text-center w-full h-full">
                    <div class="relative w-full overflow-hidden h-48 rounded-md mb-4 shadow-lg w-full h-full">
                    <div class="flex transition-transform duration-500 ease-in-out transform translate-x-0 image-carousel" id="calorie-tracking-carousel-images w-full h-full">
                        <div class="flex transition-transform duration-500 ease-in-out transform translate-x-0 image-carousel w-full h-full" id="calorie-carousel-images-in-project">
                           
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">The Context</h3>
                        <p class="text-secondary-text leading-relaxed">${project.context}</p>
                    </div>
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">My Role</h3>
                        <p class="text-secondary-text leading-relaxed">${project.role}</p>
                    </div>
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">The Process</h3>
                        <p class="text-secondary-text leading-relaxed">${project.process}</p>
                    </div>
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">Challenges & Solutions</h3>
                        <p class="text-secondary-text leading-relaxed">${project.challenges}</p>
                    </div>
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">Outcome & Impact</h3>
                        <p class="text-secondary-text leading-relaxed">${project.outcome}</p>
                    </div>
                    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-primary-text mb-4">Learnings</h3>
                        <p class="text-secondary-text leading-relaxed">${project.learnings}</p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-4 mt-8">
                    ${project.cta.map(cta => `
                        <a href="${cta.url}" target="_blank" class="px-6 py-3 rounded-full text-lg font-bold bg-accent-green text-black btn-glow-hover">
                            ${cta.label}
                        </a>
                    `).join('')}
                </div>
            `;

            startCarousel(project.images);


            window.scrollTo(0, 0); 
        }

        function startCarousel(images = null) {

        if (images && images.length > 0) {
            document.querySelector('#calorie-carousel-images-in-project').innerHTML = images
                .map(img => `<img src="${img}" alt="carousel image" class="min-w-full h-full object-cover rounded-md" loading="lazy"/>`)
                .join('');
            }

            const carousels = document.querySelectorAll('.image-carousel');
                    carousels.forEach(carousel => {
                        let currentIndex = 0;
                        const images = carousel.querySelectorAll('img');
                        const totalImages = images.length;
                        const intervalTime = 3000;

                        function slideImages() {
                            currentIndex = (currentIndex + 1) % totalImages;
                            const translateX = -currentIndex * 100;
                            carousel.style.transform = `translateX(${translateX}%)`;
                        }
                        setInterval(slideImages, intervalTime);
                    });
        }

        function attachProjectCardListeners() {
            document.querySelectorAll('#projects .glass-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const projectId = card.getAttribute('data-project-id');
                    showProjectPage(projectId);
                });
            });
        }

        function handleMobileMenu() {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                document.body.classList.toggle('no-scroll');
            });
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    document.body.classList.remove('no-scroll');
                });
            });
        }

        function checkSectionVisibility() {
            const viewportHeight = window.innerHeight;
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= viewportHeight * 0.75 && rect.bottom >= viewportHeight * 0.25) {
                    section.classList.add('is-visible');
                    const sectionId = section.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        function createStar(container) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(star);
            star.addEventListener('animationend', () => {
                star.remove();
            });
        }

        // Parallax Effect
        function handleParallax(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            const heroParticles = document.getElementById('hero-particles');

            heroParticles.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
            
            const scrollY = window.scrollY;
            heroParticles.style.transform += `translateY(-${scrollY * 0.2}px)`; 
        }

        document.addEventListener('DOMContentLoaded', () => {
        
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });

            checkSectionVisibility();
            startTypingEffect();

            // Set up dynamic project page navigation
            backButton.addEventListener('click', () => {
                mainContent.classList.remove('hidden');
                projectPage.classList.add('hidden');
                window.scrollTo(0, 0);
            });

            attachProjectCardListeners();
            handleMobileMenu();

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    const sectionId = entry.target.getAttribute('id');
                    const correspondingLink = document.querySelector(`.topbar-link[href="#${sectionId}"]`);

                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (correspondingLink) {
                            navLinks.forEach(link => link.classList.remove('active'));
                            correspondingLink.classList.add('active');
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Start falling stars animation for each section
            starContainers.forEach(container => {
                setInterval(() => createStar(container), 100);
            });

            // Start cosmic particle effect across the body
            for (let i = 0; i < maxParticles; i++) {
                createCosmicParticle();
            }
            setInterval(createCosmicParticle, 50);
            startCarousel();

        });
        

const skillCards = document.querySelectorAll('.skill-card');
const frontendTrack = document.querySelector('.frontend-track');
const backendTrack = document.querySelector('.backend-track');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const track = card.closest('.skill-slide-track');
        const existingDisplay = card.querySelector('.proficiency-display');

        document.querySelectorAll('.proficiency-display').forEach(display => {
            display.remove();
        });
        if (frontendTrack) {
            frontendTrack.classList.remove('paused');
        }
        if (backendTrack) {
            backendTrack.classList.remove('paused');
        }

       
        if (existingDisplay) {
            return;
        }

        const proficiency = card.getAttribute('data-proficiency');
        if (proficiency) {
            const proficiencyDisplay = document.createElement('div');
            proficiencyDisplay.className = 'proficiency-display';
            proficiencyDisplay.textContent = `${proficiency}%`;
            card.appendChild(proficiencyDisplay);
            
           
            if (track === frontendTrack) {
                frontendTrack.classList.add('paused');
            } else if (track === backendTrack) {
                backendTrack.classList.add('paused');
            }
        }
    });
});

        let mouseX = 0;
        let mouseY = 0;


        function updateMousePosition(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        window.addEventListener('mousemove', updateMousePosition);

        function moveParticles() {
            const particleContainers = document.querySelectorAll('.hero-bg-particles, .hero-bg-particles-layer-2');
            particleContainers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const offsetX = ((mouseX - rect.width / 2) / rect.width) * 30; 
                const offsetY = ((mouseY - rect.height / 2) / rect.height) * 30; 
                container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
            requestAnimationFrame(moveParticles);
        }
        moveParticles();
