var app = new Vue({
	el: '#app',
	data: {
		appShow: true
	},
	methods: {
		bosishDiniy() {
			window.location.href = 'diniy.html';
		},
		bosishDunyoviy() {
			window.location.href = 'dunyoviy.html';
		},
	}
})
var dunyoviy = new Vue({
	el: '#dunyoviy',
	data: {
		burgerChangeStyle: {
			burgerButton: true,
			burgerButtonChange: false
		},
		pagesList: {
			pagesListOn: false
		},
		pageListSectionStyle: {
			transform: 'translateY(-100%)',
			position: 'absolute'
		},
		searchButtonStyle: {
			left: '5%'
		},
		leftBody: false,
		styleLeft: {
			transform: 'auto',
			position: 'relative'
		},
		angleStyle: {
			transform: 'rotate(0deg)'
		},
		wSize : 0,
	},
	methods: {
		burgerChange() {
			this.burgerChangeStyle.burgerButtonChange = !this.burgerChangeStyle.burgerButtonChange;
			this.pagesList.pagesListOn = !this.pagesList.pagesListOn;
			if (this.pagesList.pagesListOn) {
				this.pageListSectionStyle.transform = 'translateY(0)';
				this.pageListSectionStyle.position = 'sticky';
			} else {
				this.pageListSectionStyle.transform = 'translateY(-100%)';
				this.pageListSectionStyle.position = 'absolute';
			}
		},
		inputin() {
			this.searchButtonStyle.left = '105%';
		},
		inputout(event) {
			this.searchButtonStyle.left = '5%';
			event.target.value = '';
		},
		leftClick() {
			this.leftBody = !this.leftBody;
			if (this.leftBody) {
				this.styleLeft.transform = 'translateX(0)';
				this.angleStyle.transform = 'rotate(180deg)';
			} else {
				this.styleLeft.transform = 'translateX(-100%)';
				this.angleStyle.transform = 'rotate(0deg)';
			}
		},
	}
})
var diniy = new Vue({
	el: '#diniy',
	data: {
		burgerChangeStyle: {
			burgerButton: true,
			burgerButtonChange: false
		},
		pagesList: {
			pagesListOn: false
		},
		pageListSectionStyle: {
			transform: 'translateY(-100%)',
			position: 'absolute'
		},
		searchButtonStyle: {
			left: '5%'
		},
		leftBody: false,
		styleLeft: {
			transform: 'auto',
			position: 'relative'
		},
		angleStyle: {
			transform: 'rotate(0deg)'
		},
		wSize : 0,
	},
	methods: {
		burgerChange() {
			this.burgerChangeStyle.burgerButtonChange = !this.burgerChangeStyle.burgerButtonChange;
			this.pagesList.pagesListOn = !this.pagesList.pagesListOn;
			if (this.pagesList.pagesListOn) {
				this.pageListSectionStyle.transform = 'translateY(0)';
				this.pageListSectionStyle.position = 'sticky';
			} else {
				this.pageListSectionStyle.transform = 'translateY(-100%)';
				this.pageListSectionStyle.position = 'absolute';
			}
		},
		inputin() {
			this.searchButtonStyle.left = '105%';
		},
		inputout(event) {
			this.searchButtonStyle.left = '5%';
			event.target.value = '';
		},
		leftClick() {
			this.leftBody = !this.leftBody;
			if (this.leftBody) {
				this.styleLeft.transform = 'translateX(0)';
				this.angleStyle.transform = 'rotate(180deg)';
			} else {
				this.styleLeft.transform = 'translateX(-100%)';
				this.angleStyle.transform = 'rotate(0deg)';
			}
		},
	}
})