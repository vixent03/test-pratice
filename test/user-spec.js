const { expect } = require('chai');
const User = require('../class/user.js');

describe('User class', function() {

    let user;

    beforeEach(() => {
        user = new User(this.username);
    });


    it('should create successfully', function() {
        let user = new User();
        expect(user).to.exist;
    })

    it('should set username on creation', function() {
        let user = new User();
        expect(user.username).to.equal(this.username)

    })
})