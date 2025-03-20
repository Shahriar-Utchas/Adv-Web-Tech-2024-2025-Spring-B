function kgToLbs(weight: number | string): number  {
  //Narrowing
    if (typeof weight === 'number') 
        return weight * 2.20462;
    else 
        return parseFloat(weight)* 2.20462;
    

}
kgToLbs(100); // 220.462
kgToLbs('100'); // '100'