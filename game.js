//storay
//DECLARE VARIABLES
var ans = new Array;
var done = new Array;
var score = 0;
var currentQuestion;
var currentHeldWord;
var isDropCorrect = false;
var questions = [
    "The thin layer of protein and fat that surrounds the cell. The cell membrane is semipermeable, allowing some substances to pass into the cell and blocking others.",
    "A small body located near the nucleus - it has a dense center and radiating tubules. The centrosomes is where microtubules are made. During cell division (mitosis), the centrosome divides and the two parts move to opposite sides of the dividing cell. The centriole is the dense center of the centrosome.",
    "The jellylike material outside the cell nucleus in which the organelles are located.",
    "A flattened, layered, sac-like organelle that looks like a stack of pancakes and is located near the nucleus. It produces the membranes that surround the lysosomes. The Golgi body packages proteins and carbohydrates into membrane-bound vesicles for 'export' from the cell.",
    "Round organelles surrounded by a membrane and containing digestive enzymes. This is where the digestion of cell nutrients takes place.",
    "Spherical to rod-shaped organelles with a double membrane. The inner membrane is infolded many times, forming a series of projections (called cristae). The mitochondrion converts the energy stored in glucose into ATP (adenosine triphosphate) for the cell.",
    "The membrane that surrounds the nucleus.",
    "An organelle within the nucleus - it is where ribosomal RNA is produced. Some cells have more than one nucleolus.",
    "Spherical body containing many organelles, including the nucleolus. The nucleus controls many of the functions of the cell (by controlling protein synthesis) and contains DNA (in chromosomes). The nucleus is surrounded by the nuclear membrane.",
    "Small organelles composed of RNA-rich cytoplasmic granules that are sites of protein synthesis.",
    "A vast system of interconnected, membranous, infolded and convoluted sacks that are located in the cell's cytoplasm (the ER is continuous with the outer nuclear membrane). Rough ER is covered with ribosomes that give it a rough appearance. Rough ER transports materials through the cell and produces proteins in sacks called cisternae (which are sent to the Golgi body, or inserted into the cell membrane).",
    "A vast system of interconnected, membranous, infolded and convoluted tubes that are located in the cell's cytoplasm (the ER is continuous with the outer nuclear membrane). The space within the ER is called the ER lumen. Smooth ER transports materials through the cell. It contains enzymes and produces and digests lipids (fats) and membrane proteins; smooth ER buds off from rough ER, moving the newly-made proteins and lipids to the Golgi body, lysosomes, and membranes.",
    "Fluid-filled, membrane-surrounded cavities inside a cell. The vacuole fills with food being digested and waste material that is on its way out of the cell."
];
var words = [
    "Cell membrane",
    "Centrosome",
    "Cytoplasm",
    "Golgi body",
    "Lysosome",
    "Mitochondrion",
    "Nuclear membrane",
    "Nucleolus",
    "Nucleus",
    "Ribosome",
    "Rough endoplasmic reticulum",
    "Smooth endoplasmic reticulum",
    "Vacuole"
];
var rand = questions[Math.floor(Math.random() * questions.length)];
currentQuestion = rand;
var drops = [
  "yes-drop-1",
  "yes-drop-2",
  "yes-drop-3",
  "yes-drop-4",
  "yes-drop-5",
  "yes-drop-6",
  "yes-drop-7",
  "yes-drop-8",
  "yes-drop-9",
  "yes-drop-10",
  "yes-drop-11",
  "yes-drop-12"
];

words[0] = drops[1];
words[1] = drops[2];
words[2] = drops[3];
words[3] = drops[4];
words[4] = drops[5];
words[5] = drops[6];
words[6] = drops[7];
words[7] = drops[8];
words[8] = drops[9];
words[9] = drops[10];
words[10] = drops[11];
words[11] = drops[12];
words[12] = drops[13];

$(document).ready(function() { document.getElementById('dropzone-one').innerHTML += rand;});

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "self",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
      
    
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
  
  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    //draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    //event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});