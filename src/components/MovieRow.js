import React from 'react';

 class MovieRow extends React.Component {
     viewMovie(){
         const url = 'http://www.themoviedb.org/movie/'+ this.props.movies.id
         window.location.href = url
         
     }
     render(){
         return <div>
             <table key={this.props.movies.id} >
          <tbody>
            <tr>
              <td>
                <img alt="movie" src={this.props.movies.poster_path}/>
              </td>
              <td>
                <h3>{this.props.movies.title}</h3>
                <p>{this.props.movies.overview}</p>
                {/* <button tyle="button" onClick={this.viewMovie} value="View">View</button> */}
              </td>
            </tr>
          </tbody>
        </table>
         </div>
     }
 }

 export default MovieRow