'use strict';
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const IOStream = require('./iostream');

exports.Encoder = Encoder;
exports.Decoder = Decoder;

util.inherits(Encoder, EventEmitter);

function Encoder() {
  EventEmitter.call(this);
}

/**
 * Encode streams to placeholder objects.
 *
 * @api public
 */
Encoder.prototype.encode = function (v) {
  if (v instanceof IOStream) {
    return this.encodeStream(v);
  } else if (util.isArray(v)) {
    return this.encodeArray(v);
  } else if (v && typeof v === 'object') {
    return this.encodeObject(v);
  }
  return v;
};

Encoder.prototype.encodeStream = function (stream) {
  this.emit('stream', stream);

  // represent a stream in an object.
  const v = { $stream: stream.id };
  if (stream.options) {
    v.options = stream.options;
  }
  return v;
};

Encoder.prototype.encodeArray = function (arr) {
  const v = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    v.push(this.encode(arr[i]));
  }
  return v;
};

Encoder.prototype.encodeObject = function (obj) {
  const v = {};
  const keys = Object.keys(obj);
  for (const k of keys) {
    v[k] = this.encode(obj[k]);
  }
  // for (let k in obj) {
  //   if (obj.hasOwnProperty(k)) {
  //     v[k] = this.encode(obj[k]);
  //   }
  // }
  return v;
};

util.inherits(Decoder, EventEmitter);

function Decoder() {
  EventEmitter.call(this);
}

/**
 * Decode placeholder objects to streams.
 *
 * @api public
 */
Decoder.prototype.decode = function (v) {
  if (v && v.$stream) {
    return this.decodeStream(v);
  } else if (util.isArray(v)) {
    return this.decodeArray(v);
  } else if (v && typeof v === 'object') {
    return this.decodeObject(v);
  }
  return v;
};

Decoder.prototype.decodeStream = function (obj) {
  const stream = new IOStream(obj.options);
  stream.id = obj.$stream;
  this.emit('stream', stream);
  return stream;
};

Decoder.prototype.decodeArray = function (arr) {
  const v = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    v.push(this.decode(arr[i]));
  }
  return v;
};

Decoder.prototype.decodeObject = function (obj) {
  const v = {};
  const keys = Object.keys(obj);
  for (const k of keys) {
    v[k] = this.decode(obj[k]);
  }
  // for (let k in obj) {
  //   if (obj.hasOwnProperty(k)) {
  //     v[k] = this.decode(obj[k]);
  //   }
  // }
  return v;
};
