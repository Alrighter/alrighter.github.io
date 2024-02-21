const dots = document.querySelectorAll('.timeline a');
const experienceDots = document.querySelectorAll('.experience_timeline a');
const experienceInfo = document.querySelectorAll('.experience_info');
const texts = document.querySelectorAll('.timeline .text');
const main = document.querySelector('.main');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');
const petProjects = document.querySelector('.pet_projects');
const experienceParagraph = document.getElementById("experience_text");
const educationParagraph = document.getElementById("education_text");
const petProjectsParagraph = document.getElementById("pet_projects_text");

dots.forEach((dot, index) => {
  let timeout;

  dot.addEventListener('mouseover', () => {
    clearTimeout(timeout);
    //make text highlighted
    texts[index].classList.add('highlighted');
    
  });

  dot.addEventListener('mouseout', () => {
    timeout = setTimeout(() => {
        texts[index].classList.remove('highlighted');
    }, 200);
  });
});

function selectDot(dot) {
    dots.forEach(point => {
      point.classList.remove('selected');
    });
    
    dot.classList.add('selected');
}

function selectExperienceDot(dot) {
    experienceDots.forEach(point => {
      point.classList.remove('selected');
      
    });
    
    dot.classList.add('selected');
}

function selectMain() {
    main.classList.add('show');
    experience.classList.remove('show');
    education.classList.remove('show');
    skills.classList.remove('show');
    petProjects.classList.remove('show');
}

function selectExperience() {
    main.classList.remove('show');
    experience.classList.add('show');
    education.classList.remove('show');
    skills.classList.remove('show');
    petProjects.classList.remove('show');
}

function selectEducation() {
    main.classList.remove('show');
    experience.classList.remove('show');
    education.classList.add('show');
    skills.classList.remove('show');
    petProjects.classList.remove('show');
}

function selectSkills() {
    main.classList.remove('show');
    experience.classList.remove('show');
    education.classList.remove('show');
    skills.classList.add('show');
    petProjects.classList.remove('show');
}

function selectPetProjects() {
    main.classList.remove('show');
    experience.classList.remove('show');
    education.classList.remove('show');
    skills.classList.remove('show');
    petProjects.classList.add('show');
}

function selectWeb() {
    experienceInfo.forEach(info => {
        info.style.display = 'none';
    }
    );

    document.querySelector('.O21').style.display = 'block';
}

function selectAsp() {
    experienceInfo.forEach(info => {
        info.style.display = 'none';
    }
    );

    document.querySelector('.O22').style.display = 'block';
}

function selectVision() {
    experienceInfo.forEach(info => {
        info.style.display = 'none';
    }
    );

    document.querySelector('.O23').style.display = 'block';
}

function updateText(mediaQuery) {
    if (window.matchMedia("(max-width: 570px)").matches) {
        experienceParagraph.innerHTML = "Exp";
        educationParagraph.innerHTML = "Edu";
        petProjectsParagraph.innerHTML = "Pets";
    } else {
        experienceParagraph.innerHTML = "Experience";
        educationParagraph.innerHTML = "Education";
        petProjectsParagraph.innerHTML = "Pet Projects";
    }
  }

window.onload = function() {updateText(mediaQuery); };
var mediaQuery = window.matchMedia("(max-width: 570px)");
mediaQuery.addListener(updateText);
