// Dynamically set the webpack public path at runtime below
// This magic global is used by webpack to set the public path at runtime.

// Documentation: https://webpack.js.org/configuration/output/#output-publicpath
// eslint-disable-next-line no-undef
__webpack_public_path__ = window.location.protocol + '//' + window.location.host + '/'; // eslint-disable-line
