import * as other from './thirdparty' // ←テストのときだけ、こいつをモックに置き換えたい

exports.getValue = () => {
    return other.getBase() + 1;
};