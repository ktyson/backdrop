var gradientZoneFile = {
    name: "test01",
    gridWidth:  40,
    gridHeight:  40, 
    cellWidth:  6,
    cellHeight:  6,    
    cellBorders: true,
    gradientZones: [
        
     {
        gradientType: "linear",
        directionality: "up",
        startOnHorizonPct: 0.4,
        endOnHorizonPct: 0.6,
        startDownVertexPct: 0.333,
        verticalExtensionPct: 0.25,
        startColor: {"R":244,"G":240,"B":20,"A":1},
        endColor: {"R":54,"G":64,"B":234,"A":1}
    },
    {
        gradientType: "linear",
        directionality: "down",
        startOnHorizonPct: 0.4,
        endOnHorizonPct: 0.6,
        startDownVertexPct: 0.4,
        verticalExtensionPct: 0.25,
        startColor: {"R":244,"G":240,"B":20,"A":1},
        endColor: {"R":54,"G":64,"B":234,"A":1}
    }
             
        
    ]   
};