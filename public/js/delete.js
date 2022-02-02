/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy napewno chcesz usunać rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        Swal.fire($.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\") // data: {id:$(this).data(\"id\")},\n\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          console.log(data.responseJSON.message);\n          Swal.fire(_defineProperty({\n            icon: 'error',\n            title: 'Oops...',\n            text: data.responseJSON.status\n          }, \"text\", data.responseJSON.message));\n        }));\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInRleHQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLENBQUMsQ0FBQyxZQUFXO0FBQ1RBLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsS0FBYixDQUFtQixZQUFVO0FBQUE7O0FBQ3pCQyxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsbUNBREQ7QUFFTkMsTUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsTUFBQUEsZ0JBQWdCLEVBQUUsSUFIWjtBQUlOQyxNQUFBQSxrQkFBa0IsRUFBRSxTQUpkO0FBS05DLE1BQUFBLGlCQUFpQixFQUFFLE1BTGI7QUFNTkMsTUFBQUEsaUJBQWlCLEVBQUUsS0FOYjtBQU9OQyxNQUFBQSxnQkFBZ0IsRUFBRTtBQVBaLEtBQVYsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJYLFFBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUNJSCxDQUFDLENBQUNjLElBQUYsQ0FBTztBQUNIQyxVQUFBQSxNQUFNLEVBQUUsUUFETDtBQUVIQyxVQUFBQSxHQUFHLEVBQUVDLFNBQVMsR0FBR2pCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSxJQUFiLENBRmQsQ0FHSDs7QUFIRyxTQUFQLEVBS0NDLElBTEQsQ0FLTSxVQUFTRCxJQUFULEVBQWM7QUFDaEJFLFVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxTQVBELEVBUUNDLElBUkQsQ0FRTSxVQUFTTCxJQUFULEVBQWM7QUFDaEJNLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLENBQUNRLFlBQUwsQ0FBa0JDLE9BQTlCO0FBQ0F6QixVQUFBQSxJQUFJLENBQUNDLElBQUw7QUFDSUUsWUFBQUEsSUFBSSxFQUFFLE9BRFY7QUFFSUQsWUFBQUEsS0FBSyxFQUFFLFNBRlg7QUFHSXdCLFlBQUFBLElBQUksRUFBRVYsSUFBSSxDQUFDUSxZQUFMLENBQWtCRztBQUg1QixxQkFJVVgsSUFBSSxDQUFDUSxZQUFMLENBQWtCQyxPQUo1QjtBQU1ILFNBaEJELENBREo7QUFtQkg7QUFDSixLQTlCRDtBQWdDSCxHQWpDRDtBQWtDSCxDQW5DQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3p5IG5hcGV3bm8gY2hjZXN6IHVzdW5hxIcgcmVrb3JkPycsXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdUYWsnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05pZSdcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGE6IHtpZDokKHRoaXMpLmRhdGEoXCJpZFwiKX0sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT29wcy4uLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xufSk7XG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;