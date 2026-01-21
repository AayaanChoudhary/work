Why Album link to Artist
Real-world rule: An album is created by an artist (or band). That’s a natural one-to-many relationship.

Reusability: One artist → many albums. Referencing avoids repeating artist data in every album.

Data growth: Artists may release many albums over time. Referencing scales better than embedding.

Artist data changes rarely → safe to reference.

Fetch albums by artist is easy with an index on artistId.

2.Why songs to albums
Conceptual clarity: Songs belong to albums.

Avoid duplication: If you embed songs inside albums, updating a song (name, duration) becomes harder if reused elsewhere.

Query flexibility:

Get all songs in an album

Sort by track number

Growth: Albums can have many songs → referencing avoids large document size.