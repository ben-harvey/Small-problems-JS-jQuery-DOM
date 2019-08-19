const myBind = function (func, context) {
  return function () {
    func.apply(context);
  }
}

