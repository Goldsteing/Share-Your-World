// Observers
const slot1 = document.querySelector("#slot-1");
const slot1observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("fade-in");
    }
}, {threshold: 0.5});
slot1observer.observe(slot1);
