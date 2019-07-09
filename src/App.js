import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import MovieRow from './components/MovieRow';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    // console.log('this is my initilizer')


    // const movies = [
    //   {id: 0, title:'Avengers 1', img_src:'http://www.omdbapi.com/src/poster.jpg' , overview:'movies was trash, yo'},
    //   {id: 1, title: 'Avengrs 2', img_src:'http://www.omdbapi.com/src/poster.jpg' , overview:'movies was trash, yo'}
    // ]



    //   var movieRows = []
    //   movies.forEach((movies) =>{ 
    //     console.log(movies.title)
    //     const movieRow = <MovieRow movies={movies}/>
    //     movieRows.push(movieRow)
    //   })

    //   this.state = {rows: movieRows}



    this.preformSearch('avengers')

  }
  preformSearch(searchTerm){
    console.log('Preformed search using movie DB');
    const URLString = 'https://api.themoviedb.org/3/search/movie?&api_key=9cfa1cb663e204ed4f8eb0197613ab2d&query='+searchTerm ;
    $.ajax({
      url:URLString,
      success: (searchResults) => {
        console.log('Fetched Data')
        // console.log(searchResults)
        const results = searchResults.results
        var moviesRows = []
        // console.log(results[0])
        results.forEach((movies) => {
          movies.poster_path = 'http://image.tmdb.org/t/p/w185' + movies.poster_path;
          console.log(movies.poster_path)
          const movieRow = <MovieRow key={movies.id} movies={movies}/>
          moviesRows.push(movieRow)
        })

        this.setState({rows: moviesRows})
      },
      error:(xhr, status, err) => {
        console.error('Error: Failed to Fetch Data')
      }
    })
  }


  searchChangeHandler(event){
    const boundObject = this
    console.log(event.target.value)
    const searchTerm = event.target.value;
    boundObject.preformSearch(searchTerm)

  }

  render(){
    return (
    <div className="App">
      <table style={{
        backgroundColor: "#000",
        display: 'block',
        color: '#fff',
        paddingLeft: 16
      }}>
        <tbody>
          <tr>
            <td>
              <img width="50" src={logo} alt="logo"/>
            </td>
            <td width="8"/>
            <td>
              <h1>Movie Searcher</h1>
              
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize:'24px',
        display:'block',
        width: '99%',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '16px'
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter desired movie..."/>

      {this.state.rows}
    </div>
  );
  }
  
}

export default App;
