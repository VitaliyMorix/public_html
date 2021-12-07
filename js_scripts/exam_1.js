function sumInput()
//функция считает сумму введённых чисел. Если введено не число,
//то выводится результат
{
    let numbers=[];
    while(true)
    {
        let value =prompt("Enter a number",0);
        if(value ===""||value===null||!isFinite(value)) break;
        numbers.push(+value);
    }
    let sum=0;
    for(let number of numbers)
    {
        sum+=number;
    }
    return sum;
}
alert(sumInput());
