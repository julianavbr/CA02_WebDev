// Code adapted from the code developed on class by Mikhail @Interactive Web Applications.

// function to find a parent from certain types
function getParentTag(objNode, sParentType) {
    var objPar = objNode.parentNode;
    while (objPar) {
        if (objPar.nodeName == sParentType)
            return objPar;
        objPar = objPar.parentNode;
    };
    return objPar;
};

//returns the sum of all selected items
function sumTotal(idMenuTable) {
    var sumT = 0.0;
    var i = 0;
    var optList = document.querySelectorAll('input');
    for (i = 0; i < optList.length; i++) {
              if (optList[i].checked) {
            var parent = getParentTag(optList[i], 'TR');
            // get the third column(price)
            var objPrice = parent.getElementsByTagName('TD')[2];
            // firstChild = price
            sumT += parseFloat(objPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return sumT.toFixed(2);
};
//highlights all the gluten free options
function isGlutenFree(idTable, bShowGlu) {
    var i = 0;
    var objT = document.getElementById(idTable);
    var objB = objT.getElementsByTagName('tbody')[0];
    var eachElement = objB.getElementsByTagName('tr');
    // walk through each of the table rows and see if it has a 
    // "GlutenFree" attribute on it.
    for (i = 0; i < eachElement.length; i++) {
        if (eachElement[i].getAttribute('glutenfree') == "true") {
            if (bShowGlu) {
                eachElement[i].style.backgroundColor = "#5b3416";
                eachElement[i].style.color = "#fce295";
            } else {
                eachElement[i].style.backgroundColor = "";
                eachElement[i].style.color = "#5b3416";
            };
        };
    };
};


