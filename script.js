const cardContainer = document.querySelector( '#card__container' );
const buttonNav = document.querySelector(".bar");
const navBar = document.querySelector('#navBar');

const fetchServices = async () => {
  try {
    const response = await fetch( "./services.json" );
    let data = await response.json();
    return data
  } catch {
    console.error( "Fetching services failed:", error );
    return null;
  }
}

const printCardServices = async () => {
  const services = await fetchServices();
  if ( services ) {
    
    services.forEach( service => {
      const { name, description, icon } = service
      
      const article = document.createElement( "article" )
      article.classList.add( "custom-size-card", "bg-white", "d-flex", "flex-column", "align-items-center", "justify-content-center", "custom-rounded" );

      const div = document.createElement( "div" )
      div.classList.add( "border", "d-flex", "justify-content-center", "align-items-center", "rounded-circle", "custom-blue", "text-white", "fw-lighter", "custom-icon-card", "mb-3" )
      const i = document.createElement( "i" )
      i.classList.add( icon[0], icon[1] )
      div.appendChild( i )

      const h5 = document.createElement( "h5" )
      h5.classList.add( "fw-semibold", "pb-3", "text-center" )
      h5.textContent = name

      const p = document.createElement( "p" )
      p.classList.add( "text-center", "lh-lg", "pb-5", "pb-xl-2", "pb-xxl-5" )
      p.textContent = description

      const button = document.createElement( "button" )
      button.type = "button"
      button.classList.add( "btn", "btn-outline-secondary", "py-1", "px-4", "fw-semibold", "custom-rounded" )
      button.textContent = "Learn More"

      article.append( div, h5, p, button )
      cardContainer.appendChild(article)

    })
  }
}

printCardServices()


buttonNav.addEventListener( "click", () => {
  buttonNav.classList.toggle( "active" );
  navBar.classList.toggle( "active" );
})

navBar.addEventListener( "click", () => {
  buttonNav.classList.toggle( "active" );
  navBar.classList.toggle( "active" );
})

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});


window.addEventListener('scroll', function() {
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    var sectionId = link.getAttribute('href');
    var section = document.querySelector(sectionId); 
    if (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      
      if (scrollPos >= sectionTop - 80 && scrollPos < sectionTop + sectionHeight - 80) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});