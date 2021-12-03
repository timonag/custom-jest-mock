import myRepo from './repo';

class MyService {
  find() {
    return myRepo.findOne();
  }
}

export default MyService;
