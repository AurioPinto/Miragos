<template>
  <div class="solution">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner alto">
        <div class="carousel-item active">
          <img src="../assets/same.png" class="d-block w-100 alto" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img src="../assets/value_bg.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img src="../assets/slidee.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="page">
      <div class="solution">
        <h1>Our Solutions</h1>
        <span class="p"
          >We build Netwok Solutions for all your logistic needs</span
        >
      </div>

      <!-- Homecards 1  -->
      <section class="home-cards">
        <div class="transition">
          <img src="../assets/logistic.jpg" alt />
          <div class="boxes">
            <h3>BUSINESS/LOGISTIC SOLUTION</h3>
            <p>
              We export a variety of products made in the US, Canada and Mexico
              to Africa. This includes Technology and Services, such as
              industrial equipment, transport equipment, pharmaceutical
              equipment and products, agriculture equipment, food, clothing, and
              others.
            </p>
            <p>
              However, we also indemnify and export any product or service that
              our client may ask for, from and to North America, Africa and
              Europe. On the other end, we import products from Africa to the
              US, such as leather shoes, coffee, granite, clothing (African
              style) and more.
            </p>
            <!-- <span class="button" @click="onOff = !onOff">Read More</span> -->
          </div>
        </div>

        <div class="transition">
          <img src="../assets/financial.jpg" alt />
          <div class="boxes">
            <h3>FINANCIAL CONSULTING</h3>
            <p>
              We support our clients to have access to financial assistance,
              such as financing and funding from the US Government, US Exim
              Bank, USDA, USTDA, SBA and other US Private Financial Institutions
              to support their purchases, at a great rate.
            </p>
            <p>
              We also offer a comprehensive suite of services designed to assist
              clients across the business cycle – from a business study,
              proactive risk assessment and management in new environments due
              to our experience and knowledge regarding the global market. We
              develop projects and provide studies for the markets that our
              clients are interested to do business in.
            </p>
            <!-- <span class="button" @click="onOff = !onOff">Read More</span> -->
          </div>
        </div>
      </section>
    </div>

    <!-- news -->
    <div class="alarm">
      <div class="coco">
        <div class="img">
          <img src="../assets/LogoIpaa.png" alt="" />
        </div>
        <div class="txt">
          <span
            >Sanity is a perfect mix of ease-to-use paired with the ability to
            customize almost anything you want</span
          >
        </div>
      </div>
    </div>

    <div class="next">
      <span
        >Sanity is a perfect mix of ease-to-use paired with the ability to
        customize almost anything you want</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  components: {
    // FontAwesomeIcon,
  },

  data() {
    return {
      date: new Date().getFullYear(),
      onOff: false,
      show: true,
      // myIcon: faSpinner,
    };
  },
};
</script>

<style scoped lang="scss">
.page {
  .slidee {
    .layourt {
      height: 80vh;
      text-align: center;
      .logo {
        img {
          width: 140px;
          margin-top: 120px;
        }
      }
      .text {
        color: #fff;
        h2 {
          font-size: 60px !important;

          margin-top: 200px;
          font-weight: 500;

          letter-spacing: 1.07px;
        }
        p {
          font-weight: 500;
          font-size: 60px !important;
          letter-spacing: 1.07px;
        }
      }
    }
  }
  .solution {
    padding-top: 50px;
    line-height: 1.7em;
    text-align: center;
    margin-bottom: 20px;
    h1:first-child {
      font-weight: 600;
      color: #262626;
      font-size: 36px;
    }
    .kl0 {
      li {
        text-decoration: none;
        list-style-type: none;
      }
    }
    .p {
      color: #666;
      font-size: 16px;
    }
    p {
      position: relative;
      width: 80%;
      max-width: 1080px;
      margin: auto;
      margin-top: 30px;
    }
    ul {
      list-style-type: none;
    }
    .carousel-item {
      img {
        height: 100vh;
      }
    }
    .alto {
      height: 100vh;
    }
    .alarm {
      .coco {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  .ipaa {
    .sans {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 80px;
      .form {
        .one {
          p {
            font-size: 14px;
            line-height: 1.7em;
            // font-weight: 500;
          }
          .title {
            font-weight: 700;
            font-size: 18px;
            margin-top: 20px !important;
            margin-bottom: 10px !important;
          }
          .color {
            color: #666;
          }
        }
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
        }
        margin-right: 5.5%;
      }
    }
  }

  // showcasestyle
  .content {
    width: 90%;
    margin: auto;
    line-height: 1.7em;
    .showcase {
      .btn {
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        padding: 10px 20px;
        background-color: #262626;
        color: #fff;
        font-size: 15px;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
        }
      }
      height: 400px;
      background: url("../assets/pagebc.png") no-repeat center center/cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-end;
      padding-bottom: 50px;
      margin-bottom: 20px;
      h2,
      p {
        margin-bottom: 10px;
        color: #fff;
      }
    }
  }

  // Home cards

  .home-cards {
    div {
      box-shadow: 0px -1px 1px 0px rgba(0, 9, 17, 0.15);
      &:hover {
        background-color: rgba(0, 38, 60, 0.15);
      }
      .transition {
        transition: transform 0.2s ease-in;
      }
    }
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    p {
      color: #666;
      padding: 0 10px 30px;
      font-size: 14px;
      line-height: 1.7em;
      // font-weight: 500;
    }
    img {
      width: 100%;
      margin-bottom: 20px;
    }
    h3 {
      margin-bottom: 5px;
      text-align: center;
    }
  }
  .transition:hover {
    transform: translateY(-15px);
  }
  // Mobile
  @media (max-width: 500px) {
    .home-cards {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
    .footer {
      padding: 4rem 0;
      // background-color: #004b64;
      .footertext,
      .footerbox,
      .light,
      .links a {
        color: white;
      }
    }
  }

  // Xbox

  .game {
    .content {
      width: 1200px;
      margin: auto;
      color: #666;
      padding: 70px 0;
      .tex {
        text-align: center;
        font-size: 30px;
        color: #6eb92b, #e2e8f0;
      }
      .texttt {
        text-align: center;
        font-size: 16px;
      }
    }
    .overview {
      margin-top: 180px;
      .title {
        text-align: center;
        font-size: 30px;
        color: #008bd6;
      }
      p {
        text-align: center;
      }
    }

    .xbox {
      width: 100%;
      margin: 30px 0 40px;
      background: #e1f1f6 url("../assets/so_bak2.jpg") no-repeat center
        center/cover;
    }
  }

  // .active {
  //   img {
  //     height: 1000vh;
  //   }
  // }
}
</style>
