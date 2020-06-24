import React, {Component} from 'react';
import './bubbleAnimations.css';
import BubbleSortAlgo from '../algorithms/bubbleSort';

class BubbleSort extends Component
{
    state={
        array:[]
    }
    componentDidMount(){
        this.generateRandom();
    }
    sortArray=()=>{
        BubbleSortAlgo(this.state.array)
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
            <>
                <button className="newArray" onClick={this.generateRandom}>New Array</button>
                <button className="sortArray" onClick={this.sortArray}>Sort Array</button>
                <div className='bars'>
                    {array.map((value,i)=>{
                        return (
                        <div className="bar" style={{height:`${value*5}px`}} key={i}></div>
                        )
                    })}
                </div>
            </>
        )
    }

}

export default BubbleSort;