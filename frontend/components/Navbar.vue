<template>
    <div class="navbar">
        <NuxtLink to="/">
            <img class='navbar__logo' src='../assets/logo.png' alt="logo"/>
        </NuxtLink>
        <div class='navbar__links'>
            <button class='navbar__links__child'>
                Log In
            </button>
            <div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .navbar {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: hsl(210, 6%, 20%);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

        &__logo {
            height: 100px;
            background-color: inherit;
        }

        &__links {
            background-color: transparent;
            display: flex;
            line-height: 100%;

            &__child {
                background-color: hsl(210, 6%, 30%);
                border: 2px solid black;
                padding: 10px;
                margin-right: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                width: 100px;
            }
            &__child:hover {
                background-color: hsl(210, 6%, 25%);
            }
        }
    }
</style>