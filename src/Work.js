import React from 'react';

class Work extends React.Component{
  constructor(){
    super();
    this.state={
      title:['张张 ：aaaa']

    }
  }
  submitClick(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    let data = [title + ' ： ' + content];
    this.setState({
      title:this.state.title.concat(data),
    });
    console.log(this.state.title);
  }
   render(){
     let text = this.state.title.map((item,i) => <div className='comment' key={i}>{item}</div>)
     return(
       <div className="work">
         <div className="content">{text}</div>
          <form onSubmit={this.submitClick.bind(this)}>
            <input className="put" ref="title"/><br />
            <input className="put" ref="content"/><br />
            <button className="btn">评论</button>
          </form>
       </div>
     )
   }
 }
export default Work;
