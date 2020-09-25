function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pdfPreviewImg = require('./pdfPre/pdfPreview.svg');

export var getFileType = function getFileType() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pdf';

  if (filename) {
    var index = filename.lastIndexOf('.');
    var suffix = filename.substr(index + 1);
    return suffix === type;
  }

  return false;
};
export var setThumbUrl = function setThumbUrl() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.map(function (item) {
    if (item && typeof item === 'string') {
      var res = {
        uid: "".concat(item),
        name: item,
        status: 'done',
        url: item
      }; //  isPDF ?

      if (getFileType(item, 'pdf')) {
        res.thumbUrl = pdfPreviewImg;
      }

      return res;
    }

    if (getFileType(item.name, 'pdf') || getFileType(item.url, 'pdf') || item.type === 'application/pdf') {
      return _objectSpread(_objectSpread({}, item), {}, {
        thumbUrl: pdfPreviewImg
      });
    }

    return item;
  });
};
export function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}