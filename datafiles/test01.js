var gradientZoneFile = {
    name: "test01",
    gridWidth:  50,
    gridHeight:  60, 
    cellWidth:  8,
    cellHeight:  8,    
    cellBorders: true,
    gradientZones: [
        
        {
            startRow: 0,
            endRow: 15,
            startColor: {"R":64,"G":114,"B":255,"A":1},
            endColor: {"R":74,"G":183,"B":255,"A":1}
        } ,{
            startRow: 16,
            endRow: 28,
            startColor: {"R":74,"G":183,"B":255,"A":1},
            endColor: {R: 191, G: 227, B: 225, A: 1.0}
        },{
            startRow: 29,
            endRow: 34,
            startColor: {R: 191, G: 227, B: 225, A: 1.0},
            endColor: {"R":255,"G":212,"B":230,"A":1}
        } ,{
            startRow: 35,
            endRow: 36,
            startColor: {R: 24, G: 38, B: 24, A: 1.0},
            endColor: {R: 24, G: 38, B: 24, A: 1.0}
        } ,{
            startRow: 37,
            endRow: 60,
            startColor: {"R":255,"G":137,"B":32,"A":1},
            endColor: {"R":255,"G":245,"B":107,"A":1}
        }       
        
    ]   
};