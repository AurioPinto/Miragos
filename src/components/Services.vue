<template>
  <div class="mainfffff">
    <!-- Showcase -->

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <h3 class="stats-heading text-center my-1 k-5">WHY IPAASOLUTION</h3>
        <p class="k-2">
          IPAA has the SOLUTION for all your need, just ask and we delivery to
          meet your needs.
        </p>
      </div>
    </section>

    <section class="languages">
      <div class="container flex">
        <div class="card">
          <h1>Medical Equipment’s</h1>
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              class="d-flex child-flex"
              cols="6"
              sm="4"
            >
              <v-card flat tile class="d-flex">
                <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
          <!-- <img src="../assets/last-last.png" alt="" /> -->
          <span class="ls">
            IPAA SOLUTION has provided medical equipment, instruments, generic,
            and non-prescription products manufactured in US and Canada and
            distribute or sold mainly to south west Africa.
          </span>
        </div>
        <div class="card">
          <h1>Food products and related items</h1>
          <!-- <img src="../assets/last-last1.png" alt="" /> -->
          <v-row>
            <v-col
              v-for="item in food"
              :key="item.id"
              class="d-flex child-flex"
              cols="6"
              sm="4"
            >
              <v-card flat tile class="d-flex">
                <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
          <p>
            IPAA SOLUTION has established several markets where turn-key
            services provide food products and related items from procurement
            and shipment, to inspection, delivery and assistance in obtaining
            financing. IPAA SOLUTIONS with its Partners are capable of providing
            these services for both bulk-shipment and consumer-packaged
            products. IPAA SOLUTION has experience in exporting items of every
            imaginable type, many by major U.S. manufacturers, such as, rice,
            beans, corn, chicken and so many others.
          </p>
        </div>
        <div class="card">
          <h1>Transport equipment and accessories</h1>
          <v-row>
            <v-col
              v-for="item in cars"
              :key="item.id"
              class="d-flex child-flex"
              cols="6"
              sm="4"
            >
              <v-card flat tile class="d-flex">
                <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
          <!-- <img src="../assets/last-last2.png" alt="" /> -->
          <p>
            IPAA SOLUTION has a diverse background in both "one-of-a-kind" and
            everyday items such as ambulances, bullet-resistant vehicles, buses,
            cranes, dump trucks, dumpsters, freight elevators, mobile platforms,
            refrigerated trucks, tactical vehicles, auto spare parts of any
            brand, aircraft and aircraft parts, lubricants and varied fluids,
            and fuel additives.
          </p>
        </div>
      </div>
    </section>

    <!-- Sub head -->
    <section class="features-sub-head bg-light py-3">
      <div class="container grid">
        <div>
          <h1 class="md">Services</h1>
          <p>
            From the most common items (such as household items), to the most
            unusual (such as a specially-commissioned sculpture for a national
            ceremony), IPAA SOLUTION has the expertise and the resources to
            accomplish virtually any task no matter how small or how large, such
            as:
          </p>
          <ul>
            <li v-for="task in tasks" :key="task">{{ task.text }}</li>
          </ul>
        </div>
        <img src="../assets/buis11.jpg" alt="" />
      </div>
    </section>

    <div class="container">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h1 class="mb-0">
              <button
                class="btn btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Other Equipment
              </button>
            </h1>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              IPAA SOLUTION withs its partnership co., provides also heavy
              equipment (including back hoe loaders, bulldozers, compactors,
              excavators, pavers, wheel and truck loaders, continuous and
              standby power systems, drilling systems, etc.), facility
              programming, warehousing, construction management and
              administration, to purchasing construction material, components,
              furnishings, fixtures and equipment.
            </div>
            <div class="images">
              <img src="../assets/ippa.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h1 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Products from Africa: Raw Material, Food, Clothing and related
                items
              </button>
            </h1>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              IPAA SOLUTION import from Africa selected products approved by the
              US government and AGOA agreement, such as, granite, African
              clothing style, lethal sandals, coffee and ethanol and other
              items.
            </div>
            <div class="images">
              <img src="../assets/afrp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      tasks: [
        {
          text:
            "Advising customers of all available options to fulfill any requirement.",
        },
        {
          text:
            "Assistance in obtaining financing for its credit-worthy customers, from EXIM BANK, USDA, Local BANKS, etc.",
        },
        {
          text:
            "Creating and developing any projects from draft/beginning to its end/conclusion, basis on the clients needs.",
        },
        {
          text:
            "Procurement of products at the most competitive prices in the countries of their origin.",
        },
        { text: "Assistance with local import regulations, where necessary." },
        {
          text:
            "It is IPAA SOLUTION's goal to offer its customer a turn-key operation, with minimal concern and expense.",
        },
      ],
      items: [
        {
          id: 1,
          src: require("../assets/group-8080214.png"),
        },
        {
          id: 2,
          src: require("../assets/medical-equipment-transportation.png"),
        },
        {
          id: 3,
          src: require("../assets/refurbished-ct-scanner-16-slice-500x500.jpg"),
        },
      ],
      food: [
        {
          id: 1,
          src: require("../assets/POY 2018 Winners Article.jpg"),
        },
        {
          id: 2,
          src: require("../assets/71zka3nyM2L._AC_SL1500_.jpg"),
        },
        {
          id: 3,
          src: require("../assets/1550974-04.jpg-1200Wx1200H.jpg"),
        },
      ],
      cars: [
        {
          id: 1,
          src: require("../assets/2018_ford_explorer_angularfront.jpg"),
        },
        {
          id: 2,
          src: require("../assets/Screenshot-2020-05-20-at-12.01.40.png"),
        },
        {
          id: 3,
          src: require("../assets/scania-p-series-2018-rigid-truck-3d-model-max-obj-3ds-fbx-lwo-lw-lws.jpg"),
        },
      ],
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.mainfffff {
  ul {
    padding-left: 40px;
    li {
      padding: 8px;
    }
  }

  .k-5 {
    margin-top: 5.25rem !important;
  }
  .k-2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .dbata {
    text-align: center;
  }
  .space {
    margin-bottom: 50px;
  }

  .h1 {
    padding-top: 40px;
  }
  .kl0 {
    li {
      text-decoration: none;
      list-style-type: none;
    }
  }
  .dora {
    text-align: center;
  }
  .card {
    display: flex;
  }
}

.main {
  color: #718096;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .title {
    text-align: center;
    padding-top: 40px;
    letter-spacing: 1.07px;
    h4 {
      font-size: 2rem;
      color: black;
      margin-top: 60px;
      font-weight: 700;
    }
    p {
      font-size: 20px;
    }
  }
  .design {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: auto;
    min-height: 500px;
    border-radius: 20px;
    margin-bottom: 50px;

    h1 {
      font-weight: 600;
      color: black;
    }
    .left {
      width: 570px;
      img {
        width: 120px;
      }
      .d-one {
        h4 {
          text-align: center;
          padding-left: 188px;
          font-weight: 500;
          color: black;
        }
        .d-1 {
          display: flex;
          align-items: center;
          justify-content: center;
          .d-text {
            p {
              padding-left: 72px;
            }
          }
        }
      }
    }
    span {
      font-size: 14px;
    }
  }
  .other {
    padding: 30px 447px 50px;
    background-color: #f9f9f9;
    h2 {
      text-align: center;
      color: black;
    }
    h4 {
      text-align: center;
      margin-top: 70px;
      color: black;
    }
    p {
      text-align: center;
    }
  }
  .services {
    width: 1869px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 447px 50px;
    h1 {
      color: black;
      font-weight: 600;
    }
    ul {
      padding-left: 90px;
      padding-top: 20px;
      li {
        padding: 8px;
      }
    }
  }
  // .footer {
  //   .footertext {
  //     line-height: 1.7em;
  //     display: flex;
  //     width: 50%;
  //     margin-left: auto;
  //     margin-right: auto;
  //     justify-content: space-between;
  //     align-items: center;
  //     border-bottom: 1px solid #e2e8f0;
  //     .footerbox {
  //       .icons {
  //         i {
  //           padding: 15px;
  //           cursor: pointer;
  //           text-decoration: none;
  //           color: black;
  //         }
  //       }
  //     }
  //     h3 {
  //       font-weight: 600;
  //       color: black;
  //     }
  //     .footerlink {
  //       a {
  //         margin: 8px;
  //         font-weight: 600;
  //         text-decoration: none;
  //       }
  //     }
  //   }
  //   .lineparagraph {
  //     p {
  //       text-align: center;
  //       font-weight: 600;
  //       padding: 20px 0 20px;
  //       color: #718096;
  //     }
  //   }
  // }
}
</style>
