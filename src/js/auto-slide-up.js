	! function () {
		let specialTags = document.querySelectorAll('[data-x]')
		for (let i = 0; i < specialTags.length; i++) {
			specialTags[i].classList.add('offset')
		}
		findClosestAndRemoveOffset()
		window.addEventListener('scroll', function (a) {
			findClosestAndRemoveOffset()
		})

		/*函数*/
		function findClosestAndRemoveOffset() {
			let specialTags = document.querySelectorAll('[data-x]')
			let minIndex = 0
			for (let i = 0; i < specialTags.length; i++) {
				if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
					minIndex = i
				}
			}
			specialTags[minIndex].classList.remove('offset')


			let id = specialTags[minIndex].id
			let aTag = document.querySelector('a[href="#' + id + '"]')
			let li = aTag.parentNode
			let brothersAndMe = li.parentNode.children
			for (let i = 0; i < brothersAndMe.length; i++) {
				brothersAndMe[i].classList.remove('highlight')
			}
			li.classList.add('highlight')
		}
		let liTags = document.querySelectorAll('nav > ul > li')
		for (let i = 0; i < liTags.length; i++) {
			liTags[i].onmouseenter = function (x) {
				x.currentTarget.classList.add('active')
			}
			liTags[i].onmouseleave = function (x) {
				x.currentTarget.classList.remove('active')
			}
		}
	}.call()