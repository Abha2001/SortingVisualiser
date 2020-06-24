var BubbleSortAlgo =(props)=>{
    var animations=[];
    var index=0;
    // console.log(props.length);
    for (var i=0;i<props.length;i++)
    {
        for(var j=0;j<props.length-i-1;j++)
        {
            animations[index]=[j,j+1];
            if (props[j]>props[j+1])
            {
                animations[index].push(1);
                var t=props[j];
                props[j]=props[j+1];
                props[j+1]=t;
            }
            else
            {
                animations[index].push(0);
            }
            index++;
        }
    }
    return animations;
}

export default BubbleSortAlgo;