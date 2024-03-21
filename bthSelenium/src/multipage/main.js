(function () {
    "use strict";

    var routes = {};
    var nav = document.getElementById('nav');
    var content = document.getElementById('content');

    var state = {
        current: 0,
        previous: 0,
        decimals: null,
        operatorClicked: false,
        operator: null,
    };

    var utilities = {
        divide: function() {
            state.operator = (a, b) => a / b;
            utilities.setPrevious();
        },

        multiply: function() {
            state.operator = (a, b) => a * b;
            utilities.setPrevious();
        },

        subtract: function () {
            state.operator = (a, b) => a - b;
            utilities.setPrevious();
        },

        add: function() {
            state.operator = (a, b) => a + b;
            utilities.setPrevious();
        },

        clear: function() {
            state.current = 0;
            state.previous = 0;
            state.decimals = null;
            utilities.updateDisplay();
        },

        sign: function() {
            state.current = -state.current;
            utilities.updateDisplay();
        },

        percentage: function() {
            state.current = state.current / 100;
            utilities.updateDisplay();
        },

        dot: function() {
            if (String(state.current).indexOf(".") === -1) {
                state.decimals = 1;
            }
        },

        equal: function() {
            state.current = state.operator(
                state.current,
                state.previous
            );

            state.previous = 0;

            utilities.updateDisplay();
        },

        append: function() {
            var number = parseInt(this.textContent);

            if (state.operatorClicked) {
                state.current = 0;
                state.decimals = null;
                state.operatorClicked = false;
            }

            if (state.decimals) {
                state.current += number / 10**state.decimals++;
            } else {
                state.current = state.current * 10 + number;
            }

            utilities.updateDisplay();
        },

        updateDisplay: function() {
            var display = document.getElementById("display");

            display.innerHTML = state.current;
        },

        setPrevious: function() {
            state.previous = state.current;
            state.operatorClicked = true;
        },
    };



    function router() {
        var url = location.hash.slice(2) || '/';

        renderRoute(url);
    }

    function registerRoute(url, name, pageRender) {
        routes[url] = {
            renderer: pageRender,
            name: name,
        };
    }

    function renderRoute(url) {
        if (routes[url] && routes[url]["renderer"]) {
            removeAllNodes(content);

            content.appendChild(routes[url]["renderer"]());
            if (url === "/calculator") {
                var numbers = document.getElementsByClassName("number");

                for (var i = 0; i < numbers.length; i++) {
                    numbers[i].addEventListener("click", utilities.append);
                }

                var notNumbers = document.getElementsByClassName("not-number");

                for (var j = 0; j < notNumbers.length; j++) {
                    notNumbers[j].addEventListener("click", utilities[notNumbers[j].id]);
                }
            }
        }
    }

    function renderNav() {
        removeAllNodes(nav);

        for (var route in routes) {
            if (Object.prototype.hasOwnProperty.call(routes, route)) {
                var link = document.createElement("a");

                link.href = "#!" + route;
                link.textContent = routes[route].name;
                nav.appendChild(link);
            }
        }
    }

    function removeAllNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    var renderHome = function () {
        var home = document.createElement("div");

        home.className = "home";

        var title = document.createElement("h1");

        title.textContent = "Home";

        home.appendChild(title);

        return home;
    };

    var renderAbout = function () {
        var about = document.createElement("div");

        about.className = "about";

        var title = document.createElement("h1");

        title.textContent = "About";

        about.appendChild(title);

        return about;
    };

    var renderCalculator = function () {
        var calculator = document.createElement("div");

        calculator.className = "calculator";

        var title = document.createElement("h1");

        title.textContent = "Calculator";

        calculator.appendChild(title);

        calculator.innerHTML += '<div class="display" id="display">' +
            (state.current || 0) + '</div>' +
            '<div id="clear" class="btn not-number">C</div>' +
            '<div id="sign" class="btn not-number">+/-</div>' +
            '<div id="percentage" class="btn not-number">%</div>' +
            '<div id="divide" class="btn not-number operator">÷</div>' +
            '<div class="btn number">7</div>' +
            '<div class="btn number">8</div>' +
            '<div class="btn number">9</div>' +
            '<div id="multiply" class="btn not-number operator">x</div>' +
            '<div class="btn number">4</div>' +
            '<div class="btn number">5</div>' +
            '<div class="btn number">6</div>' +
            '<div id="subtract" class="btn not-number operator">-</div>' +
            '<div class="btn number">1</div>' +
            '<div class="btn number">2</div>' +
            '<div class="btn number">3</div>' +
            '<div id="add" class="btn not-number operator">+</div>' +
            '<div class="btn zero number">0</div>' +
            '<div id="dot" class="btn not-number">.</div>' +
            '<div id="equal" class="btn not-number operator">=</div>';

        return calculator;
    };

    registerRoute("/", "Home", renderHome);
    registerRoute("/about", "About", renderAbout);
    registerRoute("/calculator", "Calculator", renderCalculator);

    renderNav();

    // Listen on hash change:
    window.addEventListener('hashchange', router);
    // Listen on page load:
    window.addEventListener('load', router);
})();
