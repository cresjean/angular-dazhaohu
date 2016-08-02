'use strict';

describe('module angularDazhaohu', function(){
  var dazhaohu;
  var now;
  beforeEach(module('angular-dazhaohu'));

  beforeEach(inject(function ($injector) {
    dazhaohu = $injector.get('$filter')('dazhaohu');
    now = new Date();
	}));

  it('should say 早上好', function(){
    now.setHours('06')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('早上好');
  });

  it('should say 清晨好', function(){
    now.setHours('04')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('清晨好');
  });

  it('should say 半夜三更好', function(){
    now.setHours('02')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('半夜三更好');
  });

  it('should say 上午好', function(){
    now.setHours('10')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('上午好');
  });

  it('should say 中午好', function(){
    now.setHours('13')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('中午好');
  });

  it('should say 下午好', function(){
    now.setHours('15')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('下午好');
  });

  it('should say 晚上好', function(){
    now.setHours('20')
    var greeting = dazhaohu(now);
    expect(greeting).to.eql('晚上好');
  });

});
