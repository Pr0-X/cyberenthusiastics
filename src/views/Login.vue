<template>
    <v-app>
        <router-link to="register"></router-link>

        <router-view />
        <v-content>
            <v-row align="center" justify="center">
                <v-col class="hidden-sm-and-down" cols="4" xl="3">
                    <v-card color="primary--text" outlined raised width="100%">
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
                                            @click.preventDefault="login()"
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
        </v-content>
    </v-app>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
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
            this.axios
                .post("http://projectcyber.test/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then(function(response) {
                    currentObj.output = response.data;
                    console.log(currentObj.output);
                    this.$router.push({ name: "home" });
                    // window.location.href="/api/home?api_token=" + currentObj.output.access_token;
                    // axios.head("http://projectcyber.test/api/home",{
                    //         header: {
                    //             "Authorization": "Bearer " + currentObj.output.access_token,
                    //             "Accept": "application/json",
                    //     }})
                    //    .then(response => (this.info = response))
                })
                .catch(function(error) {
                    currentObj.output = error;
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
