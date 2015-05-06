/**
 * Docker Utirity.
 */

'use strict';

console.log('dockerUtil load!');
var docker= {};

// Execute new Jenkins container.
docker.executeJenkins = function(id,  port) {
  return true;
};

// Kill Jenkins container.
docker.killJenkins = function(id) {
  return true;
};

// Get Jenkins container status.
docker.getJenkinsStatus=function(){
    var res = [
                    {id : '001',
                    status : '0'},
                    {id : '002',
                    status : '1'},
                    {id : '003',
                    status : '2'}
                ];

    return res;
}

module.exports = docker;
