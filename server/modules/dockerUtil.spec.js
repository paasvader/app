'use strict';

var should = require('should');
var dockerUtil = require('./dockerUtil');

describe('Docker Utils', function() {

    it('Test Case1', function(done) {
        var res = dockerUtil.executeJenkins('0000', '8080');
        res.should.be.true;
        done();
    });

    it('Test Case2', function(done) {
        var res = dockerUtil.killJenkins('0000');
        res.should.be.true;
        done();
    });

    it('Test Case2', function(done) {
        var res = dockerUtil.getJenkinsStatus('0000');
        res.should.be.Array;
        done();
    });
});
