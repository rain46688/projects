using cms.rain as rain from '../db/data-model';

service RainService {
  entity Books as projection on rain.Books;
  entity Authors as projection on rain.Authors;

}