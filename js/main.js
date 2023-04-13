//SIDEBAR ELEMENTS
const infoBtn = document.querySelector('.navbar__info-btn')
const sidebar = document.querySelector('.sidebar')
const sidebarCloseBtn = document.querySelector('.sidebar__close-btn')
//BURGER MENU ELEMENTS
const burgerBtn = document.querySelector('.navbar__burger-btn')
const menuMobile = document.querySelector('.navbar__menu-mobile')
const menuMobileLinks = menuMobile.querySelectorAll('.navbar__link')
//ACCORIDON ELEMENTS
const allFaqQuestions = document.querySelectorAll('.faq__question')
const allFaqAccordions = document.querySelectorAll('.faq__accordion')

//FUNCTIONS
const handleNav = () => {
	menuMobile.classList.toggle('active')
}

const handleAccordion = event => {
	const accordion = event.target.parentElement
	accordion.classList.toggle('active')
}

const updateFooterYear = () => {
	const footerYear = document.querySelector('.footer__year')
	year = new Date().getFullYear()
	footerYear.innerText = year
}

//EVENT LISTENERS
burgerBtn.addEventListener('click', handleNav)

menuMobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuMobile.classList.remove('active')
	})
})

allFaqQuestions.forEach(question => {
	question.addEventListener('click', handleAccordion)
})

infoBtn.addEventListener('click', () => {
	sidebar.classList.add('active')
})

sidebarCloseBtn.addEventListener('click', () => {
	sidebar.classList.remove('active')
})

updateFooterYear()
