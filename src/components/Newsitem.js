import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
      let {title,description,imageurl,url,author,time}=this.props;
    return (
      <>
        <div className="card mt-2" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">BY {!author?"Unknown":author} at {new Date(time).toGMTString()}</small></p>
    <a href={url} target= "_blanck" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </>
    )
  }
}

export default Newsitem