class Album {
  constructor(artist, releaseAlbumDate, age) {
    // Properties
    this.Artist = artist;
    this.ReleaseAlbumDate = releaseAlbumDate;
    this.Age = age;
  }

  // Get
  get albumsByArtist(artist) {
    return this.Artist === artist;
  }
}
