import React, { Component } from 'react'
import Newsitem  from './Newsitem'
import Spinner from './Spiner'

export class News extends Component {
    
    
    constructor(){
        super();
        console.log("Hii I am a constructor");
        this.state={
            articles:[],
            page:1,
            loading:false
        }
            
        
    }

    async update(){

      this.props.setProgress(10);
      console.log("I am update")
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.props.setProgress(40);
      this.setState({
        loading:true,
      })
      
      let data = await fetch(url);
      this.props.setProgress(70);
      let parseData = await data.json();
      
     console.log(parseData)
      this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
      this.props.setProgress(100);

    }

   async componentDidMount(){
     console.log("I am api")
     
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;

    //   this.setState({
    //     loading:true,
    //   })

    //   let data = await fetch(url);

    //   let parseData = await data.json();
    //  console.log(parseData)
    //   this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
    
    this.update()
  

    }

    handlepre = async()=>{
      // console.log("Previous");
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

      // this.setState({
      //   loading:true,
      // })

      // let data = await fetch(url);

      // let parseData = await data.json();
      // this.setState({
      //   page: this.state.page-1,
      //   articles: parseData.articles,
      //   loading:false,
      // })
      this.setState({
        page: this.state.page-1
      })
      this.update()
    }

    handlenext = async()=>{
      console.log("Next");
      // if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
      // }else{

      
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

      // this.setState({
      //   loading:true,
      // })

      // let data = await fetch(url);

      // let parseData = await data.json();
      //   this.setState({
      //     page:this.state.page+1,
      //     articles:parseData.articles,
      //     loading:false
      //   })
      // }
      this.setState({
        page: this.state.page+1,
      });
      this.update();
    }
  render() {

    return (
        <>
        
      <div className="container my-3">
       {this.state.loading && <Spinner/>} 
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return(
            
            <div className="col md-4" key={element.url}>
            <Newsitem title={element.title.slice(0,40)} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt}/>
            
            
        
              </div>
            )
            
        })}
              
              
              
          </div>
        
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepre}>Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next</button>
        </div>
        </div>
        
        
          </>
    )
  }
}

export default News