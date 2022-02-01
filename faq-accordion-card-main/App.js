let faqs = document.querySelector(".faq-questions");
let faqOpened = document.getElementsByClassName("opened");

for (let i = 0; i < faqs.children.length; i++) {
    faqs.children[i].addEventListener('click', function() {
        faqs.children[i].classList.toggle('opened');
        console.log(faqs.children[i]);
    });
}