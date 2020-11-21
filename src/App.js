import React, { useState, useRef } from "react";
import "./Styles/App.scss";

import Player from "./Components/Player";
import Song from "./Components/Song";
import Data from "./Data";
import Library from "./Components/Library";
import Nav from "./Components/Nav";

function App() {
    const [songs, setSongs] = useState(Data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);

    const audioRef = useRef(null);
    return (
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                isPlaying={isPlaying}
                audioRef={audioRef}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
            />
        </div>
    );
}

export default App;
