'use strict';
const fs = require('fs');
const bencode = require('bencode');

const u8 = 'utf8';

const torrent = bencode.decode(fs.readFileSync('torrent.torrent'));
// const trackerUrl = torrent.announce.toString(u8)

console.log(torrent)