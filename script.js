 const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        const body = document.body;

        const themeToggle = document.getElementById('theme-toggle');

        // Load theme from localStorage

        const savedTheme = localStorage.getItem('theme') || 'light';

        body.classList.add(savedTheme);

        body.classList.remove(savedTheme === 'light' ? 'dark' : 'light');

        // Toggle theme

        themeToggle.addEventListener('click', () => {

            if (body.classList.contains('light')) {

                body.classList.replace('light', 'dark');

                localStorage.setItem('theme', 'dark');

            } else {

                body.classList.replace('dark', 'light');

                localStorage.setItem('theme', 'light');

            }

        });

        // Load checkbox states from localStorage (default unchecked)

        checkboxes.forEach(checkbox => {

            const id = checkbox.dataset.id;

            const savedState = localStorage.getItem(`checkbox_${id}`);

            checkbox.checked = savedState === 'true';

        });

        // Save checkbox states on change

        checkboxes.forEach(checkbox => {

            checkbox.addEventListener('change', () => {

                const id = checkbox.dataset.id;

                localStorage.setItem(`checkbox_${id}`, checkbox.checked);

            });

        });
