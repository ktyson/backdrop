//backdrop namespace
var bdp = {};

bdp.backdrop = (function() {

    var gridWidth = 40;
    var gridHeight = 10; 
    var cellWidth =  8;
    var cellHeight =  8;    
    var cellBorders =  false;
    
    function setGrid(w, h) {
        gridWidth = w;
        gridHeight = h;
    }
    
    
    
    

	
	//private methods
	function createGrid(containerId) {
        //construct a table element to serve as an addressable grid
        var c = [];    
        c.push("<table>");
        for(var y = 1; y <= gridHeight; y++) {
            c.push("<tr>");
            for(var x = 1;  x <= gridWidth; x++) {
                c.push("<td id = '_" + x + "_" + y + "_sqr' class = 'sqr'></td>");           
            }
            c.push("</tr>");
        }
        c.push("</table>");
        $("#" + containerId).html(c.join(""));

        //assign the size in pixels of individual cells in the grid
        var cssSize = {height: cellHeight, width: cellWidth};
        $("td").css(cssSize);
        
        $("table").css("border-collapse", "collapse");
        //assign border characteristics
        if(cellBorders) {
            $("td").css("border", "1px solid gray");
        } else {
            $("td").css("border", "none");
        }
        
        
        makeGradientZone(gradient1);
        makeGradientZone(gradient2);
        
	}
	
    
 
    function makeGradientZone(gradient) {
    
        var arrColoringInstructions = [];
        
        //express a gradient zone object
        
        //determine the base
        var baseStartCellX = Math.ceil(gridWidth * gradient.startOnHorizonPct);
        
        var baseEndCellX = Math.ceil(gridWidth * gradient.endOnHorizonPct);
        
        var baseY = Math.ceil(gridHeight * gradient.startDownVertexPct);
        
        //record the base
        for(var x = baseStartCellX; x <= baseEndCellX; x++) {
            
            var y = baseY;
            var coloringInstruction = {};
            coloringInstruction.x = x;
            coloringInstruction.y = y;
            coloringInstruction.r = gradient.startColor.R;
            coloringInstruction.g = gradient.startColor.G;
            coloringInstruction.b = gradient.startColor.B;
            coloringInstruction.a = gradient.startColor.A;
            arrColoringInstructions.push(coloringInstruction);
                       
        }
        
        
        //do the extension with gradient
        var extent = Math.ceil(gridHeight * gradient.verticalExtensionPct);
        
        
            
        var ctr = 0;
        var extent
        for(var y = baseY; y <= (baseY + extent); y++) {
                console.log("y", ctr, y);
            for(var x = baseStartCellX; x <= baseEndCellX; x++) {

                var coloringInstruction = {};
                coloringInstruction.x = x;
                coloringInstruction.y = y;
                coloringInstruction.r = getGradientColor(gradient.startColor.R, gradient.endColor.R, extent, ctr);
                coloringInstruction.g = getGradientColor(gradient.startColor.G, gradient.endColor.G, extent, ctr);
                coloringInstruction.b = getGradientColor(gradient.startColor.B, gradient.endColor.B, extent, ctr);
                coloringInstruction.a = getGradientColor(gradient.startColor.A, gradient.endColor.A, extent, ctr);
                arrColoringInstructions.push(coloringInstruction);                
                
                
            }
            
            
            ctr++;
        }
        
        function  getGradientColor(startValue, endValue, extent, ctr) {
            
            //find the correct gradient step for this value
            var baseStep = Math.ceil((endValue - startValue) / extent);
            //return the start color value plus the counted numbers of steps taken so far
            return startValue + (baseStep*ctr);
        }
        
      
        colorGradient(arrColoringInstructions);


    }
    
    
    
    
    function colorGradient(instructions) {
        
        for(var i = 0; i < instructions.length; i++) {            
            var ins = instructions[i];
            setColor(ins.x, ins.y, ins.r, ins.g, ins.b, ins.a);            
        }        
    }

    function setColor(x, y, r, g, b, a) {

        //set the color of a cell

        //address the cell
        var idSqr = "_"+x+"_"+y+"_sqr";
        //construct the color
        var rgbaCol = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        //assign the color to the cell
        $("#" + idSqr).css("backgroundColor", rgbaCol);

    }
    
	return {
//		//public attributes
        GridWidth: 40,
        GridHeight: 40,
//		thatThis: 3.12,
//		
//		//public methods
		CreateGrid: function(containerId, config){
			
            setGrid(this.GridWidth,this.GridHeight);
            createGrid(containerId);
            
            //gridWidth = GridWidth;
            //gridHeight = GridHeight;
		}
//		AnotherFunc: function(thisIn){
//			doit;
//			return something;
//		}
	};
})();