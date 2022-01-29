import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select a song.</div>;
  }

  return (
    <div>
      <h2>Song Details for:</h2>
      <p>
        Title: {song.title}
        <br />
        duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
