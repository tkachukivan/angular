class SubscribeService {
  constructor($http) {
    this.http = $http
  }

  sendInfo (name) {
    return this.http.post('server.js', name);
  };
};

export default SubscribeService;