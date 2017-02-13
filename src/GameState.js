
class Element{
	constructor(id,color){
		this.id = id;
		this.color = color
	}
}

class GameState {
	constructor(size=5,colors=[],obj){
		this.size = size;
		this.rows = generateInitialRows(size,colors);
		this.appObj = obj;
	}
	checkIfWon(color){
		let result = true;
		for(let i=0;i<this.rows.length;i++){
			for(let j=0;j<this.rows[i].length;j++){
				if(this.rows[i][j].color !== color){
					result = false;
					break;
				}
			}
		}
		if(result){
			this.appObj.onWin();
		}
	}
	colorFill(color){
		let startingColor = this.rows[0][0].color; 
		let elementsToChange = this.getAllAdjacentElementsByColor(startingColor);

		for(let i=0;i<elementsToChange.length;i++){
			elementsToChange[i].color = color;
		}
		this.checkIfWon(color);
	}

	getAllAdjacentElementsByColor(color){
		let elements = [],
			base = [],
			nextStep  = true,
			foundElements,
			xd = 0;
		elements.push(this.rows[0][0]);
		base.push(this.rows[0][0]);
		while(nextStep){
			foundElements = this.lookForNeighboors(base,elements.slice(0),color);
			xd++;
			if(foundElements.length>0){
				for(let i=0;i<foundElements.length;i++){
					elements.push(foundElements[i]);
				}
				base = foundElements;
				if(xd===300){
					break;
				}
			}else{
				nextStep = false;
			}
		}

		return elements;
	}
	isAlreadyFound(element,arr){
		let result = false;
		for(let i=0;i<arr.length;i++){
			if(element === arr[i]){
				result = true;
				break;
			}
		}
		return result;
	}
	isInBase(element,arr){
		let result = false;
		for(let i=0;i<arr.length;i++){
			if(element === arr[i]){
				result = true;
				break;
			}
		}
		return result;
	}

	lookForNeighboors(base,alreadyFoundElements,color){
		let nextBase = [];
		let found = alreadyFoundElements;
		for(let i=0;i<base.length;i++){
			let row = Math.floor(base[i].id / this.size),
			 	col = base[i].id - row*this.size,
			 	elementToCheck;
			
			//check up
			if(row > 0){
				elementToCheck = this.rows[row-1][col];
				if(!this.isInBase(elementToCheck,base)){
					if(elementToCheck.color === color){
						if(!this.isAlreadyFound(elementToCheck,found)){
							found.push(elementToCheck);
							nextBase.push(elementToCheck);
						}	
					}	
				}
			}
			//check down
			if(row < (this.size-1)){
				elementToCheck = this.rows[row+1][col];
				if(!this.isInBase(elementToCheck,base)){
					if(elementToCheck.color === color){
						if(!this.isAlreadyFound(elementToCheck,found)){
							found.push(elementToCheck);
							nextBase.push(elementToCheck);
						}	
					}	
				}
			}
			//check left
			if(col > 0){
				elementToCheck = this.rows[row][col-1];
				if(!this.isInBase(elementToCheck,base)){
					if(elementToCheck.color === color){
						if(!this.isAlreadyFound(elementToCheck,found)){
							found.push(elementToCheck);
							nextBase.push(elementToCheck);
						}	
					}	
				}
			}
			//check right
			if(col < (this.size-1)){
				elementToCheck = this.rows[row][col+1];
				if(!this.isInBase(elementToCheck,base)){
					if(elementToCheck.color === color){
						if(!this.isAlreadyFound(elementToCheck,found)){
							found.push(elementToCheck);
							nextBase.push(elementToCheck);
						}	
					}	
				}
			}
		}
		return nextBase;
	}
}

function generateInitialRows(size,colors){
	let rows=[],
		row = [],
		id;
	for(let i=0;i<size;i++){
		row=[];
		for(let j=0;j<size;j++){
			id = (j+(i*size));
			row.push(generateElementWithRandomColor(id, colors));
		}
		rows.push(row);
	}
	return rows;
}
function generateElementWithRandomColor(id,colors){
	let colorId = Math.floor(Math.random() * colors.length);
	return new Element(id,colors[colorId]);
}

export {GameState};