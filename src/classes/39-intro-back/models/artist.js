class Artist {
  constructor(name, lastName, age) {
    // Properties
    this.Name = name;
    this.LastName = lastName;
    this.Age = age;
  }

  // Get
  get fullName() {
    return this.getFullName();
  }

  // Method
  getFullName() {
    return `${this.Name} ${this.LastName}`;
  }
}
