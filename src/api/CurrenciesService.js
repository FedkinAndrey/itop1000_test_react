import dataApi from './dataApi';

export default class CurrenciesService {
  static getAll() {
    return dataApi.get(
      'latest?access_key=307e43b9c1bdb4180e737bd4952cb44f&format=1'
    );
  }
}
