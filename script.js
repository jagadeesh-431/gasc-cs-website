// Live Clock Display
function showTime() {
	const now = new Date();
	const options = { 
		weekday: 'short', 
		year: 'numeric', 
		month: 'short', 
		day: 'numeric',
		hour: '2-digit', 
		minute: '2-digit', 
		second: '2-digit'
	};
	const timeElement = document.getElementById('currentTime');
	if (timeElement) {
		timeElement.innerHTML = '🕐 ' + now.toLocaleDateString('en-IN', options);
	}
}

// Initialize clock
showTime();
setInterval(showTime, 1000);

// Scroll to top functionality
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add scroll-to-top button dynamically
document.addEventListener('DOMContentLoaded', function() {
	// Create scroll-to-top button
	const scrollBtn = document.createElement('button');
	scrollBtn.innerHTML = '↑';
	scrollBtn.id = 'scrollTopBtn';
	scrollBtn.style.cssText = `
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #004080, #002050);
		color: white;
		border: none;
		font-size: 24px;
		cursor: pointer;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
		z-index: 999;
		box-shadow: 0 4px 15px rgba(0, 64, 128, 0.4);
	`;
	document.body.appendChild(scrollBtn);

	// Show/hide scroll button based on scroll position
	window.addEventListener('scroll', function() {
		if (window.scrollY > 300) {
			scrollBtn.style.opacity = '1';
			scrollBtn.style.visibility = 'visible';
		} else {
			scrollBtn.style.opacity = '0';
			scrollBtn.style.visibility = 'hidden';
		}
	});

	// Scroll to top on click
	scrollBtn.addEventListener('click', scrollToTop);

	// Add hover effect
	scrollBtn.addEventListener('mouseenter', function() {
		this.style.transform = 'scale(1.1)';
	});
	scrollBtn.addEventListener('mouseleave', function() {
		this.style.transform = 'scale(1)';
	});

	// Add animation on scroll for sections
	const sections = document.querySelectorAll('section');
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	sections.forEach(section => {
		section.style.opacity = '0';
		section.style.transform = 'translateY(40px)';
		section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
		observer.observe(section);
	});
});

// Console welcome message
console.log('%c🎓 Welcome to GASC Sendamangalam - CS Department', 
	'color: #004080; font-size: 18px; font-weight: bold;');
console.log('%c📧 Contact: keynarunkarth@gmail.com', 
	'color: #666; font-size: 12px;');