import './styles.css';

let navArr = [
  {
    title: 'DOWNLOADS',
    id: 'downloads-nav-link',
    href: '#downloads',
    sectionId: 'section#downloads-section'
  },
  {
    title: 'SUPPORT',
    id: 'support-nav-link',
    href: '#support',
    sectionId: 'section#support-section'
  },
  {
    title: 'DONATIONS',
    id: 'donations-nav-link',
    href: '#donations',
    sectionId: 'section#donations-section'
  }
];

$(document).ready(function() {
  const pathHash = window.location.hash;
  const currentSection = navArr.find(navItem => navItem.href === pathHash);
  if (currentSection) {
    currentSection.active = true;
    const navArrWithActiveFlag = navArr.map((navItem) => {
      if (navItem.title === currentSection.title) {
        navItem = currentSection; // eslint-disable-line
      }
      return navItem;
    });
    navArr = navArrWithActiveFlag;
  }
  $('nav').append(navigation(navArr));
  const sections = $('section');
  const nav = $('nav');
  const navHeight = nav.outerHeight();
  bindScrollHandlersToNavElements(navArr);
  $(window).scroll(_.debounce(() => handleScroll.call(this, sections, nav, navHeight), 150));
  return (currentSection ?
    $(currentSection.sectionId)[0].scrollIntoView({behavior: 'instant'}) : undefined
  );
});


function handleScroll(sections, nav, navHeight) {
  const currPos = $(this).scrollTop();
  sections.each(function() {
    const top = $(this).offset().top - navHeight;
    const bottom = top + $(this).outerHeight();
    if (currPos >= top && currPos <= bottom) {
      nav.find('a').removeClass('active-nav-link');
      sections.removeClass('active-nav-link');
      $(this).addClass('active-nav-link');
      const href = $(this).attr('id')
        .split('-')
        .splice(0, 1)
        .join('');
      nav.find(`a[href="#${href}"]`).addClass('active-nav-link');
    }
  });
}

function bindScrollHandlersToNavElements(nav) {
  nav.forEach(e =>
    $('#' + e.id).click(function () {
      $('#nav-items-container a').each(function(index, value) {
        $(value).removeClass('active-nav-link');
      });
      $('#' + e.id).addClass('active-nav-link');
      return $(e.sectionId)[0].scrollIntoView({behavior: 'smooth'});
    })
  );
}

function navigation(_navArr) {
  const navIterator = () => _navArr.map(
    navItem => (`<a id=${navItem.id} href=${navItem.href} class=${navItem.active ? 'active-nav-link' : ''}>${navItem.title}</a>`)
  ).join('');
  return (
    '<div id="nav-items-container">' +
      navIterator() +
    '</div>'
  );
}
