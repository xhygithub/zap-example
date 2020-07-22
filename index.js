import ZapClient from 'zaproxy';

const zapOptions = {
  apiKey:'gk0gn9bv3689fa3442a7k7upi7',
  proxy: 'http://localhost:8080/'
};

const zaproxy = new ZapClient(zapOptions);
zaproxy.spider.scan('http://localhost:3000')
  .then(
    resp => console.log('spider scan id:', resp),
    error => console.log('>>>>>', error),
  );

zaproxy.ascan.scan('http://localhost:3000')
  .then(
    resp => console.log('active scan id: ', resp),
    error => console.log('>>>>>', error),
  );

zaproxy.core.alertsSummary('http://localhost:3000')
  .then(
    resp => console.log('alert summary id: ', resp),
    error => console.log('>>>>>', error),
  );

zaproxy.core.htmlreport('http://localhost:3000')
  .then(
    resp => console.log('html report: ', resp),
    error => console.log('>>>>>', error),
  );