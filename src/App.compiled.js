(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    /**
     * Uses the react-transform babel plugin
     * to rewrite modules so that all react components are
     * exported.
     *
     * This allows us to access those components and test them.
     *
     * ex:
     *
     * // component.js
     *
     * var MyComponent = React.createClass({});
     *
     * // component-test.js
     *
     * var components = require('../component.js');
     *
     * console.log(components.__ReactComponents.MyComponent);
     *
     */
    
    module.exports = function createExport(_ref) {
      var locals = _ref.locals;
    
    
      return function (ReactClass, componentId) {
    
        if (!locals[0].exports) {
          locals[0].exports = {};
        }
    
        if (!locals[0].exports.__ReactComponents) {
          locals[0].exports.__ReactComponents = [];
        }
    
        locals[0].exports.__ReactComponents.push(ReactClass);
    
        return ReactClass;
      };
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _reactDom = require('react-dom');
    
    var _reactDom2 = _interopRequireDefault(_reactDom);
    
    var _Profile = require('./Profile');
    
    var _Directory = require('./Directory');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      App: {
        displayName: 'App'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace-6212bade182e719d7c136cd9/App.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var App = _wrapComponent('App')(function (_React$Component) {
      _inherits(App, _React$Component);
    
      function App(props) {
        _classCallCheck(this, App);
    
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    
        _this.state = {
          currentUsername: null
        };
        _this.handleChoose = _this.handleChoose.bind(_this);
        _this.handleReturnToDirectoryClick = _this.handleReturnToDirectoryClick.bind(_this);
        return _this;
      }
    
      _createClass(App, [{
        key: 'handleChoose',
        value: function handleChoose(newUsername) {
          this.setState({ currentUsername: newUsername });
        }
      }, {
        key: 'handleReturnToDirectoryClick',
        value: function handleReturnToDirectoryClick() {
          this.setState({ currentUsername: null });
        }
      }, {
        key: 'render',
        value: function render() {
          var body = void 0;
          if (this.state.currentUsername) {
            body = _react3.default.createElement(_Profile.Profile, {
              username: this.state.currentUsername,
              onChoose: this.handleChoose
            });
          } else {
            body = _react3.default.createElement(_Directory.Directory, { onChoose: this.handleChoose });
          }
    
          return _react3.default.createElement(
            'div',
            { className: 'App' },
            _react3.default.createElement(
              'header',
              null,
              _react3.default.createElement(
                'h1',
                null,
                'PetBook'
              ),
              _react3.default.createElement(
                'h2',
                null,
                'A place for animals to be animals'
              ),
              _react3.default.createElement(
                'nav',
                null,
                this.state.currentUsername && _react3.default.createElement(
                  'button',
                  { onClick: this.handleReturnToDirectoryClick },
                  'Return to directory'
                )
              )
            ),
            _react3.default.createElement(
              'main',
              null,
              body
            )
          );
        }
      }]);
    
      return App;
    }(_react3.default.Component));
    
    _reactDom2.default.render(_react3.default.createElement(App, null), document.getElementById('app'));
    
    },{"./Directory":3,"./Profile":4,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Directory = Directory;
    
    var _react = require('react');
    
    var _react2 = _interopRequireDefault(_react);
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function Directory(props) {
      return _react2.default.createElement(
        'div',
        { className: 'Directory' },
        _react2.default.createElement(
          'h2',
          null,
          'Furry friends'
        ),
        _react2.default.createElement(_Userlist.Userlist, {
          usernames: ['Rollins', 'Groot', 'Henry'],
          onChoose: props.onChoose
        })
      );
    }
    
    },{"./Userlist":5,"react":undefined}],4:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Profile = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _dataFetcher = require('./dataFetcher');
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Profile: {
        displayName: 'Profile'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace-6212bade182e719d7c136cd9/Profile.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var Profile = exports.Profile = _wrapComponent('Profile')(function (_React$Component) {
      _inherits(Profile, _React$Component);
    
      function Profile(props) {
        _classCallCheck(this, Profile);
    
        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    
        _this.state = { userData: null };
        return _this;
      }
    
      _createClass(Profile, [{
        key: 'loadUserData',
        value: function loadUserData() {
          var _this2 = this;
    
          this.setState({ userData: null });
          this.fetchID = (0, _dataFetcher.fetchUserData)(this.props.username, function (userData) {
            _this2.setState({ userData: userData });
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.loadUserData();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          (0, _dataFetcher.cancelFetch)(this.fetchID);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.username !== prevProps.username) {
            (0, _dataFetcher.cancelFetch)(this.fetchID);
            this.loadUserData();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var isLoading = this.state.userData === null ? true : false;
          var name = isLoading ? 'loading...' : this.state.userData.name;
    
          var bio = isLoading ? 'Bio goes here' : this.state.userData.bio;
    
          var friends = isLoading ? [] : this.state.userData.friends;
          var className = 'Profile';
          if (isLoading) {
            className += ' loading';
          }
    
          return _react3.default.createElement(
            'div',
            { className: className },
            _react3.default.createElement(
              'div',
              { className: 'profile-picture' },
              isLoading === false && _react3.default.createElement('img', { src: this.state.userData.profilePictureUrl, alt: '' })
            ),
            _react3.default.createElement(
              'div',
              { className: 'profile-body' },
              _react3.default.createElement(
                'h2',
                null,
                name
              ),
              _react3.default.createElement(
                'h3',
                null,
                '@',
                this.props.username
              ),
              _react3.default.createElement(
                'p',
                null,
                bio
              ),
              _react3.default.createElement(
                'h3',
                null,
                'My friends'
              ),
              _react3.default.createElement(_Userlist.Userlist, { usernames: friends, onChoose: this.props.onChoose })
            )
          );
        }
      }]);
    
      return Profile;
    }(_react3.default.Component));
    
    },{"./Userlist":5,"./dataFetcher":6,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],5:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Userlist = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Userlist: {
        displayName: 'Userlist'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace-6212bade182e719d7c136cd9/Userlist.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var Userlist = exports.Userlist = _wrapComponent('Userlist')(function (_React$Component) {
      _inherits(Userlist, _React$Component);
    
      function Userlist(props) {
        _classCallCheck(this, Userlist);
    
        var _this = _possibleConstructorReturn(this, (Userlist.__proto__ || Object.getPrototypeOf(Userlist)).call(this, props));
    
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
      }
    
      _createClass(Userlist, [{
        key: 'handleClick',
        value: function handleClick(event) {
          this.props.onChoose(event.target.dataset.username);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;
    
          return _react3.default.createElement(
            'ul',
            null,
            this.props.usernames.map(function (username) {
              return _react3.default.createElement(
                'li',
                { key: username },
                _react3.default.createElement(
                  'button',
                  { 'data-username': username, onClick: _this2.handleClick },
                  '@',
                  username
                )
              );
            })
          );
        }
      }]);
    
      return Userlist;
    }(_react3.default.Component));
    
    },{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],6:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    exports.fetchUserData = fetchUserData;
    exports.cancelFetch = cancelFetch;
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var FAKE_USER_DATA = {
      Groot: {
        name: 'Groot Burrall',
        bio: "I enjoy hiding in plain sight, and hissing at my buddy Rollins",
        profilePictureUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_59/f_auto,q_auto,w_1100/v1628778532/shape/mentalfloss/87226-gettyimages-1247734973.jpg',
        friends: ['Henry', 'Rollins']
      },
      Rollins: {
        name: 'Rollins Burrall',
        bio: "I'm a small animal and I like to play with my bird toy. On the weekends I hang out with my cool Dad! I dont care much for my brother Groot though hes always hissing at me",
        profilePictureUrl: 'https://www.k9ofmine.com/wp-content/uploads/2021/03/white-colored-maltese-850x520.jpg',
        friends: ['Henry']
      },
      Henry: {
        name: 'Henry Kiser',
        bio: "I'm a Bearded dragon. You'll love me. I like sun bathing and eating greens such as kale and spinach",
        profilePictureUrl: 'https://m.media-amazon.com/images/I/51eGV4guQnL._AC_SY355_.jpg',
        friends: ['Groot', 'Rollins']
      }
    };
    
    var timeoutByFetchId = new Map();
    
    var Fetch = function Fetch() {
      _classCallCheck(this, Fetch);
    
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2)
      });
    };
    
    function fetchUserData(username, callback) {
      if (!FAKE_USER_DATA.hasOwnProperty(username)) {
        throw new Error('Invalid username. Make sure it is "Groot", "Rollins", or "Henry".');
      }
    
      var fetch = new Fetch();
    
      var delay = Math.floor(Math.random() * 1000) + 500;
      var timeout = setTimeout(function () {
        timeoutByFetchId.delete(fetch._id);
        callback(FAKE_USER_DATA[username]);
      }, delay);
    
      timeoutByFetchId.set(fetch._id, timeout);
    
      return fetch;
    }
    
    function cancelFetch(fetch) {
      if (!fetch || (typeof fetch === 'undefined' ? 'undefined' : _typeof(fetch)) !== 'object') {
        return;
      }
      var timeout = timeoutByFetchId.get(fetch._id);
      clearTimeout(timeout);
      timeoutByFetchId.delete(fetch._id);
    }
    
    },{}]},{},[2]);
    