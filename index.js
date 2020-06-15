let _canvas = document.querySelector("._canvas");
let _palette = document.querySelector("._palette");
let draw_cell = document.getElementById("draw_cell");
let brush_color_indicator = document.getElementById("brush_color_indicator");


const Cell = (cells,rows,lines) => {
	for(let li=0; li<lines; li++){
		for(let row=0; row<rows; row++) {
			cells.appendChild(document.createElement('div')); //Cell brick
		}
	cells.appendChild(document.createElement('BR')); // New line
	}
}

Cell(draw_cell,50,30); //To make cell for draw
Cell(_palette,50,1);   //To make cell for palette


let arr = _palette.childNodes;      //Array of colors for palette
let arr_cell = draw_cell.childNodes;//Array of cells on the draw grid
arr_cell.forEach(eachCell => eachCell.style.backgroundColor = 'rgb(255, 255, 255)');

//////////////////////////////////////////////////Colors for palette
arr[0].style.backgroundColor = "rgb(246, 244, 224)"; //beige
arr[1].style.backgroundColor = "rgb(248, 236, 214)"; //AntiqueWhite
arr[2].style.backgroundColor = "rgb(253, 229, 196)"; //bisque
arr[3].style.backgroundColor = "rgb(233, 152, 113)"; //darkSalmon
arr[4].style.backgroundColor = "rgb(255, 105, 177)"; //HotPink
arr[5].style.backgroundColor = "rgb(254, 1, 251)";   //magenta
arr[6].style.backgroundColor = "rgb(204, 18, 136)";  //mediumVioletRed
arr[7].style.backgroundColor = "rgb(140, 0, 139)";   //darkMagenta
arr[8].style.backgroundColor = "rgb(130, 0, 132)";   //purple
arr[9].style.backgroundColor = "rgb(101, 52, 152)";  //RebeccaPurple
arr[10].style.backgroundColor = "rgb(255, 0, 0)";    //red
arr[11].style.backgroundColor = "rgb(248, 103, 64)"; //tomato
arr[12].style.backgroundColor = "rgb(255, 68, 2)";   //orangeRed
arr[13].style.backgroundColor = "rgb(209, 25, 61)";  //crimson
arr[14].style.backgroundColor = "rgb(133, 0, 2)";    //maroon
arr[15].style.backgroundColor = "rgb(153, 0, 1)";    //darkRed
arr[16].style.backgroundColor = "rgb(168, 41, 44)";  //brown
arr[17].style.backgroundColor = "rgb(223, 184, 133)";//burlyWood
arr[18].style.backgroundColor = "rgb(246, 163, 96)"; //sandyBrown
arr[19].style.backgroundColor = "rgb(213, 104, 29)"; //chocolate
arr[20].style.backgroundColor = "rgb(255, 140, 0)";  //darkOrange
arr[21].style.backgroundColor = "rgb(275, 166, 0)";  //orange
arr[22].style.backgroundColor = "rgb(184, 134, 10)"; //darkGoldenRod
arr[23].style.backgroundColor = "rgb(218, 165, 34)"; //goldenrod
arr[24].style.backgroundColor = "rgb(254, 215, 0)";  //gold
arr[25].style.backgroundColor = "rgb(255, 255, 0)";  //yellow
arr[26].style.backgroundColor = "rgb(130, 254, 1)";  //Chartreuse
arr[27].style.backgroundColor = "rgb(0, 255, 124)";  //springGreen
arr[28].style.backgroundColor = "rgb(154, 205, 51)"; //YellowGreen
arr[29].style.backgroundColor = "rgb(46, 139, 84)";  //seaGreen
arr[30].style.backgroundColor = "rgb(85, 108, 47)";  //darkOliveGreen
arr[31].style.backgroundColor = "rgb(124, 128, 4)";  //olive
arr[32].style.backgroundColor = "rgb(106, 143, 31)"; //oliveDrab
arr[33].style.backgroundColor = "rgb(0, 128, 0)";    //green
arr[34].style.backgroundColor = "rgb(9, 94, 8)";     //darkGreen
arr[35].style.backgroundColor = "rgb(104, 203, 170)";//mediumAquaMarine
arr[36].style.backgroundColor = "rgb(73, 208, 203)"; //mediumTurquoise
arr[37].style.backgroundColor = "rgb(135, 207, 247)";//lightSkyBlue
arr[38].style.backgroundColor = "rgb(174, 197, 223)";//lightSteelBlue
arr[39].style.backgroundColor = "rgb(124, 103, 242)";//mediumSlateBlue
arr[40].style.backgroundColor = "rgb(0, 0, 206)";    //mediumBlue
arr[41].style.backgroundColor = "rgb(3, 0, 129)";    //Navy
arr[42].style.backgroundColor = "rgb(24, 24, 119)";  //midnightBlue
arr[43].style.backgroundColor = "rgb(0, 0, 0)";      //black
arr[44].style.backgroundColor = "rgb(45, 79, 78)";   //darkSlateGray
arr[45].style.backgroundColor = "rgb(105, 105, 105)";//dimGrey
arr[46].style.backgroundColor = "rgb(169, 169, 169)";//darkGray
arr[47].style.backgroundColor = "rgb(220, 220, 220)";//gainsboro
arr[48].style.backgroundColor = "rgb(245, 245, 245)";//whiteSmoke
arr[49].style.backgroundColor = "rgb(255, 255, 255)";//white

let colorHolder = {};      //Object for holding color from/for local storage
let colorBuffer = 'rgb(255, 255, 255)'; //First color for buffer
let label = document.querySelector('label');
label.style.backgroundColor = colorBuffer;

const convertColor = colorForConverting => {
	let colBuf = document.createElement("div");//Make virtual <div>
											   //for converting color
	colBuf.style.color = colorForConverting;   //to the same type (i.e rgb)
	colorForConverting = colBuf.style.color;   //as backgound color
	return colorForConverting;
}

const getCellColorFromLocalStorage = (cellColorBG) => {// Get background color for palette from local storage//
	for(let i=0; i<arr_cell.length-1; i++)                                                                   //
		if(cellColorBG[i]) colorHolder[i] = arr_cell[i].style.backgroundColor = cellColorBG[i];              //
}                                                                                                            //
                                                                                                             //
if(localStorage.getItem('cellColorBG')){                                                                     //
	getCellColorFromLocalStorage(JSON.parse(localStorage.getItem('cellColorBG')));                           //
}																											 //

const getColor = () => {                              // To get color from palette//
	colorBuffer = event.target.style.backgroundColor;							  //
	label.style.backgroundColor = colorBuffer;									  //
	event.stopPropagation;           											  //
}																				  //
																		          //
for(let i=0; i<arr.length-1; i++){												  //
	arr[i].addEventListener('click', getColor);									  //
}																				  //

const getColorFromInput = () => {                     // To get color from input//
	colorBuffer = event.target.value;											//
	label.style.backgroundColor = colorBuffer;	                                //
																				//
	colorBuffer = colorForConverting(colorBuffer);	                            //
}																				//
																				//
label.addEventListener('change', getColorFromInput);							//

let trigger = false; // Mouse is up

const setColor = (i) => {                           					    // To set color on draw grid//
	if(trigger && event.which === 1){ //If mouse is down and left mouse button clicked					//					  							    //
		colorHolder[i] = event.target.style.backgroundColor = colorBuffer;							    //
		localStorage.setItem('cellColorBG', JSON.stringify(colorHolder));//set color to locar storage   //
	}																								    //
	event.stopPropagation;																			    //
}																									    //
                                                                                                        //
for(let i=0; i<arr_cell.length-1; i++){																	//
	if(arr_cell[i].tagName != 'BR') {																	//
		arr_cell[i].addEventListener('mousedown',()=>{													//
			trigger = true;	// Mouse is down															//
			setColor(i);																				//
		});																								//
		arr_cell[i].addEventListener('mouseenter', ()=> setColor(i));									//
		window.addEventListener('mouseup',()=>{															//
			trigger = false; // Mouse is up																//
		});																								//
		arr_cell[i].addEventListener('contextmenu', () => {          //call function for background fill//
					event.preventDefault();																//
					if(event.which === 3) {	//If right mouse button clicked								//
						if(colorBuffer != event.target.style.backgroundColor){							//
							fillBackground(i, colorBuffer, event.target.style.backgroundColor);			//
						}																				//
					}																					//
				});																						//
	}																									//
}																										//

const isEmpty = (coord, newColor, currentColor) => {                //check if current cell is empty//
				return (coord >= 0 																	//
					&& coord < arr_cell.length-1 													//
					&& arr_cell[coord].style.backgroundColor 										//
					&& arr_cell[coord].style.backgroundColor !== newColor							//
					&& arr_cell[coord].style.backgroundColor === currentColor) 						//
						? true 																		//
						: false;																	//
			}																						//
			
			const startPaint = (coord, newColor) => {//fill with color current cell and than set result to locar storage//
				colorHolder[coord] = arr_cell[coord].style.backgroundColor = newColor; 									//
				localStorage.setItem('cellColorBG', JSON.stringify(colorHolder));										//
			}																											//
			
			const fillBackground = (coord, newColor, currentColor) => {//recurcive function fills background//
				if(!isEmpty(coord, newColor, currentColor)) return;											//
				startPaint(coord, newColor, currentColor);													//
				fillBackground(coord-1, newColor, currentColor);//one cell left								//
				fillBackground(coord+1, newColor, currentColor);//one cell right							//
				fillBackground(coord-51, newColor, currentColor);//one cell up								//
				fillBackground(coord+51, newColor, currentColor);//one cell down							//
			}																								//