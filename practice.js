// Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);

// Add the canvas to the HTML document
document.body.appendChild(renderer.view);

// Create a container object called the `stage`
let stage = new PIXI.Container();

// Tell the `renderer` to `render` the stage
renderer.render(stage);

// Giving the canvas an optional border
renderer.view.style.border = "5px dashed black";

// Change the background color of the Canvas
renderer.view.backgroundColor = 0xEEEEEE;

// CSS styling inside of JavaScript for Pixi
renderer.view.style.width = window.innerWidth + "px";
renderer.view.style.height = window.innerHeight + "px";
renderer.view.style.display = "block";

// scaleToWindow plugin for rendering the game's view properly
scaleToWindow(renderer.view, 0xeda4b7);

// Get the window ratio value
let scale = scaleToWindow(renderer.view);
console.log(scale);