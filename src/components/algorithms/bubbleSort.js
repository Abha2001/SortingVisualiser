import React from 'react';

var BubbleSortAlgo =(props)=>{
    // console.log(props.length);
    for (var i=0;i<props.length-1;i++)
    {
        for(var j=0;j<props.length-i-1;j++)
        {
            if (props[j]>props[j+1])
            {
                var t=props[j];
                props[j]=props[j+1];
                props[j+1]=t;
            }
        }
    }
    console.log(props)
    return(
        <div>

        </div>
    )

}

export default BubbleSortAlgo;