import React from 'react'

const PlayerContext = React.createContext()

class PlayerProvider extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <PlayerContext.Provider value={{...this.state}}>
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
}
export default PlayerProvider