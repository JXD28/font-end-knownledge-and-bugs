function A(fun) {
    fun();
    console.log('__A__');
}

function B(fun) {
    setTimeout(fun, 1000);
    console.log('__B__');
}

function C(fun) {
    fun();
    console.log('__C__');
}

function D(fun) {
    fun();
    console.log('__D__');
}

function E(fun) {
    console.log('__E__');
}

A(function () {
    B(function () {
        C(function () {
            D(function () {
                E();
            });
        });
    });
});

//__B__
//__A__
//__E__
//__D__
//__C__
