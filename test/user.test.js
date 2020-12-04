const expect = require("chai").expect;
const request = require("supertest");
const {app} = require("../server");

const { User } = require("../models/user");

describe("POST /create", () => {
  let user;
  beforeEach((done) => {
    user = { firstName: "Igoche", lastName: "Matthew", password: "matthew", email: "igoche@gmail.com", phone: "08102334453"};
    done();
  });


  // it("Should create a new user account", () => {
    // request(app).post("/api/v1/create")
    //   .send(user)
    //   .end(res => {
    //     const body = res.body;
    //     expect(body).to.contain.property("_id");
    //     expect(body).to.contain.property("firstName");
    //     expect(body).to.contain.property("lastName");
    //     expect(body).to.contain.property("email");
    //     expect(body).to.contain.property("phone");
    //     done()
    //   })
  // });

  it("Should fetch the user list", () => {
    request(app).get("/api/v1/get")
      .end((err, res) => {
        // console.log(err, res)
        console.log(res.body[0])
        expect(body[0]).to.have.property("firstName");
        done();
      })
  })
})