/**
mail test
-------------

**/
var bee = require('bee');
var plugin = require('../lib/index');
plugin(bee);

describe('bee-less is an bee plugin', function(){
  

  it("plugin is a function", function(){
    plugin.should.be.a('function');
  });

  it("bee has less task", function(){
    bee.task.getTask('mail').should.be.a('function');
  });

  it('mail can send', function(done){
    bee.createProject(__dirname + '/build.xml').execute('default', function(e){
      if(!e){
        console.log('the mail was sent');
      }
      done(e);
    });
  });

});


