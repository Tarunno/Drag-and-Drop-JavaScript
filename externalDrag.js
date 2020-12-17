class ExternalDrag {
	constructor(filepad, viewpad) {
		this.filepad = filepad
		this.viewpad = viewpad
		this.handleEvents()
	}
	handleEvents(){
		this.filepad.addEventListener("dragover", this.dragOver)
		this.filepad.addEventListener("dragleave", this.dragLeave)
		this.filepad.addEventListener("drop", this.dragDrop)
	}
	dragOver(e){
		e.preventDefault()
		this.style.background = '#92B8DE'
		this.style.transition = '.3s'
	}
	dragLeave(){
		this.style.background = '#ADBEF5'
		this.style.transition = '.3s'
	}
	dragDrop(e){
		e.preventDefault()
		const file = e.dataTransfer.files

		const inputField = document.querySelector("input")
		inputField.files = file

		const reader = new FileReader()
		reader.readAsDataURL(file[0])
		reader.onload = () => {
			document.querySelector('.view').style.background = `url(${reader.result}) no-repeat center center/cover`
		}
	}
}
const filePad = document.querySelector(".file-pad")
const view = document.querySelector(".view")
new ExternalDrag(filePad, view)
