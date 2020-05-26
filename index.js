'use strict';
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');

const u8 = 'utf8';

const torrent = torrentParser.open('torrent.torrent');

tracker.getPeers(torrent, peers => {
    console.log('lis of peers: ', peers);
});
