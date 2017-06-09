import styles from './index.scss';

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log('Hello, I am ', this.name);
  }
}

let alex = new Person('Alex');
alex.greeting();
