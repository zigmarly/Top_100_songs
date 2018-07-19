import React from 'react';

class SongForm extends React.Component {
    state = { name: '' } 

    handleChange = (e) => {
        this.setState({ name: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addSong(this.state.name)
        this.setState({ name: ''})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder='Add a Song'
                required
                value={this.state.name}
                onChange={this.handleChange}
                />
                <label>
          *Song Artist:
          <input
              placeholder="Add Artist"
              //required
              value={this.state.song.artist}
              onChange={this.handleChange}
          />
        </label>
        <label>
          Song Album:
          <input
              placeholder="Add Album"
              value={this.state.song.album}
              onChange={this.handleChange}
          />
        </label>
        <label>
          *Song Genre:
          <input
              placeholder="Add Genre"
              // required
              value={this.state.song.genre}
              onChange={this.handleChange}
          />
        </label>
            </form>
        )
    }
}

export default SongForm;