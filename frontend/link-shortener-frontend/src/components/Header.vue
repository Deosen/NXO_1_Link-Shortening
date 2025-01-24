<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                  <router-link class="navbar-brand" to="home">{{ title }}</router-link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                        <router-link class="nav-link active" to="home">Home
                          <span class="visually-hidden">(current)</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="login">Login</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="features">Features</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="pricing">Pricing</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="about">About</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            title: String
        }
    }
</script>

<style>

</style>