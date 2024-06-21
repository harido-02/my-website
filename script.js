document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            contents.forEach(content => content.style.display = 'none');
            document.getElementById(button.dataset.page).style.display = 'block';
        });
    });

        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);
    
        // Create stars dynamically
        for (let i = 0; i < 500; i++) {
            const star = document.createElement('div');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            starsContainer.appendChild(star);
        }
    
        // Move stars based on cursor movement
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
    
            starsContainer.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
        });
    });
