import React,{ Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props){
       super(props);
	this.state={
		title: 'React simple CRUD Application',
		act:0,
		index:'',
		datas:[]
	}
  }
  
  componentDidMount(){
	   this.refs.cakename.focus();
  }
  fSubmit= (e) =>{
	   e.preventDefault();
	   console.log('try');
	   
	   let datas=this.state.datas;
	   let cakename=this.refs.cakename.value;
	   
	   if(this.state.act===0){
		   let data={
		   cakename
	   }
	   
	   datas.push(data);
	   
	   
	   }else{
		   let index=this.state.index;
		   datas[index].cakename=cakename;
	   }
	   
	   
	   this.setState({
	    datas:datas,
		act:0
	   });
	   
	   this.refs.myForm.reset();
	   this.refs.cakename.focus();
  }
  
   fRemove=(i)=> {
	   let datas = this.state.datas;
	   datas.splice(i,1);
	    this.setState({
			datas:datas
		});
      this.refs.myForm.reset();
       this.refs.cakename.focus();
   }
   fEdit=(i) => {
      let data=this.state.datas[i];
      this.refs.cakename.value=data.cakename;
      this.setState({
        act:1,
        index:i
	  });
	   this.refs.cakename.focus();
	}
   fPurchase=(i) =>{
		alert('You have purchased this cake');
	}
	render() {
		let datas = this.state.datas;
		return(
		  <div className="App">
		  <h2>{this.state.title}</h2>
		  <form ref="myForm" className="myForm">
		     <input type="text" ref="cakename" placeholder="Enter cakename" className="formField" />
		      <button onClick={(e)=>this.fSubmit(e)} className="myButton"> submit</button>
		  </form>
		  <pre>
		  {
			  datas.map((data,i) =>
			   <li key={i} className="myList">
				   {i+1}.{data.cakename}
				   <button onClick={()=>this.fRemove(i)} className="myListButton">remove</button>
				   <button onClick={()=>this.fEdit(i)} className="myListButton">edit</button>
				   <button onClick={()=>this.fPurchase(i)} className="myListButton">Purchase</button>
				    
				</li>   
		  )}
		 </pre>
		  </div>
		  );
	}
}
 export default App;	