// DONUT CHART

new Chart(document.getElementById("donutChart"), {

type: "doughnut",

data: {

labels:["Completed","Pending","Late"],

datasets:[{

data:[65,25,10],

backgroundColor:[
"#078CAC",
"#1A7BA7",
"#505168"
]

}]

}

});


// BAR CHART

new Chart(document.getElementById("barChart"), {

type:"bar",

data:{

labels:["KAU","KSU","PNU","UQU"],

datasets:[{

label:"Completion Rate",

data:[90,80,75,60],

backgroundColor:"#07628A"

}]

}

});



// LINE CHART

new Chart(document.getElementById("lineChart"),{

type:"line",

data:{

labels:["Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Trend",

data:[20,40,70,50,90],

borderColor:"#1A7BA7",

fill:false

}]

}

});