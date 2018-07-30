import test from "ava"
import sinon from "sinon"
import proxyquire from "proxyquire"

test('スタブを使わない場合', t => {

    const util = require('../src/util');

    const value = util.getValue();
    t.is(value, 5 + 1);
}); 

test('スタブを使う場合', t => {

    const thirdPartyMock = {
        getBase: sinon.stub().returns(42),
    };

    const util = proxyquire('../src/util', {
        './thirdparty': thirdPartyMock  // util.jsの中で'./thirdparty'を読み込んだ時、このオブジェクトに置き換える
    });

    const value = util.getValue();
    t.is(value, 42 + 1);
}); 