//pure functions
//filter() method
//filter func. is used to filter objects for example 
//we search/ filter grey color mobiles or a lower price hotel rooms we are using filer() method
var numbers=[-2,-1,0,1,2];
const filtered =numbers.filter(function(value){return value>=0;});
    //console.log(filtered);

    const negFilter= numbers.filter(n => n<=0);
    //console.log(negFilter);

    //map() method
    //map() method is used to map each item of js in something else
    

    /*
    //mapping num to string
    const mapFil= filtered.map(n => '<li>' + n +'</li>');
    //console.log(mapFil);
    const newHtml= '<ul>' + mapFil.join('')+'</ul>';
    //join use to combine Arrayobjects into one obj 
    //and we can remove comma usingjoin('')
    //in this example we mapped nums to strings 
    console.log(newHtml);
    */

//mapping into obj
const items= filtered.map(n=> {
    const obj ={value: n};
    return obj;
});
console.log(items);
    
//reduce()
var numRed=[1,2,3,4,5];
let sum= numRed.reduce(
    (acc,curr)=> acc+curr
    );
    console.log(sum);