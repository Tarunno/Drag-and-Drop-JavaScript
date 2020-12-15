class Drag{
	constructor(empties, fill){
		this.empties = empties
		this.fill = fill
		this.handleEmpty()
		this.handleFill()
	}
	handleFill(){
		fill.addEventListener("dragstart", this.dragStart)
		fill.addEventListener("dragstart", this.dragEnd)
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
			empty.addEventListener('dragenter', dragEnter)
			empty.addEventListener('dragleave', dragLeave)
			empty.addEventListener('drop', dragDrop)
		}
		function dragOver(e){
			e.preventDefault()
		}
		function dragEnter(){
			this.classList.add('border')
		}
		function dragLeave(){
			this.classList.remove('border')
		}
		function dragDrop(e){
			this.classList.remove('border')
			newFill.className = classname
			this.appendChild(newFill)
		}
	}
}
const empties = document.querySelectorAll(".empty"),
	fill = document.querySelector(".fill")

const drag = new Drag(empties, fill)
