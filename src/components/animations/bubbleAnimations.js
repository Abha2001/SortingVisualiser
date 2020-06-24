import React, {Component} from 'react';
import './bubbleAnimations.css';

class BubbleSort extends Component
{
    state={
        array:[]
    }
    componentDidMount(){
        this.generateRandom();
    }
    generateRandom=()=>{
        var arr=[]
        for (var i=1;i<=100;i++)
        {
            var num=Math.floor((Math.random() * 100) + 1);
            arr.push(num);
        }
        this.setState({array:arr});
    }
    render(){
        var {array}=this.state;
        // console.log(array);
        return(
            <div className='bars'>
                {array.map((value,i)=>{
                    return (
                    <div className="bar" style={{height:`${value*5}px`}} key={i}></div>
                    )
                })}
            </div>
        )
    }

}

export default BubbleSort;