(function() {
	"use strict";

	// Add Scripts Here
    let showDetails = document.getElementById('show');
	let hideDetails = document.getElementById('hide');
	let emailDetails = document.getElementById('email-details');
	let emailBox = document.getElementById('email-box');
	let forwardToggleOn = document.getElementById('toggle-on');
	let forwardToggleOff = document.getElementById('toggle-off');
	let deleteButton = document.getElementById('delete-button');
	let undeleteButton = document.getElementById('undelete-button');
	let aliasButton = document.getElementById('alias-button');
	let accountHeading = document.getElementById('account-heading');
	let accountNameHeading = document.getElementById('account-name-heading');
	let editAccountHeading = document.getElementById('edit-account-heading');
	let inputForm = document.getElementById('input-form');
	let accountButton = document.getElementById('account-button');
	let mobileMenuOpen = document.getElementById('open-menu');
	let mobileMenuClosed = document.getElementById('close-menu');
	let mobileHome = document.getElementById('menu-home');
	let mobileFAQ = document.getElementById('menu-faq');


	mobileMenuOpen.addEventListener('click', () =>{
		mobileMenuOpen.style.display = 'none';
		mobileMenuClosed.style.display = 'block';
		mobileHome.style.display = 'block';
		mobileFAQ.style.display = 'block';
	});

	mobileMenuClosed.addEventListener('click', () => {
		mobileMenuClosed.style.display = 'none';
		mobileMenuOpen.style.display = 'block';
		mobileHome.style.display = 'none';
		mobileFAQ.style.display = 'none';
	});

	accountHeading.addEventListener('click', () => {
		accountHeading.style.display = 'none';
		inputForm.style.display = 'block';
	});

	accountButton.addEventListener('click', () => {
		let accountName = document.getElementById('account-name').value;
		// accountHeading.style.display = 'block';
		inputForm.style.display = 'none';
		accountNameHeading.style.display = 'block';
		accountNameHeading.innerHTML = accountName ;
		editAccountHeading.style.display = 'block';
	});

	editAccountHeading.addEventListener('click', () => {
		inputForm.style.display = 'block';
		editAccountHeading.style.display = 'block';
	});

	let show = () => {
		emailDetails.style.display = 'flex';
		hideDetails.style.display = 'block';
		showDetails.style.display = 'none';
	};

	let hide = () => {
		emailDetails.style.display = 'none';
		hideDetails.style.display = 'none';
		showDetails.style.display = 'block';
	};
	
	showDetails.addEventListener('click', show);
	hideDetails.addEventListener('click', hide);

	let toggleOn = () => {
		forwardToggleOn.style.display = 'block';
		forwardToggleOff.style.display = 'none';
	};

	let toggleOff = () => {
		forwardToggleOn.style.display = 'none';
		forwardToggleOff.style.display = 'block';
	};

	forwardToggleOn.addEventListener('click', toggleOff);
	forwardToggleOff.addEventListener('click', toggleOn);

	aliasButton.addEventListener('click', () => {
		alert('This creates a new Alias!')
	});

	deleteButton.addEventListener('click', () => {
		emailBox.style.display = 'none';
		emailDetails.style.display = 'none';
		undeleteButton.style.display = 'block';
	});

	undeleteButton.addEventListener('click', () => {
		emailBox.style.display = 'flex';
		// emailDetails.style.display = 'flex';
		undeleteButton.style.display = 'none';
		hide();
	});

})();