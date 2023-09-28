function bmiCalculator(peso,altura){
    var bmi =  peso/Math.pow(altura,2);
    return Math.round(bmi);
}
