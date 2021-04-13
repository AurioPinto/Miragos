<template>
  <div class="template">
    <div class="firsticon">
      <p>Contacts Us</p>
    </div>

    <div class="container">
      <div class="side">
        <router-link to="/">
          <span>{{ side }}</span> </router-link
        >/
        <span class="bold">Contacts Us</span>
        <p>
          If you have any questions or are interested in our services, please
          feel free to contact us using this form.
        </p>
      </div>

      <section>
        <div class="contact">
          <div class="contact-form">
            <form>
              <div class="row">
                <div class="input50">
                  <input type="text" placeholder="First Name" />
                </div>
                <div class="input50">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div class="row">
                <div class="input50">
                  <input type="text" placeholder="Email" />
                </div>
                <div class="input50">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div class="row">
                <div class="input100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="input100">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-box">
              <img src="../assets/address.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Address</h4>
                <p>Pembroke Pines, FL, 33029 USA</p>
              </div>
            </div>
            <div class="info-box">
              <img src="../assets/email.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Email</h4>
                <a href="mailto:ippasolution@gmail.com">ippasolution.com</a>
              </div>
            </div>
            <div class="info-box">
              <img src="../assets/call.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Call</h4>
                <a href="Tel: +1 954-367-3572">Tel: +1 954-367-3572</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  components: {},
  data: () => ({
    side: "Home",
    date: new Date().getFullYear(),
  }),
};
</script>

<style scoped lang="scss">
.template {
  line-height: 1.7em;
  :root {
    --primary-color: #f60f20;
    --secondary-color: #1b206e;
  }

  /* BASE STYLES */
  // * {
  //   box-sizing: border-box;
  //   margin: 0;
  //   padding: 0;
  // }

  // html,
  // body {
  //   font-family: "Poppins", sans-serif;
  //   color: #111;
  // }

  // h1 {
  //   font-size: 30px;
  //   font-weight: 500;
  // }

  // p {
  //   margin: 20px 0 10px;
  //   font-size: 1.1rem;
  // }

  // section {
  //   display: flex;
  //   flex-direction: column;
  //   height: 100vh;
  //   align-items: center;
  //   padding: 100px;
  //   margin-top: 60px;
  // }

  // section.home {
  //   flex-direction: row;
  //   margin-top: 0;
  // }

  /* BUTTON */
  // .btn {
  //   cursor: pointer;
  //   display: inline-block;
  //   background: var(--primary-color);
  //   color: #fff;
  //   text-decoration: none;
  //   padding: 10px 30px;
  //   margin: 20px 0;
  //   border: 0;
  // }

  // .btn:hover {
  //   transform: scale(0.98);
  // }

  // .logo {
  //   position: absolute;
  //   top: 30px;
  //   left: 100px;
  //   font-size: 2rem;
  //   font-weight: 700;
  //   z-index: 20;
  // }

  /* TOGGLE */
  // .toggle {
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   width: 60px;
  //   height: 60px;
  //   background: var(--primary-color) url(../images/menu.png);
  //   background-size: 30px;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   z-index: 20;
  //   cursor: pointer;
  // }

  // .toggle.active {
  //   background: var(--primary-color) url(../images/close.png);
  //   background-size: 25px;
  //   background-position: center;
  //   background-repeat: no-repeat;
  // }

  /* NAVIGATION */
  // .navigation {
  //   position: fixed;
  //   top: 0;
  //   left: 100%;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #fff;
  //   z-index: 15;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .navigation.active {
  //   left: 0;
  // }

  // .navigation ul {
  //   position: relative;
  // }

  // .navigation ul li {
  //   position: relative;
  //   list-style: none;
  //   text-align: center;
  // }

  // .navigation ul li a {
  //   font-size: 2.2rem;
  //   color: #111;
  //   text-decoration: none;
  //   font-weight: 300;
  // }

  // .navigation ul li a:hover {
  //   color: var(--primary-color);
  // }

  // .navigation .social-bar {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 60px;
  //   height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .navigation .social-bar a {
  //   display: inline-block;
  //   transform: scale(0.5);
  // }

  // .navigation .email-icon {
  //   position: absolute;
  //   bottom: 20px;
  //   transform: scale(0.5);
  // }

  /* HOMEPAGE */
  // .home-content {
  //   position: relative;
  //   z-index: 10;
  //   max-width: 600px;
  // }

  // .home-img {
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  //   height: 110%;
  // }

  /* SERVICES PAGE */
  // .services {
  //   margin-top: 40px;
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   gap: 40px;
  //   text-align: center;
  // }

  // .services .service {
  //   padding: 30px;
  // }

  .services .service:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  // .services .service h2 {
  //   font-size: 24px;
  //   font-weight: 500;
  //   margin-top: 20px;
  //   color: var(--secondary-color);
  // }

  // .services .service .icon img {
  //   max-width: 100px;
  // }

  /* WORK PAGE */
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  .portfolio .item {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 5px;
  }

  .portfolio .item img {
    width: 100%;
    height: 100%;
  }

  .portfolio .item .action {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }

  .portfolio .item:hover .action {
    opacity: 1;
  }

  .portfolio .item .action a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 5px 15px;
  }

  .firsticon {
    background-image: url("../assets/userheader.png");
    background-size: 100%;
    background-position: center;
    height: 20vh;
    margin-top: 65px;
    p {
      text-align: center;
      color: #ffffff !important;
      font-weight: 900;
      font-size: 60px;
      padding: 76px 0 0;
      // font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
    }
  }
  .container {
    position: relative;
    width: 80%;
    max-width: 1383px;
    margin: auto;
    .side {
      margin-top: 28px;
      a {
        text-decoration: none;
      }
      span {
        margin: 8px;
        font-weight: 600;
      }
      p {
        margin: 20px 0 10px;
        font-size: 1.1rem;
      }
    }

    .flex {
      display: flex;
      display: none;
      justify-content: space-around;
    }
  }
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #718096;
    .right {
      a {
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
  .footer {
    .footertext {
      // font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";
      line-height: 1.7em;
      display: flex;
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #fff;
      .footerbox {
        .icons {
          i {
            padding: 15px;
            cursor: pointer;
            text-decoration: none;
            color: black;
          }
        }
      }
      h3 {
        font-weight: 600;
      }
      .footerlink {
        a {
          margin: 8px;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
    .lineparagraph {
      p {
        text-align: center;
        font-weight: 600;
        padding: 20px 0 20px;
        color: #718096;
      }
    }
  }
}
/* CONTACT */
.contact {
  position: relative;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact-form {
  position: relative;
  background: #1c223b;
  width: calc(100% - 400px);
  padding: 60px 40px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  width: 100%;
  display: flex;
}

.contact-form .input50 {
  width: 50%;
  margin: 0 10px;
}

.contact-form .input100 {
  width: 100%;
  margin: 0 10px;
}

.contact-form .row input,
.contact-form .row textarea {
  position: relative;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0;
  resize: none;
}

.contact-form .row textarea {
  height: 150px;
}

.contact-form .row input[type="submit"] {
  background-color: #fff;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
}

.contact-info {
  width: 350px;
  background: #1c223b;
  padding: 60px 40px 20px;
}

.contact-info .info-box {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
}

.contact-info .info-box .contact-icon {
  width: 20px;
  margin-right: 40px;
}

.contact-info .info-box .details h4 {
  color: #fff;
}

.contact-info .info-box .details p,
.contact-info .info-box .details a {
  color: #fff;
}

@media (max-width: 1068px) {
  .home-img {
    .contact {
      position: relative;
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .logo {
      top: 10px;
      left: 40px;
      font-size: 1.5rem;
    }

    section {
      padding: 100px 40px;
    }

    .navigation ul li a {
      font-size: 2rem;
    }

    .services {
      grid-template-columns: repeat(2, 1fr);
    }

    .contact {
      flex-direction: column;
    }

    .contact-form {
      width: 100%;
      padding: 30px 30px 20px;
    }

    .contact-form .row {
      flex-direction: column;
    }

    .contact-form .input50,
    .contact-form .input100 {
      width: 100%;
      margin: 0;
    }

    .contact-info {
      width: 100%;
      margin-top: 20px;
      padding: 30px 30px 20px;
    }
  }

  @media (max-width: 768px) {
    .services {
      grid-template-columns: 1fr;
    }

    .services .service {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
