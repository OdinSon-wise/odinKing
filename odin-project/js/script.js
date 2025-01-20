    // h1 span color change for each letter like it sliding
    const colors = ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'];
    let colorIndex = 0;

    const letters = document.querySelectorAll('.color-change');

    function changeLetterColors() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.color = colors[colorIndex];
            }, index * 100); // Delay each letter's color change
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeLetterColors, 1000); // Change colors every second
        // dropdown
        const dropbtn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');
        dropbtn.addEventListener('click', () => {
            dropdownContent.classList.toggle('active');
        });

        // Alert for resume download
        const downloadResume = document.getElementById('downloadResume');
        downloadResume.addEventListener('click', () => {
            alert('Your resume has been downloaded!');
        });