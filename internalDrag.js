class InternalDrag{
	constructor(empties, fill){
		this.empties = empties
		this.fill = fill
		this.handleEmpty()
		this.handleFill()
	}
	handleFill(){
		this.fill.addEventListener("dragstart", this.dragStart)
		this.fill.addEventListener("dragend", this.dragEnd)
	}
	dragStart(){
		setTimeout(() => {
			this.className = 'invisible'
		}, 10)
	}
	dragEnd(){
		this.className = fill.className
	}
	handleEmpty(){
		const newFill = this.fill
		var classname = this.fill.className
		for(const empty of this.empties){
			empty.addEventListener('dragover', dragOver)
			empty.addEventListener('dragleave', dragLeave)
			empty.addEventListener('drop', dragDrop)
		}
		function dragOver(e){
			e.preventDefault()
			this.classList.add('border')
		}
		function dragLeave(e){
			e.preventDefault()
			this.classList.remove('border')
		}
		function dragDrop(e){
			e.preventDefault()
			this.classList.remove('border')
			newFill.className = classname
			this.appendChild(newFill)
		}
	}
}
const empties = document.querySelectorAll(".empty")
const fill = document.querySelector(".fill")
new InternalDrag(empties, fill)
