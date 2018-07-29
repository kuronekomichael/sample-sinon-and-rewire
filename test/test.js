import test from "ava"
import sinon from "sinon"
import rewire from 'rewire'

const util = rewire('../src/util')

test('スタブを使わない場合', t => {

//    sinon.stub(util, "getBase").returns(42);

    const value = util.getValue();
    t.is(value, 5 + 1);
}); 

test('スタブを使う場合', t => {

    sinon.stub(util, "getBase").returns(42);

    const value = util.getValue();
    t.is(value, 42 + 1);
}); 