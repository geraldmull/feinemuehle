'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// nesting the app
// stup state using tools
// define how child communicates with parent
// passing functions down to the childreen
// function props can comunicate in both directions
// this -> always class base components

var DecisionApp = function (_React$Component) {
    _inherits(DecisionApp, _React$Component);

    function DecisionApp(props) {
        _classCallCheck(this, DecisionApp);

        var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    // 3 life cycle methods
    // poputate data from databases
    // save data to database
    // now local storage
    // access is only in class based components


    _createClass(DecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // do nothing
            }
        }

        // fires oly if props or state objects change

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }

        // only works with string data
        //>localStorage.setItem('name', 'Gerald');
        //>localStorage.getItem('name');
        //>localStorage.removeItem('name');
        //>localStorage.setItem('age', 26); // impotant gets string back
        //>localStorage.getItem('age');


        // json = string representation of java script object notation or an array (it stands for javascript)
        // method returns java script object

        // stringify takes regular java script object and parses string representation
        // returns a true javascript object
        //>JSON.stringify
        // this string is save to local storage
        //>JSON.stringify({ age: 26 });
        //>const json = JSON.stringify({ age: 26 });
        //>json
        //>JSON.parse(json)
        //>JSON.parse(json).age


        // fires before component will go away, for when pages switch
        //componentWillUnmount(){

        //}


        // sttings options function to an empty array
        // shorthand handleDeleteOption

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }

        // method to pass down

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',


        // array concat maipulated the array without touching the original
        value: function handleAddOption(option) {

            // validation if an option already exists
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            // never manipulate inital array
            // shorthand        
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = '';
            var subtitle = 'REACT WEBDEVELOPMENT';

            // class based components
            // instances of react components
            // enable and disable todo list button
            // give methos access
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return DecisionApp;
}(React.Component);

// create component property
// stateless functional components WICHTIG: FASTER than class components
// props passes arguments in

DecisionApp.defaultProps = {
    options: []
};

// stateless functional components are fast, dont have to manage lifecycle

var Header = function Header(props) {
    // more flexible with props
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// default props values
Header.defaultProps = {
    title: 'DECISION APPLICATION'
};

// React Components start with big letter. add onClick event handler
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions },
            'ACTION IF THERE ARE OPTIONS'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'REMOVE ALL'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an Option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'REMOVE'
        )
    );
};

// trim() clear empty spac bevore and after string

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // class method


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            // data is extracted here and trimed

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            //shorthand
            this.setState(function () {
                return { error: error };
            });

            // reset string if error
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'ADD OPTION'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// render with passed options


ReactDOM.render(React.createElement(DecisionApp, { options: ['ONE', 'TWO', 'THREE'] }), document.getElementById('app'));
