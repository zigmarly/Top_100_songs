import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';


class App extends Component {
  state = { songs: [] }

  componentDidMount() {

    fetch('/api/items')
      .then( response => response.json() )
      .then( songs => this.setState({ songs }) )
  }

  addSong = (name) => {
    const { songs } = this.state

    const id = Math.floor(( 1 + Math.random()) * 0X1000).toString()

    this.setState({ songs: [...songs, {id, name}] })
  }

  updateSong = (id) => {

    let songs = this.state.songs.map( song => {
      if (song.id === id)
        return {...song, complete: !song.complete}
      return song 
    })

    this.setState({ songs })
  }

  deleteSong = (id) => {
    const { songs } = this.state 

    this.setState ({ songs: songs.filter( song => songs.id !== id )})

  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong}/>
        <SongList 
          songs={this.state.song}
          updateSong={this.updateSong}
          deleteSong={this.deleteItem}
          />
 
      </div>
    );
  }
}

export default App;
