<template>
    <v-app>
        <v-content>
            <HomeNavBar />
            <v-row align="center" justify="center">
                <v-col class="hidden-sm-and-down" cols="4" xl="3">
                    <v-card color="primary--text" outlined raised width="100%">
                        <v-progress-linear
                            v-if="loginLoad"
                            indeterminate
                            color="green"
                        ></v-progress-linear>
                        <v-card-title
                            class="login-form-header font-weight-black"
                        >
                            Login
                        </v-card-title>

                        <v-card-text>
                            <v-form
                                @submit.prevent="login()"
                                lazy-validation
                                method="POST"
                            >
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            :error-messages="emailErrors"
                                            autocomplete="email"
                                            autofocus
                                            class="email-login"
                                            label="Email Address"
                                            lazy-validation
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
                                            autocomplete="current-password"
                                            class="password-login"
                                            id="password"
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
                                        <v-checkbox
                                            name="remember"
                                            label="Remember Me"
                                        >
                                        </v-checkbox>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-btn
                                            class="login-btn text-capitalize"
                                            color="primary--text"
                                            @click="login"
                                        >
                                            Login
                                        </v-btn>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col>
                                        <v-btn
                                            text
                                            class="primary--text"
                                            @click="forgotPassLink"
                                        >
                                            Forgot Your Password?
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col width="100%" class="hidden-md-and-up ma-2">
                    <v-card color="primary--text" outlined raised width="100%">
                        <v-progress-linear
                            v-if="loginLoad"
                            indeterminate
                            color="green"
                        ></v-progress-linear>
                        <v-card-title class="small-login-form-header">
                            Login
                        </v-card-title>

                        <v-card-text>
                            <v-form
                                @submit.prevent="login()"
                                lazy-validation
                                method="POST"
                            >
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            :error-messages="emailErrors"
                                            autocomplete="email"
                                            autofocus
                                            class="email-login"
                                            label="Email Address"
                                            lazy-validation
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
                                            autocomplete="current-password"
                                            class="password-login"
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
                                        <p>{invalidlogin}</p>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-checkbox
                                            name="remember"
                                            label="Remember Me"
                                        >
                                        </v-checkbox>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-btn
                                            class="login-btn text-capitalize"
                                            color="primary--text"
                                            @click="login()"
                                        >
                                            Login
                                        </v-btn>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col>
                                        <v-btn
                                            text
                                            class="primary--text"
                                            @click="forgotPassLink"
                                        >
                                            Forgot Your Password?
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-dialog v-model="unauthorized" max-width="300" light persistent>
                <v-card>
                    <v-card-title class="headline"
                        >Login Credentials Not Valid</v-card-title
                    >

                    <v-card-text
                        >Sorry the credentials provided doesnot match our
                        database.</v-card-text
                    >

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="unauthorized = false"
                            >Try Again</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-content>
    </v-app>
</template>
<script>
import HomeNavBar from "../components/HomeNavbar";
import { required, email } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            email: "",
            password: "",
            invalidlogin: "",
            loginLoad: false,
            unauthorized: false
        };
    },
    components: { HomeNavBar },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    },
    computed: {
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
            return errors;
        }
    },
    methods: {
        login() {
            this.$v.$touch();
            if (this.$v.$invalid) return;
            let currentObj = this;
            currentObj.loginLoad = true;
            this.axios
                .post("http://cyber.test/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then(function(response) {
                    const authUser = {};
                    if (response.status === 200) {
                        authUser.access_token = response.data.access_token;
                        authUser.refresh_token = response.data.refresh_token;
                        window.localStorage.setItem(
                            "authUser",
                            JSON.stringify(authUser)
                        );
                        currentObj.$router.push({ name: "Dashboard" });
                    }
                })
                .catch(function(error) {
                    currentObj.loginLoad = false;
                    currentObj.output = error;
                    currentObj.unauthorized = true;
                    console.log(currentObj.output);
                });
        },
        forgotPassLink() {
            window.location.href = "/";
        }
    }
};
</script>
<style scoped>
.login-form-header {
    font-size: 2rem;
    letter-spacing: 0.5rem;
}
.small-login-form-header {
    font-size: 2rem;
}
.email-login {
    letter-spacing: 0.2rem;
}
.password-login {
    letter-spacing: 0.2rem;
}
.login-btn {
    font-weight: 200;
}
</style>
