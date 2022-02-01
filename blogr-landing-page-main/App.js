const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");
const topNav = document.querySelector(".navbar > nav");
const navIcon = document.querySelector(".nav-icon");

product.addEventListener('click', function(event) {
    if(product.children[1].style.display === 'none') {
        product.children[1].style.display = 'flex';
    } else if (product.children[1].style.display = 'flex') {
        product.children[1].style.display = 'none';
    }
});

company.addEventListener('click', function(event) {
    if(company.children[1].style.display === 'none') {
        company.children[1].style.display = 'flex';
    } else if (company.children[1].style.display = 'flex') {
        company.children[1].style.display = 'none';
    }
});

connect.addEventListener('click', function(event) {
    if(connect.children[1].style.display === 'none') {
        connect.children[1].style.display = 'flex';
    } else if (connect.children[1].style.display = 'flex') {
        connect.children[1].style.display = 'none';
    }
});

navIcon.addEventListener('click', function(event) {
    if(topNav.style.display === 'none') {
        topNav.style.display = 'flex';
        navIcon.innerHTML = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/>
    </svg>`;
    } else if (topNav.style.display = 'flex') {
        topNav.style.display = 'none';
        navIcon.innerHTML = `<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/>
        </g>
    </svg>`;
    }
});