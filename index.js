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


let arr = _palette.childNodes;      //Arrey of colors for palette
let arr_cell = draw_cell.childNodes;//Arrey of cell on the draw grid

//////////////////////////////////////////////////Colors for palette
arr[0].style.backgroundColor = "beige";
arr[1].style.backgroundColor = "AntiqueWhite";
arr[2].style.backgroundColor = "bisque";
arr[3].style.backgroundColor = "darkSalmon";
arr[4].style.backgroundColor = "HotPink";
arr[5].style.backgroundColor = "magenta";
arr[6].style.backgroundColor = "mediumVioletRed";
arr[7].style.backgroundColor = "darkMagenta";
arr[8].style.backgroundColor = "purple";
arr[9].style.backgroundColor = "RebeccaPurple";
arr[10].style.backgroundColor = "red";
arr[11].style.backgroundColor = "tomato";
arr[12].style.backgroundColor = "orangeRed";
arr[13].style.backgroundColor = "crimson";
arr[14].style.backgroundColor = "maroon";
arr[15].style.backgroundColor = "darkRed";
arr[16].style.backgroundColor = "brown";
arr[17].style.backgroundColor = "burlyWood";
arr[18].style.backgroundColor = "sandyBrown";
arr[19].style.backgroundColor = "chocolate";
arr[20].style.backgroundColor = "darkOrange";
arr[21].style.backgroundColor = "orange";
arr[22].style.backgroundColor = "darkGoldenRod";
arr[23].style.backgroundColor = "goldenrod";
arr[24].style.backgroundColor = "gold";
arr[25].style.backgroundColor = "yellow";
arr[26].style.backgroundColor = "Chartreuse";
arr[27].style.backgroundColor = "springGreen";
arr[28].style.backgroundColor = "YellowGreen";
arr[29].style.backgroundColor = "seaGreen";
arr[30].style.backgroundColor = "darkOliveGreen";
arr[31].style.backgroundColor = "olive";
arr[32].style.backgroundColor = "oliveDrab";
arr[33].style.backgroundColor = "green";
arr[34].style.backgroundColor = "darkGreen";
arr[35].style.backgroundColor = "mediumAquaMarine";
arr[36].style.backgroundColor = "mediumTurquoise";
arr[37].style.backgroundColor = "lightSkyBlue";
arr[38].style.backgroundColor = "lightSteelBlue";
arr[39].style.backgroundColor = "mediumSlateBlue";
arr[40].style.backgroundColor = "mediumBlue";
arr[41].style.backgroundColor = "Navy";
arr[42].style.backgroundColor = "midnightBlue";
arr[43].style.backgroundColor = "black";
arr[44].style.backgroundColor = "darkSlateGray";
arr[45].style.backgroundColor = "dimGrey";
arr[46].style.backgroundColor = "darkGray";
arr[47].style.backgroundColor = "gainsboro";
arr[48].style.backgroundColor = "whiteSmoke";
arr[49].style.backgroundColor = "whiteSpace";

let colorHolder = {};      //Object for holding color from/for local storage
let colorBuffer = 'white'; //First color for buffer
let label = document.querySelector('label');
label.style.backgroundColor = colorBuffer;

const getCellColorFromLocalStorage = (cellColorBG) => {// Get background color for palette from local storage//
	for(let i=0; i<arr_cell.length-1; i++)                                                                   //
		if(cellColorBG[i]) colorHolder[i] = arr_cell[i].style.backgroundColor = cellColorBG[i];              //
}                                                                                                            //
                                                                                                             //
if(localStorage.getItem('cellColorBG')){                                                                     //
	getCellColorFromLocalStorage(JSON.parse(localStorage.getItem('cellColorBG')));                           //
}

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
	colorBuffer=event.target.value;												//
	label.style.backgroundColor = colorBuffer;									//
}																				//
																				//
label.addEventListener('change', getColorFromInput);							//

let trigger = false; // Mouse is up

const setColor = (i) => {                           					    // To set color on draw grid//
	if(trigger){ //If mouse is down										  							    //
		colorHolder[i] = event.target.style.backgroundColor = colorBuffer;							    //
		localStorage.setItem('cellColorBG', JSON.stringify(colorHolder));//set color to locar storage   //
	}																								    //
	event.stopPropagation;																			    //
}																									    //
                                                                                                        //
for(let i=0; i<arr_cell.length-1; i++){																	//
	if(arr_cell[i].tagName != 'BR') {																	//
		arr_cell[i].addEventListener('mousedown',()=>{													//
			trigger = true;																				//
			setColor(i);																				//
		});																								//
		arr_cell[i].addEventListener('mouseenter', ()=> setColor(i));									//
		window.addEventListener('mouseup',()=>{															//
			trigger = false;																			//
		});																								//
	}																									//
}																										//