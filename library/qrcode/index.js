'use strict';

const canPromise = require('./can-promise');
const Index = require('./core/qrcode');
const TerminalRenderer = require('./renderer/terminal');

function checkParams(text, opts, cb) {
  if (typeof text === 'undefined') {
    throw new Error('String required as first argument');
  }

  if (typeof cb === 'undefined') {
    cb = opts;
    opts = {};
  }

  if (typeof cb !== 'function') {
    if (!canPromise()) {
      throw new Error('Callback required as last argument');
    } else {
      opts = cb || {};
      cb = null;
    }
  }

  return {
    opts,
    cb,
  };
}

function getStringRendererFromType(type) {
  switch (type) {
    case 'terminal':
      return TerminalRenderer;
    default:
      return null;
  }
}

function render(renderFunc, text, params) {
  if (!params.cb) {
    return new Promise((resolve, reject) => {
      try {
        const data = Index.create(text, params.opts);
        renderFunc(data, params.opts, (err, renderData) => {
          return err ? reject(err) : resolve(renderData);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    const data = Index.create(text, params.opts);
    return renderFunc(data, params.opts, params.cb);
  } catch (e) {
    params.cb(e);
  }
  return null;
}

exports.toString = function toString(text, opts, cb) {
  const params = checkParams(text, opts, cb);
  const renderer = getStringRendererFromType(params.opts.type);
  return render(renderer.render, text, params);
};
