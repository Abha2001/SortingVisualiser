var SelectionSortAlgo=(array)=>{
    var animations=[];
    var index=0;
    var minindex;
    for (var i=0;i<array.length-1;i++)
    {
        var min= i;
        for(var j=i+1;j<array.length;j++)
        {
            animations[index]=[i,j,0];
            if (array[j]<array[min])
            {
                minindex=index;
                min=j;
            }
            index++;
        }
        if(min!==i)
        {
            animations[minindex][2]=1;
            var t=array[i];
            array[i]=array[min];
            array[min]=t;
        }
    }
    // console.log(animations);
    return animations;
}

export default SelectionSortAlgo;