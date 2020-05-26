'use strict';
const fs = require('fs');
const bencode = require('bencode');

const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

const torrent = bencode.decode(fs.readFileSync('torrent.torrent'));

const url = urlParse(torrent.announce.toString('utf8'));