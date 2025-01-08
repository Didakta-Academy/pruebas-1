/* 


let rice = 30;
let fish = 20;
let seaweed = 10;


document.getElementById("rice-amount").innerHTML = rice;
document.getElementById("fish-amount").innerHTML = "20";
document.getElementById("seaweed-amount").innerHTML = "10";

document.getElementById("button1").addEventListener("click", makeSushi);

function makeSushi() {
    console.log("Time to make some sushi");
    rice = rice - 5;
    fish = fish -2;
    seaweed = seaweed - 1;

    if (rice < 0) {
        alert("You ran out of rice!");
    }
    if (fish < 0) {
        alert("You ran out of fish!");
    }
    if (seaweed < 0) {
        alert("You ran out of seaweed!");
    }

    showTheCurrentValues();
}

function showTheCurrentValues() {
    document.getElementById("rice-amount").innerHTML = rice;
    document.getElementById("fish-amount").innerHTML = fish;
    document.getElementById("seaweed-amount").innerHTML = seaweed;
}

/**
 * Cosas que tengo que hacer:
 *      Cada vez que clica
 *      Tengo que restar X a cada uno de estos
 *      Tengo que recordar cuanto hay de cada cosa asi puedo ir restando



 */


document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.mujer-image');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.classList.add('active');
        }
      });
    }, {
      threshold: 0.5 // El 50% del elemento debe estar visible
    });
  
    observer.observe(img);
  });


document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.anciano-image');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.classList.add('active');
        }
      });
    }, {
      threshold: 0.5 // El 50% del elemento debe estar visible
    });
  
    observer.observe(img);
  });

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.anciano-comment');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.classList.add('active');
        }
      });
    }, {
      threshold: 0.5 // El 50% del elemento debe estar visible
    });
  
    observer.observe(img);
  });

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.mujer-comment');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.classList.add('active');
        }
      });
    }, {
      threshold: 0.5 // El 50% del elemento debe estar visible
    });
  
    observer.observe(img);
  });