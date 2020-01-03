var maxNumber = function(numbers)
{
    var maxValue;
    for(var i = 0; i<numbers.length; i++){
        if(numbers[i] >= numbers[i+1]){
            maxValue = numbers[i];
        }
    }
    console.log("maxValue = " + maxValue);
}