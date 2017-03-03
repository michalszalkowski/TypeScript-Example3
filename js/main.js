var Helper;
(function (Helper) {
    var SomeText = (function () {
        function SomeText() {
        }
        return SomeText;
    }());
    SomeText.Greeting = "Cześć";
    Helper.SomeText = SomeText;
})(Helper || (Helper = {}));
console.log(Helper.SomeText.Greeting + " Hello word");
//# sourceMappingURL=main.js.map