<template>
  <v-app>
    <v-content>
      <HomeNavBar />
      <v-row align="center" justify="center">
        <v-col class="hidden-sm-and-down" cols="4" xl="4">
          <v-card color="primary--text" outlined raised width="100%">
            <v-card-title class="register-form-header font-weight-black">
              Register
            </v-card-title>

            <v-card-text>
              <v-form action="" lazy-validation method="POST">
                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="nameErrors"
                      autocomplete="name"
                      autofocus
                      class="register-input"
                      label="Name"
                      name="name"
                      outlined
                      required
                      type="text"
                      v-model="name"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="emailErrors"
                      autocomplete="email"
                      class="register-input"
                      label="E-MAIL Address"
                      name="email"
                      outlined
                      required
                      type="email"
                      v-model="email"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="passwordErrors"
                      autocomplete="new-password"
                      class="register-input"
                      label="Password"
                      name="password"
                      outlined
                      required
                      type="password"
                      v-model="password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="repeatPasswordErrors"
                      autocomplete="new-password"
                      class="register-input"
                      label="Confirm Password"
                      name="password_confirmation"
                      outlined
                      required
                      type="password"
                      v-model="repeatPassword"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row class="ma-0 pa-0">
                  <v-col class="ma-0 pa-0">
                    <v-checkbox
                      :error-messages="termsAndConditionErrors"
                      class="register-input ma-0 pa-0"
                      label="I accept the terms and Conditions"
                      name="termsAndCondition"
                      required
                      v-model="termsAndCondition"
                    >
                    </v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-btn
                      @click="register()"
                      class="register-btn text-capitalize"
                      color="primary--text"
                      >Register</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col width="100%" class="hidden-md-and-up ma-2">
          <v-card color="primary--text" outlined raised width="100%">
            <v-card-title class="small-register-form-header">
              Register
            </v-card-title>

            <v-card-text>
              <v-form method="POST" lazy-validation action="">
                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="nameErrors"
                      autocomplete="name"
                      autofocus
                      class="register-input"
                      label="Name"
                      name="name"
                      outlined
                      required
                      type="text"
                      v-model="name"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="emailErrors"
                      autocomplete="email"
                      class="register-input"
                      label="E-MAIL Address"
                      name="email"
                      outlined
                      required
                      type="email"
                      v-model="email"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="passwordErrors"
                      autocomplete="new-password"
                      class="register-input"
                      label="Password"
                      name="password"
                      outlined
                      required
                      type="password"
                      v-model="password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      :error-messages="repeatPasswordErrors"
                      autocomplete="new-password"
                      class="register-input"
                      label="Confirm Password"
                      name="password_confirmation"
                      outlined
                      required
                      type="password"
                      v-model="repeatPassword"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row class="ma-0 pa-0">
                  <v-col class="ma-0 pa-0">
                    <v-checkbox
                      :error-messages="termsAndConditionErrors"
                      class="register-input ma-0 pa-0"
                      label="I accept the terms and Conditions"
                      name="termsAndCondition"
                      required
                      v-model="termsAndCondition"
                    >
                    </v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col></v-col><v-spacer></v-spacer>
                  <v-col>
                    <v-btn @click="register()" class="register-btn">
                      Register
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import HomeNavBar from "../components/HomeNavbar";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
      termsAndCondition: null,
      dialog: false,
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ]
    };
  },
  components: { HomeNavBar },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password")
    },
    termsAndCondition: {
      required
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required");
      !this.$v.name.minLength &&
        errors.push("Name must be greater than 3 characters");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be greater than 8 characters");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.required &&
        errors.push("Confirm Password is required");
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("Passwords must be identical.");
      return errors;
    },
    termsAndConditionErrors() {
      const errors = [];
      if (!this.$v.termsAndCondition.$dirty) return errors;
      !this.$v.termsAndCondition.required &&
        errors.push("You must Agree to Continue.");
      return errors;
    }
  },
  methods: {
    register() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      alert("submitting");
      // e.preventDefault();
      let currentObj = this;
      this.axios
        .post("http://projectcyber.test/api/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          currentObj.output = response.data;
          window.location.href = "/login";
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style scoped>
.register-input {
  letter-spacing: 0.2rem;
}
.register-form-header {
  font-size: 2rem;
  letter-spacing: 0.5rem;
}
.small-register-form-header {
  font-size: 2rem;
}
.register-btn {
  font-weight: 200;
}
</style>
