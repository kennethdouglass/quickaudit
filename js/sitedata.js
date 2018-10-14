

var headerData = {
	title: "Website Visual Audit",
	subject: "Tango Card", // Site being audited
	color: "rgba(241,101,33,1)" // Branded color of the site audited
};

var introData = {
	header: "Introduction",
	url: 'http:tangocard.com',
	title: 'Tango Card',
	paras: [
		'Simple audit of the <a href="{{URL}}" class="new-win">{{TITLE}}</a> website.',
		'This is not a comprehensive audit of the entire website architecture. The issues reported here are the result of a soft review of the website\'s content itself i.e. the bugs reported here were not the result of a concentrated QA effort to "break" the site. They were identified in a casual navigation of the site\'s pages.',
		'Suggested solutions are provided for each identified issue.',
		'Best viewed on a laptop/desktop screen.',
		'There is no navigation in place for this page; Please manually scroll :).'
	]
};

var bugData = {
	bugs:  [
		{
			id: "bug1",
			header: "Issue I",
			page: "Homepage",
			url: "https://www.tangocard.com/",
			desc: [
				'Horizontal scroll over entire page.',
				'Viewed in Chrome v.68 &amp; Firefox v.59'
			],
			sshot1: "screenshot1a.png",
			solhdr: "Suggested Solution:",
			paras: [
				'Horizontal scroll issues are often difficult to trace and sometimes even more difficult to fix.',
				'What I found here was left and right negative margins on the bootstrap class "row".',
				'Because the problem stems from a class, to fix this by simply removing those styles might affect other instances of the class i.e. introduce other issues.',
				'One quick solution is to audit the application of that class throughout the site, remove it if deemed okay to do so, or override the instance of the class for this particular instance on the homepage.'
			],
			sshot2: "screenshot2a.png"
		},
		{
			id: "bug2",
			header: "Issue II",
			page: "Use Case Studies",
			url: "https://www.tangocard.com/incentive-use-case-studies/",
			desc: [
				'An assumed bottom margin between the grid squares is absent.',
				'Viewed in Chrome v.68 &amp; Firefox v.59'
			],
			sshot1: "screenshot1b.png",
			solhdr: "Suggested Solution:",
			paras: [
				'The child div inside each .panel-grid-cell contains two classes that cancel each other out: panel-first-child &amp; panel-last-child.',
				'Another problematic issue is that each of these divs are classes with "so-panel" and each then has the "last-child" selector assigned to it: .so-panel:last-child. However each div IS the last-child, so this selector always applies.',
				'In both cases above, each "last-child" rule affects a bottom margin on the element. The last-child selector is applied twice due to certain applied specificity (ID -> CLASS) for two different IDs. Removing those properties solves the issue. However:',
				'Removing the last-child selector <i>should</i> cause the panel-last-child class to be applied. But in this case specificity of the base class .so-panel is overriding the expected result. See notes in the screenshot.',
				'These CSS rules appear to be dynamically generated. If that is the case, the logic should be investigated in order to fix these issues.',
				'Overall, this particular bug brings to the surface other potential issues unseen at this time.'
			],
			sshot2: "screenshot2b.png"
		}
	]
};

var cookieData = {
	message: "This website uses cookies to ensure you get the best experience on our website. (Not really, not here.)",
	button: "Got it!"
};

