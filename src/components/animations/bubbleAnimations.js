import React, {Component} from 'react';
import './bubbleAnimations.css';
import BubbleSortAlgo from '../algorithms/bubbleSort';
import SelectionSortAlgo from '../algorithms/selectionSort'

class BubbleSort extends Component
{
    state={
        array:[]
    }
    componentDidMount(){
        this.generateRandom();
    }
    bubbleSort=()=>{
        var animationsArray=BubbleSortAlgo(this.state.array);
        this.startAnimations(animationsArray);
    }

    selectionSort=()=>{
        var animationsArray=SelectionSortAlgo(this.state.array);
        this.startAnimations(animationsArray);
    }
    startAnimations(animationsArray)
    {
        animationsArray.forEach((comparision,i)=>{
            var firstElem=comparision[0];
            var secondElem= comparision[1];
            var swap = comparision[2];
            // console.log(firstElem,secondElem)
            setTimeout(()=>{
                // console.log(firstElem,secondElem)
                this.changeColourCompare(firstElem,secondElem);
            },(i+0.25)*50)
            setTimeout(()=>{this.changeBackColour(firstElem,secondElem);},(i+0.5)*50)
            if(swap)
            {
                setTimeout(()=>{
                    this.changeColourSwap(firstElem,secondElem);
                },(i+1)*50)
            }
        })
    }

    changeColourCompare=(i,j)=>{
        // console.log("changing colour")
        document.getElementsByClassName('bar')[i].style.backgroundColor='red';
        document.getElementsByClassName('bar')[j].style.backgroundColor='red';
    }
    changeBackColour=(i,j)=>{
        document.getElementsByClassName('bar')[i].style.backgroundColor='blueviolet';
        document.getElementsByClassName('bar')[j].style.backgroundColor='blueviolet';
    }
    changeColourSwap=(i,j)=>{
            var ElemOneHt=document.getElementsByClassName('bar')[i].style.height;
            var ElemTwoHt=document.getElementsByClassName('bar')[j].style.height;
            var t=ElemOneHt;
            // console.log(ElemOneHt,ElemTwoHt,t)
            document.getElementsByClassName('bar')[i].style.height=ElemTwoHt;
            document.getElementsByClassName('bar')[j].style.height=t;
        
    }

    generateRandom=()=>{
        var arr=[]
        for (var i=1;i<=50;i++)
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
                <button className="bubbleSort" onClick={this.bubbleSort}>Bubble Sort</button>
                <button className="selectionSort" onClick={this.selectionSort}>Selection Sort</button>
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