let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  });

  var pie = new ej.charts.AccumulationChart({
    //Initializing Series
    series: [
        {
            dataSource: [
                { 'x': 'Total Products', y: 37 },
                { 'x': 'Categories', y: 4 },
                { 'x': 'Customers', y: 10 },
                { 'x': 'Orders', y: 12 }
            ],
            dataLabel: {
                visible: true,
                position: 'Inside',
            },
            xName: 'x',
            yName: 'y'
        }
    ],
});
pie.appendTo('#container');

