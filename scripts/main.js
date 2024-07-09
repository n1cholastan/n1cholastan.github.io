document.addEventListener('DOMContentLoaded', () => {
  const sections = ['home', 'projects', 'contact', 'cv'];
  const navLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    let currentSection = '';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('underline', 'text-highlight');
        link.classList.remove('text-black')
      } else {
        link.classList.remove('underline', 'text-highlight');
        link.classList.add('text-black')
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
        const description = header.nextElementSibling;
        const chevronUp = header.querySelector('.chevron-up');
        const chevronDown = header.querySelector('.chevron-down');
        description.classList.toggle('hidden');
        chevronUp.classList.toggle('hidden');
        chevronDown.classList.toggle('hidden');
    });
  });

  document.querySelectorAll(".image-carousel").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    const showImage = index => {
      images.forEach((img, idx) => {
        img.classList.toggle("hidden", idx !== index);
      })
    };
    showImage(currentIndex)

    carousel.querySelector(".prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex)
    })
    carousel.querySelector(".next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1 + images.length) % images.length;
      showImage(currentIndex)
    })
  })
});


